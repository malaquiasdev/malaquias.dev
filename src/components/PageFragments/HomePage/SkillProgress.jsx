import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>Algumas das minhas proficiências:</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <h3>Soft Skills:</h3>
        <ProgressBar
          percent={100}
          text="Positividade"
        />
        <ProgressBar
          percent={60}
          text="Controle das emoções"
        />
        <ProgressBar
          percent={99}
          text="Pensamento criativo"
        />
        <ProgressBar
          percent={99}
          text="Colaboração"
        />
        <ProgressBar
          percent={99}
          text="Comunicação eficiente"
        />
        <ProgressBar
          percent={99}
          text="Gerenciamento do tempo"
        />
        <ProgressBar
          percent={99}
          text="Capacidade de planejamento"
        />
        <ProgressBar
          percent={99}
          text="Atenção para ouvir"
        />
        <ProgressBar
          percent={99}
          text="Multitasking"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <h3>Padrões de projeto e arquiteturas:</h3>
        <ProgressBar
          percent={90}
          text="Aplicações Monoliticas"
        />
        <ProgressBar
          percent={70}
          text="Microserviços"
        />
        <ProgressBar
          percent={90}
          text="Serverless"
        />
        <ProgressBar
          percent={40}
          text="SOA"
        />
        <ProgressBar
          percent={30}
          text="CQR (Command Query Responsibility Segregation)"
        />
        <ProgressBar
          percent={30}
          text="Event Sourcing"
        />
        <ProgressBar
          percent={90}
          text="API REST"
        />
        <ProgressBar
          percent={25}
          text="API GraphQL"
        />
        <ProgressBar
          percent={40}
          text="API Socket"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <h3>Linguagens de programação:</h3>
        <ProgressBar
          percent={90}
          text="JavaScript & NodeJS"
        />
        <ProgressBar
          percent={90}
          text="Java"
        />
        <ProgressBar
          percent={40}
          text="Golang"
        />
        <ProgressBar
          percent={30}
          text="Python"
        />
        <ProgressBar
          percent={30}
          text="Ruby"
        />
        <ProgressBar
          percent={20}
          text="Lua"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <h3>Padrões de codigo:</h3>
        <ProgressBar
          percent={90}
          text="Clean Code"
        />
        <ProgressBar
          percent={40}
          text="GOF Design Paterns"
        />
        <ProgressBar
          percent={40}
          text="Domain Driven Design"
        />
        <ProgressBar
          percent={70}
          text="Test Driven Design"
        />
        <ProgressBar
          percent={90}
          text="SOLID"
        />
        <ProgressBar
          percent={15}
          text="KISS"
        />
        <ProgressBar
          percent={10}
          text="YAGNI"
        />
        <ProgressBar
          percent={5}
          text="DRY"
        />
        <ProgressBar
          percent={90}
          text="Programação Orientada a Objetos"
        />
        <ProgressBar
          percent={50}
          text="Programação Funcional"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <h3>Bancos de dados:</h3>
        <ProgressBar
          percent={90}
          text="MySQL"
        />
        <ProgressBar
          percent={70}
          text="PostgreSQL"
        />
        <ProgressBar
          percent={90}
          text="DynamoDB"
        />
        <ProgressBar
          percent={70}
          text="MongoDB"
        />
        <ProgressBar
          percent={90}
          text="Redis"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <h3>AWS:</h3>
        <ProgressBar
          percent={90}
          text="AWS CloudFront (CDN)"
        />
        <ProgressBar
          percent={50}
          text="AWS API Gateway"
        />
        <ProgressBar
          percent={90}
          text="AWS Lambda"
        />
        <ProgressBar
          percent={30}
          text="AWS Fargate"
        />
        <ProgressBar
          percent={90}
          text="AWS Beanstalk"
        />
        <ProgressBar
          percent={50}
          text="AWS CloudWatch"
        />
        <ProgressBar
          percent={50}
          text="AWS X-RAY"
        />
        <ProgressBar
          percent={90}
          text="AWS DynamoDB"
        />
        <ProgressBar
          percent={90}
          text="AWS S3"
        />
        <ProgressBar
          percent={50}
          text="AWS Step Functions"
        />
        <ProgressBar
          percent={50}
          text="AWS Pinpoint"
        />
        <ProgressBar
          percent={70}
          text="AWS Athena"
        />
        <ProgressBar
          percent={90}
          text="AWS SQS"
        />
        <ProgressBar
          percent={90}
          text="AWS SNS"
        />
        <ProgressBar
          percent={50}
          text="AWS RDS"
        />
        <ProgressBar
          percent={90}
          text="AWS Elasticache"
        />
        <ProgressBar
          percent={90}
          text="AWS Elasticsearch"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
