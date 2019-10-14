import React from "react"

function card(props) {
  const { cardTitle, cardSubtitle, link } = props
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card-body">
          <h2 className="card-title"><span style = {{color : "white"}}>{cardTitle}</span></h2>
          <p className="card-text">{cardSubtitle}</p>
        </div>
      </a>
      </div>
    </div>
  )
}

export default card
 