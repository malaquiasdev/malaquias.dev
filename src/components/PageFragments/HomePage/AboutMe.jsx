import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: 'Olá!! Sou natural de <b>Maragogipe</b> uma pequena cidade do interior da Bahia, atualmente demonstro toda a força do dendê da Bahia em São Paulo/SP trabalhando como tech lead na Claro Brasil.',
  paraTwo: 'Ataulmente atuou como backend tech lead em <b>um produto e dois projetos no setor de transformação digital</b> da Claro Brasil, sendo eles: Uma plataforma de streaming video, uma plataforma interna para enviar PUSH Notification e um projeto de recomendação de conteúdos.',
  paraThree: 'Tenho trabalhado constamente com tecnologias <b>NodeJS</b> e com serviços da <b>AWS</b>, como por exemplo: <b>CloudFront (CDN), S3, AWS API Gateway, AWS Lambda, Step Functions, AWS Fargate, CloudWatch, X-RAY, DynamoDB, AWS Pinpoint, AWS Athena, AWS SQS, AWS SNS, AWS RDS, AWS Elasticache.</b>',
};

const AboutMe = () => {
  const description = `${stripTags(pageText.paraOne)} ${stripTags(pageText.paraTwo)} ${stripTags(pageText.paraThree)}`;
  return (
    <>
      <div>
        <SEO
          title="Sobre"
          description={description}
          path=""
          keywords={['Mateus', 'Malaquias', 'Bahia', 'backend', 'tech lead', 'Javascript', 'NodeJS', 'AWS', 'CloudFront (CDN)', 'S3', 'API Gateway', 'AWS Lambda', 'Step Functions', 'AWS Fargate', 'CloudWatch', 'X-RAY', 'DynamoDB', 'AWS Pinpoint', 'AWS Athena', 'AWS SQS', 'AWS SNS', 'AWS RDS', 'AWS Elasticache']}
        />
        <h1 className="titleSeparate">Sobre Malaquias</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} />
      </div>
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
              img="coffee.png"
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
};
export default AboutMe;
