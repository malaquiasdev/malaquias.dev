---
title: 'Node.js Core - Mau começo!'
date: '2017-09-29T23:46:37.121Z'
template: 'post'
draft: false
slug: 'node-js-core-mau-comeco'
category: 'back-end'
tags:
  - 'back-end'
  - 'javascript'
  - 'nodejs'
  - 'javaee'
description: ''
socialImage: 'https://miro.medium.com/max/2000/1*aeWo6e6FC8InJwBl3TmpDw.jpeg'
---

![capa](https://miro.medium.com/max/2000/1*aeWo6e6FC8InJwBl3TmpDw.jpeg)

Caro leitor,

Sinto muito lhe dizer, mas talvez o texto que você esteja a ler agora, seja um tanto desagradável, talvez ele lhe faça perceber o quão pouco sobre Node.js você sabe.

Digo isso, porque você provavelmente já aprendeu a usar socket.io, a criar APIs REST, aprendeu a se conectar com diversos tipos de bancos de dados, aprendeu um pouco sobre event-loop, programação assíncrona, testes mocados e etc.

### Mas você pode afirmar que realmente sabe Node.js?

## Em que momento erramos?

![desventuras em serie](https://miro.medium.com/max/800/1*KsgkyukZY8usqw9iFrHHuA.png)

A maioria dos textos, tutoriais, vídeos, cursos, livros sobre Node.js estão focados no seu ecossistema e não na plataforma. Eles geralmente nos ensinam a utilizar diversas libs e Frameworks.

Entenda que estamos a falar de uma plataforma muito flexível, que não possui uma solução definitiva, que para criarmos APIs que vão além de CRUDs ou I/O de requisições se faz necessário ir a fundo para entender como as engrenagens funcionam.

Um conhecimento sólido sobre como o Node.js funciona é a melhor coisa que você pode fazer antes de pensar em disponibilidade, escalabilidade e resiliência.

Porque para possuir esses três requisitos deve-se pelo menos ter o conhecimento e a confiança para julgar uma lib pela sua qualidade/utilidade e não porque alguém no stack overflow recomendou-lhe.

## Tente se responder essas perguntas!

1. Como funciona o módulo de cluster? Qual a diferença entre ele e um balanceador de carga?
2. O que é a pilha de chamadas (Call Stack)?
3. O que é o libuv e como Node.js o usa?
4. O que é o Event Loop?
5. exports, require e module são objetos globais e estão sempre disponíveis, mas eles são diferentes para cada módulo. Por que?

## A corrida é longa!

![cena do filme rocky balboa](https://miro.medium.com/max/1920/1*ZgzZOfZ8D8OSGq_aLRhQow.jpeg)

Eu tentei avisar que não existe final feliz nesse texto, somente trabalho duro. Cada pergunta feita acima merece um texto único, mas permita-me comentar um pouco sobre.

### Como funciona o módulo de cluster? Qual a diferença entre ele e um balanceador de carga?

![](https://miro.medium.com/max/157/1*n370HV1iZTOO289dUrmh9w.png)

O módulo de cluster realiza fork do seu servidor (nesse momento ele já é um processo no SO), criando assim vários processos escravos. O processo mestre escuta e aceita novas requisições e as distribui entre os outros processos utilizando um algoritmo de balanceamento de carga (round-robin) para evitar a sobrecarga.

A diferença entre um módulo de cluster e um balanceador de carga, é que o ao invés de distribuir carga entre processos, o balanceador distribui requisições.

### O que é a pilha de chamadas (Call Stack)?

A pilha de chamadas (Call Stack) é o mecanismo básico para a execução de código JavaScript, tanto no browser quanto no node. Quando executamos uma função criamos um endereço de retorno em memória para essa função na pilha, isso permite que o node saiba como continuar a execução do seu código uma vez que uma função termine de ser executada. A pilha de chamadas nesse caso é processada pelo V8.

### O que é o libuv e como Node.js o usa?

libuv é uma biblioteca multiplataforma com foco em Entradas/Saídas assíncronas. O seu trabalho é fornecer um loop de eventos e notificações baseadas em chamadas de retorno e outras atividades.

Como se isso não fosse suficiente, o libuv também oferece outras utilidades como temporizadores, acesso ao sistema de arquivos do SO de maneira assíncrona, processos filhos (child processes) e muito mais.

### O que é o Event Loop?

Quando usamos uma linguagem como JavaScript que suporta programação orientada a eventos, uma aplicação reage a certos eventos e responde quando eles ocorrem. Esta é a maneira como o Node.js trabalha com execução assíncrona num ambiente por padrão single thread.

Quando uma operação assíncrona é iniciada o node sabiamente envia essa operação para uma thread diferente, dessa maneira permitindo que o V8 continue a executar o nosso código, o node também chama uma função de retorno quando a função assíncrona terminar de ser executada.

Deve-se ter muito cuidado com o funcionamento do Event Loop, pois sendo o coração de execução da plataforma, pode-se, devido ao mau uso quebrá-lo, caso isso ocorra toda a aplicação será comprometida.

### exports, require e module são objetos globais e estão todos disponíveis em cada módulo, mas eles são diferentes para cada módulo. Por que?

Antes da execução do código de um módulo, o Node.js o envolve no seguinte código:

```
(function (exports, require, module, __filename, __dirname) {
// SEU MÓDULO VIVE AQUI
});
```

Na prática isso significa que exports, require e module parecem ser variáveis globais, mas eles na realidade são realmente específicos para cada módulo.

![](https://miro.medium.com/max/1920/1*PBfGecF7Q-nV5JiHn4GAsg.jpeg)

Como foi avisado, não existe final feliz nesse texto, espero que ele tenha-lhe chamada a atenção para a necessidade de dominar a plataforma além de suas libs e frameworks.

Lembre-se não importa o quanto você bate, mas sim o quanto aguenta apanhar e continuar. O quanto pode suportar e seguir em frente. É assim que se ganha.

_Originally published on [Medium](https://medium.com/collabcode/node-js-core-mau-começo-780d5cfa6e8b)._

---

## Finalizando…

Se você gostou desse post não esquece de dar um like e compartilhar 😄

Se quiser saber o que ando fazendo por ai ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como @ [malaquiasdev](https://twitter.com/malaquiasdev).

Para ler mais post meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](http://malaquias.dev).