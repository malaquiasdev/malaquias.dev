---
title: "Lombok: Corrigindo problema de cobertura de código no SonarQube"
path: blog/lombok-sonarqube-corrigindo-taxa-cobertura
tags: [java]
cover: ./scott-rodgerson-5v235ueAU58-unsplash.jpg
date: 2021-10-05
excerpt: "Como corrigir baixa taxa de cobertura de código no SonarQube quando usar anotações do Lombok"
---

*Photo by [Scott Rodgerson](https://unsplash.com/@scottrodgerson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

No meu projeto atual temos um fluxo de CI/CD automatizado e uma das responsabilidades desse fluxo é detectar se estamos cumprindo a taxa mínima de cobertura de código estabelecida pelo time. 

Entretanto, mesmo possuindo uma cobertura de código com 84% o SonarQube estava sempre informando 30% como resultado, por causa dessa taxa tão baixa o processo de CI/CD parava e o deploy não acontecia.

Demorou um tempo para eu entender que o SonarQube também estava computando a parte do código criada pelas anotações do Lombok.

## A solução para o problema:

A solução é muito simples. Precisei criar um arquivo chamado `lombok.config` na pasta java *(/../src/main/java/lombok.config)* com os valores abaixo:

```
config.stopBubbling = true
lombok.addLombokGeneratedAnnotation = true
```

## Para que serve essas configurações?

O `config.stopBubbling` está informando que a pasta onde o arquivo se encontra é a raiz do projeto e o Lombok não deve procurar arquivos de configurações em outras pastas.

Enquanto `lombok.addLombokGeneratedAnnotation` está configurando o Lombok para adicionar uma anotação `@lombok.Generated` em todos os métodos criados por alguma anotação.

E é exatamente isso que queremos porque o plugin Jacoco responsável por coletar a cobertura de código do projeto e informa ao SonarQube vai passar a ignorar todos os métodos que tiverem essa anotação.

Pronto, problema resolvido. Depois que você aplicar essas configurações a cobertura de código do seu projeto deve voltar ao normal.

## Finalizando...

Se você gostou desse post, por favor não deixe de dar um like e compartilhar 😄

Se quiser saber o que ando fazendo por aí ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como @ [malaquiasdev](https://twitter.com/malaquiasdev) .

Para ler mais post meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](http://malaquias.dev/) .
