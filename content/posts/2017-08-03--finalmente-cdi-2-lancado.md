---
title: 'FINALMENTE! CDI 2.0 FOI LANÇADO!'
date: '2017-02-20T23:46:37.121Z'
template: 'post'
draft: false
slug: 'finalmente-cdi-2-lancado'
category: 'back-end'
tags:
  - 'back-end'
  - 'java'
  - 'cdi'
  - 'javaee'
description: ''
socialImage: 'https://miro.medium.com/max/1211/1*6u2utZHJTP8Hz4XYcD6DaA.png'
---

![capa](https://miro.medium.com/max/1211/1*6u2utZHJTP8Hz4XYcD6DaA.png)

O CDI é a minha segunda especificação Java EE favorita. Resumidamente, ela é responsável pela injeção de dependência e contexto na plataforma. As boas línguas dizem que ela foi uma das grandes novidades quando introduzida no Java EE 6, lá em 2009. Quando comecei a programar com Java EE 7, ela já era bastante adotada no lugar da especificação EJB.

A versão 2.0 acabou de sair do forno para se integrar ao aglomerado de especificações atualizadas para o versão Java EE 8. Todavia agora temos uma super novidade: podemos usar CDI também na plataforma Java SE e facilmente com Microprofile.

Se você não pertence ao mundo Java permita-me fazer um sucinto resumo sobre essas três plataformas:

- Java SE: É todo um canivete suíço focado no desenvolvimento de aplicativos para desktop, além de ser a base da plataforma Java.
- Java EE: É construído em cima do Java SE e usado para desenvolver aplicativos para web, APIs, rotinas etc, geralmente produtos corporativos de grande escala.
- Microprofile: O seu foco é micro serviços e modularidade na plataforma Java EE.

## Principais novidades incluídas no CDI 2.0

Em um único texto não da pra abordar todas as novidades apresentadas nessa nova versão, por isso vamos focar nas principais para entender quais os benefícios conquistados.

![](https://miro.medium.com/max/600/1*OhVSxxNCn7esgergOt8jfw.jpeg)

1. A especificação foi dividida em três partes para que fosse possível entrar na plataforma Java SE, agora temos CDI Core, CDI SE, CDI JAVA EE. Java tem a fama de ser pesadão, mas a plataforma tem se preocupado cada vez mais com a modularidade e controle de recursos computacionais, afinal todo mundo quer ir pra Marte, ou melhor, para nuvem;
2. O Java também está de olho na programação assíncrona e essa especificação foi a que mais avançou nesse quesito. Um dos pontos fortes é a ordem de observação que nos permite dizer se alguma função tem prioridade de execução;
3. Eventos assíncronos;
4. Interfaces de configuração para facilitar nossas vidas e a dos servidores, caso tenhamos necessidade de personalizar certos contextos;
5. Interface para criação de interceptores;
6. Alinhamento com as principais novidades do paradigma funcional implementados no Java 8 (lambda, streams, repeating qualifiers).

## COMO ADICIONAR CDI 2.O AO MEU PROJETO?

Para utilizar o CDI 2.0, basta adicionar cdi-api 2.0 no seu pom.xml do Maven, como no exemplo abaixo:

```
<dependency>
   <groupId>javax.enterprise</groupId>
   <artifactId>cdi-api</artifactId>
   <version>2.0</version>
</dependency>
```

Ah! Não se esqueça que agora podemos usar também com Java SE, mas para isso precisamos de uma ajudinha do Weld SE. Então, adicione ele também nas dependências do seu projeto:

```
<dependency>
    <groupId>org.jboss.weld.se</groupId>
    <artifactId>weld-se-shaded</artifactId>
    <version>3.0.0.Final</version>
</dependency>
```

Opa! Prefere usar o Gradle? Não tem problema.

```
dependencies {
    compile: 'javax.enterprise:cdi-api:2.0'
}
```

Então, na história de hoje aprendemos que Java pesadão está se atualizando. Por isso, é importante que nós, desenvolvedores, fiquemos atentos as suas atualizações para que o passado fique no passado e o futuro seja esplêndido.

#### Fiquem atentos as novidades do [Java EE 8 se inscrevendo no Java EE 8 — The Next Frontier](http://eldermoraes.com/) do [elderjava](https://twitter.com/elderjava)

_Originally published on [Medium](https://medium.com/collabcode/finalmente-cdi-2-0-foi-lançado-2911eec56ac8)._

---

## Finalizando…

Se você gostou desse post não esquece de dar um like e compartilhar 😄

Se quiser saber o que ando fazendo por ai ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como @ [malaquiasdev](https://twitter.com/malaquiasdev).

Para ler mais post meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](http://malaquias.dev).
