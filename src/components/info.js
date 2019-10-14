import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaDev as DevTO,
  FaInstagram as Insta,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hi, I'm</span> <br />
        Mateus Malaquias.
      </div>
      <div className="h1 code mt-4 mb-3">{"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-left info">
        "jobRole": "Software Development Engineer", <br /> <br /> 
        "about": "I'm a back-end developer who like to work and collaborate with teams and also have good interpersonal skills",
        <br /> <br /> 
        "working": [ "#BFF", "#API", "#javascript", "#node", "#serverless", "#cloudfront", "#AWS", "#lambda", "#fargate", "#cloudwatch", "#xray", "#dynamodb", "#docker" ],
        <br />  <br />
        "studying": [ "#java", "#typescript", "#docker", "#fargate" ]
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/malaquiasdev">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/malaquiasdev">
          <Github />
        </a>
        <a
          className="mr-5 icon" href="https://www.linkedin.com/in/mateus-malaquias-692532b5/">
          <Linkedin />
        </a>
        <a
          className="mr-5 icon" href="https://dev.to/malaquiasdev">
          <DevTO />
        </a>
        <a className="mr-5 icon" href="https://www.instagram.com/malaquiasdev/">
          <Insta />
        </a>
      </div>
    </div>
  )
}
