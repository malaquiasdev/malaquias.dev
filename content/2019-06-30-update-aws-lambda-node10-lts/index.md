---
title: "Você já pode atualizar suas AWS Lambdas para o Node.js 10 LTS"
path: blog/update-aws-lambda-node10-lts
tags: [serverless, nodejs, aws]
cover: ./capa.jpg
date: 2019-06-30
excerpt: 
---

Não faz muito tempo que a [AWS anunciou que um dos seus serviços que mais uso (AWS Lambda) daria então suporte ao runtime do Node.js 10 LTS](https://aws.amazon.com/about-aws/whats-new/2019/05/aws_lambda_adds_support_for_node_js_v10/), isso provavelmente faz parte dos planos da empresa de cada vez mais suportar plataformas modernas nos seus serviços.

Atualmente já suportando código de outras plataformas como por exemplo, Python, Java, C#, Ruby e Go.

Você ainda está usando o Node.js 6.x?

## Você precisa sair do Node.js 6.x

O Node.js 6.x foi mantido como LTS (suporte de longo prazo) desde de 2016 e o seu ciclo de vida chegou ao fim em 30 de abril de 2019. Logo essa versão não receberá novas atualizações de bugs críticos, correções de segurança, patches ou outras atualizações importantes.

Com a adição do Node.js 10.x, o AWS Lambda continua a suportar dois runtimes da plataforma JavaScript. O Node.js 8.10 ainda é suportado, no entanto, ele está entrando na fase final de manutenção e suporte que vai até 2020, enquanto a 10.x está atualmente na fase LTS.

Acompanhando a comunidade Serverless em volta desse comunicado pude perceber que muita gente ainda possui o receio de realizar o upgrade para a versão 10.x por pensarem que esse novo runtime é beta na AWS.

Fiquei com a impressão que muita gente ficou com o pé atrás por ainda não estarem adaptados a uma nova cultura de que o seu ambiente de desenvolvimento/produção não será de sua responsabilidade e sim do provedor do serviço. O fato da AWS não anunciar esse suporte como beta para mim é justificativa mais do que suficiente para atualizar os meus AWS Lambdas.

## Sim, já estou usando Node.js 10.x

O Node.js 10.x traz uma versão mais recente do [V8](http://v8.dev). Isso introduz várias alterações na maneira como nosso código é compilado, armazenado em cache e executado.

Hoje você já pode alterar para a nova versão sem precisar fazer nenhuma alteração de código para garantir a compatibilidade basta atualizar a configuração da AWS Lambda para a nova versão. Além disso o Node.js 10.x já foi implementado em todas as regiões onde o serviço está disponível.

## Principais diferenças entre o Node.js 6.x e o Node.js 10.x

As métricas fornecidas pelo [Benchmarking do Node.js](https://benchmarking.nodejs.org) destacam os benefícios de desempenho da atualização do Node.js 6 para a versão LTS mais recente, o Node.js 10.x:

- As operações por segundo são quase duas vezes mais altas no Node.js 10.x;
- A latência diminuiu em 65% no Node.js 10.x;
- O peso de carregamento do container é 35% menor no Node.js 10.x, resultando em melhor desempenho no caso de um [cold start](https://docs.aws.amazon.com/pt_br/lambda/latest/dg/running-lambda-code.html);
- O Node.js 10.x foi o primeiro runtime a ser atualizado para o OpenSSL 1.1.0;
- [Suporte nativo para HTTP 2, adicionado primeiramente no Node.js 8.x LTS, foi estabilizado no Node.js 10.x, ele oferece aprimoramentos de desempenho sobre HTTP 1 (incluindo latência reduzida e sobrecarga de protocolo minimizada) e adiciona suporte para solicitação de priorização e push do servidor](http://hipsters.tech/http2-magia-com-o-novo-protocolo/);
- A versão 10.x introduz novos recursos de linguagem JavaScript, como Function.prototype.toString () e async-await por exemplo.

## Atualizando o runtime pelo console da AWS

![](https://i.ibb.co/64F7xCT/Screen-Shot-2019-06-23-at-09-20-38.png)

![](https://i.ibb.co/rFjtz2h/Screen-Shot-2019-06-23-at-09-20-50.png)

![](https://i.ibb.co/XWbQ1vJ/Screen-Shot-2019-06-23-at-09-21-00.png)

## Atualizando o runtime pelo Serverless Framework

Antes de atualizar o runtime no Serverless Framework, você precisa ter a versão do Node.js 10.x instalada em sua máquina, para mim a melhor maneira de se manter diversas versões do Node.js é utilizando o NVM, já comentei como instalar e utilizar o NVM no artigo [Como instalar o Node.js corretamente no Linux](https://malaquias.dev/posts/como-instalar-o-nodejs-corretamente-no-linux/).

Com a certeza que temos o NVM instalado nos resta então instalar a versão 10.x:

```
nvm install 10
```

E atualizamos o runtime dentro do arquivo **serverless.yml** conforme o exemplo abaixo:

```
provider:
  name: aws
  runtime: nodejs10.x
```

Pronto agora é só fazer o deploy, um café e relaxar.

## Conclusão

A maioria das aplicações em produção criadas usando Node.js fazem uso das versões LTS, por isso é altamente recomendável que você atualize qualquer aplicação ou AWS Lambda que está atualmente usando a versão Node.js 6.x para o Node.js 10.x, a versão LTS mais recente do momento.

Crie a cultura de manter não apenas o node como também suas dependências atualizadas, evitando surpresas como quebra de versão e problemas de segurança.

*Originally published on [dev.to](https://dev.to/collabcode/voce-ja-pode-atualizar-suas-aws-lambdas-para-o-node-js-10-lts-207l).*

---

## Finalizando…

Se você gostou desse post não esquece de dar um like e compartilhar 😄

Se quiser saber o que ando fazendo por ai ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como @ [malaquiasdev](https://twitter.com/malaquiasdev).

Para ler mais post meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](http://malaquias.dev).
