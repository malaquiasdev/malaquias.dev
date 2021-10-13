import React from 'react';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: 'Olá!! Sou natural de <b>Maragogipe</b> uma pequena cidade do interior da Bahia, atualmente demonstro toda a força do dendê da Bahia em São Paulo/SP trabalhando como Software Engineer no Banco Itaú.',
  paraThree: 'Tenho trabalhado constamente com tecnologias <b>NodeJS</b> e com serviços da <b>AWS</b>, como por exemplo: <b>CloudFront (CDN), S3, AWS API Gateway, AWS Lambda, Step Functions, AWS Fargate, CloudWatch, X-RAY, DynamoDB, AWS Pinpoint, AWS Athena, AWS SQS, AWS SNS, AWS RDS, AWS Elasticache.</b>',
};

const AboutMe = () => {
  const description = `${stripTags(pageText.paraOne)} ${stripTags(pageText.paraThree)}`;
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
