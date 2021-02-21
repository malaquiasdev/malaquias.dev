import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';

const Hobbies = () => (
  <>
    <div>
      <h2>Hobbies</h2>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="running.svg"
            alt="imagem de um tênis de corrida"
            textH4="Correr ao ar livre"
            textH3="Um dos meus passatempos preferidos é correr nos parques das cidade."
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="book-stack.svg"
            alt="imagem de uma pilha de livros"
            textH4="Leitura"
            textH3="Sou um ávido leitor de mangás, comic books e livros de ficção."
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="game-controller.svg"
            alt="imagem de um controle de video game"
            textH4="Jogos"
            textH3="Sempre que me sobra um tempo, jogo uma ou duas partidinhas de Fifa no PS4."
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="snake.svg"
            alt="imagem de uma cobra"
            textH4="Serpentes"
            textH3="Sou apaixonado por serpentes e sempre que possivel estou estudando sobre elas."
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="blog.svg"
            alt="imagem da logo do blogger"
            textH4="Blog"
            textH3="Mantenho um blog, onde escrevo sobre assuntos que gosto de estudar."
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee-break.svg"
            alt="imagem de um café"
            textH4="Café"
            textH3="Quem não gosta de tomar um café?"
          />
        </Col>
      </Row>
      <br />
    </div>
  </>
);
export default Hobbies;
