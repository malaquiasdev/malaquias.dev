import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { graphql } from "gatsby"
import Card from "../components/card"
import { Helmet } from "react-helmet"

function Posts({ data }) {
  const projectList = data.allPostsYaml.edges

  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title> Artigos </title>{" "}
      </Helmet>{" "}
      <div className="row">
        {" "}
        {projectList.map(({ node }) => {
          return (
            <Card
              cardTitle={node.title}
              cardSubtitle={node.subtitle}
              link={node.link}
              key={node.id}
            />
          )
        })}{" "}
      </div>{" "}
    </div>
  )
}

export default Posts

export const query = graphql`
  {
    allPostsYaml {
      edges {
        node {
          title
          subtitle
          link
          id
        }
      }
    }
  }
`
