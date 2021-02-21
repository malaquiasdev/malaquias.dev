import React from 'react';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: 'Olá!! Sou natural de <b>Maragogipe</b> uma pequena cidade do interior da Bahia, atualmente demonstro toda a força do dendê da Bahia em São Paulo/SP trabalhando como tech lead na Claro Brasil.',
  paraTwo: 'Atualmente atuo como backend tech lead em <b>um produto e dois projetos no setor de transformação digital</b> da Claro Brasil, sendo eles: Uma plataforma de streaming video, uma plataforma interna para enviar PUSH Notification e um projeto de recomendação de conteúdos.',
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
    </>
  );
};
export default AboutMe;
