---
title: O Guia dos Serverless das Galaxias - Introdução
date: "2019-06-16T23:46:37.121Z"
template: "post"
draft: false
slug: "/posts/o-guia-dos-serverless-das-galaxias-introducao/"
category: "Serverless"
tags:
  - "Nodejs"
  - "Serverless"
  - "Desenvolvimento"
  - "BackEnd"
  - "AWS"
description: "Esse artigo faz parte de uma série onde compilo tudo que aprendi/estudo utilizando o modelo Serverless computing no meu dia a dia..."
---

![Serverless Capa](https://i.ibb.co/c8N8sTg/serverless-capa.jpg)

## [Esse artigo faz parte de uma série onde compilo tudo que aprendi/estudo utilizando o modelo Serverless computing no meu dia a dia.](http://malaquias.dev/pages/o-guia-dos-serverless-das-galaxias)

Depois de décadas cuidando de servidores/infraestrutura para manter nossas aplicações ativas, conseguimos evoluir e embarcar tudo ou quase tudo que precisamos dentro de containers. Algum tempo depois eis que surge um novo modelo computacional que vem atraindo admiradores e ceticos a seu respeito. 

Na minha opinião esse modelo não está aqui para matar nenhum outro já existente, mas sim para agregar valor. Então mais uma vez venho pedir que pare de procurar soluções milagrosas onde não se existe e seja mais racional com suas escolhas.

Digo isso porque ultimamente o Serverless vem sendo vendido como o auge da evolução da computação em nuvem por muita gente, mas será que ele serve para você?

Não estou aqui para lhe dar essa resposta, mas espero que até o final desse artigo **você consiga se responder**.

## O que é Serverless?

Assim como ninguém mais se preocupa onde estão os cabos de internet ao usar uma rede wireless, na arquitetura serverless não nos preocupamos onde estão nossos servidores, mas isso não quer dizer que eles não existam.

Basicamente nesse modelo não precisamos mais se preocupar como o nosso código será executado, ficando assim livre para pensar em onde (regiões) e quando ele será executado ou até mesmo se precisamos de código para ser executado na nossa solução.

As vezes nem precisamos escrever código, basta fazer com que os serviços se comuniquem.

Existem quatro características principais que definem uma aplicação/plataforma como Serverless:


### Gerenciamento Zero

Enquanto as plataformas como VMs e contêineres, ainda precisam de configuração e administração dos servidores, o serverless é uma experiência completamente diferente. Quando você estiver pronto(a) para implantar o código, não precisará provisionar nada antes ou gerenciar qualquer coisa depois.

Ter que cuidar de servidores, VMs ou contêineres geram despesas além do computacional porque nessa conta temos que incluir número de funcionários, ferramentas, treinamento, tempo, energia, água, alimentação, transporte e etc.

São custos que nós pessoas desenvolvedoras não costumamos enxergar, mas eles estão lá. Com tudo sendo executado na nuvem e o provedor gerenciando a instância ou o sistema operacional para nós, esse modelo altera drasticamente o cálculo do custo de uma aplicação.

Aqui não se aplica mais o conceito de “capacidade pré-planejada” e nem se exige regras de “escalonamento automático”. O escalonamento acontece automaticamente e passado o período de pico se reduz os recursos de computação para que nunca haja capacidade ociosa.

### Pague quando usar (ou não @.@)

Isso geralmente incentiva todo mundo a experimentar o modelo Serverless pela primeira vez. É muito atraente ter a utilização completa de recursos sem pagar um centavo por tempo ocioso. Ou seja, não a cobrança por instâncias de VMs ou contêineres em estado ocioso, logo só há cobrança quando o código é executado.

No caso dos bancos de dados, não há nenhum custo para a capacidade de leitura/escrita, somente é cobrado o tempo de execução e a quantidade de dados trafegada. 

É claro que isso não inclui outros custos, como os de armazenamento com monitoração de estado ou recursos adicionais, funcionalidade, conjunto de recursos e etc.

Para mim “pagar quando usar” esconde custos que ficam lá nas entrelinhas da arquitetura, porque quando focamos somente nesse pensamento deixamos de olhar para perguntas extremamente importantes que podem fazer a nossa solução Serverless mais cara que as já utilizadas hoje em dia.

Quais são nossas métricas de uso dos serviços por dia/semana/mês/ano? Qual o nosso caso de uso, ele é realtime ou nosso tempo de processamento é muito grande? Quanto de memória vamos precisar utilizar? Qual o meu provedor e quanto ele cobra em relação ao seus concorrentes? O meu runtime é de ferramentas que possuem máquinas virtuais e exigem bastante memória para executar ou são de linguagens fracamente tipadas?

Todas essas perguntas precisam ser levadas em consideração na hora de se utilizar Serverless.

### Podemos ter uma função como unidade de implantação

Essa arquitetura é compostas por códigos muito pequenos, independentes e fracamente acoplados (lembra dos microsserviços?). A principal vantagem disso é que temos partes da aplicação organizadas de acordo com suas responsabilidades. Eles podem ser desenvolvidos e implantados de forma independente. O resultado é menos bloqueadores e maior autonomia e produtividade do desenvolvedor.

Outro ponto importante que temos que ter em mente são os tamanhos de nossas funções, elas necessariamente não precisam ser pequenas demais, hoje a AWS suporta lambdas de até 250 megas por exemplo.

Costumo utilizar como unidade de implantação um endpoint de uma API.


### Event-Drive

Este aspecto do Serverless é muito importante a longo prazo. Por padrão as funções não possuem estado de maquina e estão inativas até que algum evento as façam reagir. O evento é o que os traz à vida a uma função e fornece os dados/contexto para que ela possa realizar seu trabalho.

 Arquiteturas orientadas a eventos não são novidade, mas a ascensão do modelo computacional Serverless renovou o interesse nesse tópico porque por padrão toda função é orientada a eventos.

Se quiser entender mais como funciona uma aplicação orientada a eventos recomendo a leitura do artigo [Desenvolvimento de sistemas e Arquitetura baseada em Eventos da Paula Santana](https://medium.com/devs-javagirl/desenvolvimento-de-sistemas-e-arquitetura-baseada-em-eventos-3a9894f6a70a).

## Conclusão

Espero que você tenha gostado do artigo de hoje, se tiver alguma dúvida fique a vontade para me procurar nas redes como @malaquiasdev.
