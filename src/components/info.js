import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaDev as DevTO,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Oi, me chamo</span> <br />
        Mateus Malaquias.
      </div>
      <div className="h1 code mt-4 mb-3">{"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
          Sou Baiano, pedreiro de software e estou sempre estudando melhores práticas, experimentando novas linguagens e tecnologias.
        <br /> <br /> 
        Trabalhando com: #javascript #nodejs #serverless #aws #opensource #produtividade.
        <br />  <br />
        Estudando: #java #kotlin #springboot #docker #awsfargate
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
        <a className="mr-5 icon" href="mailto://mateusmalaquiasdev@outlook.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
