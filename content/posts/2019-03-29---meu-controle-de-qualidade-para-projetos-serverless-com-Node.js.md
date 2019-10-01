---
title: Meu Controle De Qualidade Para Projetos Serverless Com Node.js
date: "2019-03-29T23:46:37.121Z"
template: "post"
draft: false
slug: "/posts/meu-controle-de-qualidade-para-projetos-serverless-com-nodejs/"
category: "Serverless"
tags:
  - "Nodejs"
  - "Serverless"
  - "Desenvolvimento"
  - "Qualidade de Código"
  - "Eslint"
  - "Prettier"
  - "Jest"
description: "Com quase um ano trabalhando com Serverless, Node.js e JavaScript pude perceber o quão flexível essa stack é! Também pude perceber como o estilo de escrever código de cada pessoa que participa do projeto pode deixar a manutenibilidade do mesmo um caos...."
---

![capa](https://malaquiasdev.github.io/images/posts/quality-control-coaching-1.jpg)

Com quase um ano trabalhando com [Serverless, Node.js e JavaScript](https://blog.rocketseat.com.br/serverless-nodejs-lambda/) pude perceber o quão flexível essa **stack** é! Também pude perceber como o estilo de escrever código de cada pessoa que participa do projeto pode deixar a manutenibilidade do mesmo um caos.

Estudando um pouco e perguntando na comunidade acabei encontrando um leque de ferramentas muito versáteis. Com a ajuda do [ESLint](https://eslint.org/docs/user-guide/getting-started), [Prettier](https://prettier.io) e [Jest](https://jestjs.io), estamos conseguindo garantir uma boa qualidade de código por aqui.

No artigo de hoje quero compartilhar com vocês um pouco de informação a respeito dessas ferramentas e quais regras utilizamos no meu time, provavelmente para a maioria das aplicações essas regras podem ser **"too much"**. 

Mas trabalhando no dia a dia com APIs de alto desempenho e com baixo uso de memória, elas estão ajudando e muito a nossa caminhada.

Vamos primeiro falar sobre o básico.


## O que é um guia de estilo e por que preciso de um?

Um guia de estilo é basicamente um conjunto de regras que irão definir como o seu código será escrito e organizado. Isso se torna muito útil quando uma nova pessoa entra no time ou quando vamos dar manutenção.

No contexto de negócio a sua empresa provavelmente não se importa com isso, mas  por que você precisa de um?

Vamos imaginar um cenário onde temos três pessoas desenvolvedoras: Fulano, Beltrana e Ciclana. Cada uma dessas pessoas gosta de escrever código de uma maneira diferente, ou seja, Beltrana prefere usar tab para espaçamento, enquanto Fulano e Ciclana preferem espaços, Beltrana prefere usar ponto e vírgula, Ciclana prefere usar arquivos com poucas linhas de código e por aí vai…

Agora imagine o caos que seria se somente Beltrana usasse ponto e vírgula e tab? Se somente Ciclana tivesse arquivos pequenos?

Com a nossa aplicação crescendo as coisas podem ficar confusas muito rapidamente. É aí que os guias de estilo são muito úteis. No passado, pesquisei dois guias de estilo, vamos dar uma olhada neles e depois explicarei como criei uma extensão de algumas regras.


### JavaScript Standard Style Guide

É de longe o mais usado! Talvez pelo fato de prometerem "Zero configurações a realizar. Nenhum arquivo .eslintrc, .jshintrc ou .jscsrc para gerenciar. Apenas funciona".

Por ser usado em muitos projetos open source, recomendo que leia sobre as regras deste guia [no seu site](https://standardjs.com).


### Airbnb JavaScript Style Guide

Outro estilo de código bastante utilizado (atualmente uso ele), foi criado pelo [Airbnb](https://github.com/airbnb). Eles cobrem quase todos os aspectos do JavaScript e contém todas as regras de ESLint usadas nos produtos da Airbnb.

Recomendo que você explore o guia no [GitHub](https://github.com/airbnb/javascript).


## Conhecendo um pouco do ferramental


### Estlint

O ESLint é uma ferramenta maravilhosa que analisa o seu código e sinaliza problemas encontrados de acordo com a configuração utilizada por você. Com ele é possível encontrar bugs, códigos muito complexos e até estilos de codificação que não foram atendidos. 

Sua instalação e configuração é bem simples, não vou explicar esse processo então recomendo [ler esse texto do Lucas Ferreira](https://medium.com/jaguaribetech/melhorando-a-qualidade-do-seu-c%C3%B3digo-com-airbnb-style-guide-eslint-ba2979cabcaa). 


### Prettier

O Prettier é simplesmente um formatador de JavaScript. Projetado por James Long, ele suporta linguagens como JavaScript (ES8 incluído), TypeScript, JSX, Fluxo, JSON, GraphQL e até mesmo CSS.

Não encontrei uma leitura em português, mas essa em inglês [escrito pelo Raphael Ugwu está muito boa](https://medium.com/dailyjs/getting-started-with-prettier-writing-clean-concise-code-6838e0912175).


### Jest

Jest é uma biblioteca desenvolvida pelo Facebook que fornece uma estrutura completa para desenvolvimento de testes de todos os níveis (unitário, integração e por aí vai). 

O Guilherme Cabrini da Silva escreveu um artigo muito bom para quem está começando, [recomendo leitura também](https://medium.com/exactaworks/iniciando-com-jest-ac4301236203).

Para resumir ainda melhor o uso de todas essas ferramentas, recomendo esse vídeo da galera do Rocketseat.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TI4v4Y8yRjw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Agora vamos ao que interessa!


## As minhas regras

Muitas das regras que uso são personalizadas em cima das regras do Airbnb, então validações como variáveis não sendo usadas, chaves duplicadas, aspas duplas tudo isso está sendo validado pelo Airbnb. Me atentei a personalizar poucas regras.


### Regra 1: Complexidade

```
"complexity": ["warn", 5]
```

Essa regra tem o foco de reduzir a complexidade ciclomática do seu código, medindo a quantidade de ramificações que uma função possui. Imagine uma ramificação como um caminho que seu usuário vai percorrer para realizar determinada ação.

A Jakeliny Gracielly abordou esse assunto no 7Master, recomendo que assistir para entender melhor.

<iframe width="560" height="315" src="https://www.youtube.com/embed/mIvKV08100Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

O time do Airbnb é decidiu desabilitar essa validação no ESLint, mas o meu time tem configurado o valor 5, logo o código abaixo vai retornar um aviso quando fizermos deploy.

```
function a(x) {
   if (true) {
      return x;
   } else if (false) {
      return x+1;
   } else if (1) {
       return x+2;
   } else if (2) {
       return x+4;
   } else {
      return 4; // quinto caminho**
   }
}
```
Quanto menor for a complexidade ciclomática da sua função mais fácil ficará a manutenção da mesma.

### Regra 2: Quantidade de instruções numa função

```
"max-statements": ["warn", { "max": 10 }],
"max-statements-per-line": ["warn", { "max": 1 }]
```

Funções devem ser curtas e concisas. Isso vai facilitar a leitura, a manutenção e a evitar bugs. 

Com **"max-statements"** você vai especificar o número máximo de instruções permitido em uma função.

Logo o código abaixo vai retornar um aviso e uma futura refatoração será planejada.

```
const foo = () => {
   const foo1 = 1;
   const foo2 = 2;
   const foo3 = 3;
   const foo4 = 4;
   const foo5 = 5;
   const foo6 = 6;
   const foo7 = 7;
   const foo8 = 8;
   const foo9 = 9;
   const foo10 = 10;
   const foo11 = 11; // Muitas instruções
};
```

Com **"max-statements-per-line"** estou limitando o número de instruções permitidas em uma única linha, porque muitas instruções na mesma linha também atrapalham. 

Logo as declarações abaixo, por exemplo, nos enviaria um aviso.

```
const bar; const baz; // Declaração múltipla
if (condition) { bar = 1; } else { baz = 2; } // Declaração múltipla
```


### Regra 3: Aninhamentos
```
"max-nested-callbacks": ["error", { "max": 2 }],
"max-depth": ["error", { "max": 2 }]
```

Lembra do callback hell? Não é só ele que me preocupa, conseguimos criar “hell” para todo código possível de aninhamentos como, por exemplo: promises, loops e condicionais.

Então um código como o abaixo, por exemplo, não passaria:

```
doSomethingAsync(result => {
  doSomethingElse(result.thing, err => {
    if (!err) {
      if (result.success) {
        if (true) {
          doLastAsyncThing(() => {
            console.log(result);
          });
        }
      }
    }
  });
});
```

### Regra 4: Quantidade de parâmetros

```
"max-params": ["warn", 3],
```

Funções que possuem muitos parâmetros podem se tornar difíceis de ler, usar e manter. Porque elas vão requerer um entendimento melhor sobre cada parâmetro, tipo e a ordem de utilização.

Por padrão o ESLint segue a recomendação do [Clean Code do Uncle Bob](http://blog.cleancoder.com/), todavia todas as regras que estou personalizando são sugestões de melhorias por isso ela entra na minha lista.

Esse é um assunto bastante controverso entre as pessoas desenvolvedoras, costumo pensar que se tivermos muitos parâmetros, é um sinal que a função está fazendo muitas coisas e não respeita o [Princípio de Responsabilidade Única](https://www.lambda3.com.br/2009/02/principio-da-responsabilidade-unica-srp/). Talvez existam um ou mais parâmetros que possam ser relacionados e transformados em um objeto.

Logo o código abaixo não vai funcionar:

```
const foo = (bar, baz, qux, qxx) => {
   doSomething();
};
```

### Regra 5: Quantidade de linhas

```
"max-lines": ["warn", { "max": 50, "skipComments": true }],
"max-len": ["warn", 80, { "ignoreUrls": true }],
```
Não concordo com o [Uncle Bob](http://blog.cleancoder.com/) nos mínimos detalhes, mas ele tem uma afirmação que não tenho como refutar: 


#### If small is good, then smaller must be better - Uncle Bob

Com esse pensamento em mente podemos aplicar isso para nossas funções, classes, modulos, pacotes, ao infinito e além!

Poucas pessoas sentem o mau cheiro de código em arquivos muito grandes. Para mim arquivos grandes tendem a fazer muitas coisas, esse é outro sinal da quebra do  [Princípio de Responsabilidade Única](https://www.lambda3.com.br/2009/02/principio-da-responsabilidade-unica-srp/). 

Embora não exista um número máximo para o tamanho de um arquivo, acredito que a maioria das pessoas concorda comigo quando digo que variar entre 100 a 200 linhas é um ponto seguro.

Todavia no meu caso quanto menor a responsabilidade de um módulo node.js, mais fácil fica de solucionar um bug ou realizar uma refatoração, por isso o meu número máximo é tão baixo, quero desenvolver módulos especialistas em fazer um pedaço de um módulo maior.

Agora falando sobre o tamanho máximo de uma linha, sigo a recomendação do [Douglas Crockford que ele escreveu no livro O Melhor Do JavaScript](https://www.amazon.com.br/Melhor-Do-JavaScript-Douglas-Crockford/dp/8576082799).


### Regra 6: Reatribuição de parâmetros numa função

```
"no-param-reassign": ["warn", {
   props: true,
   ignorePropertyModificationsFor: [ 
      'acc', // for reduce accumulators
      'accumulator', // for reduce accumulators
      'item', // for map interator
      'e', // for e.returnvalue
      'module', // for curry functions
      'req', // for requests obj
      'request', // for requests obj
      'res', // for responses obj
      'response', // for response obj
    ] 
}],
```

Salvo as exceções que estão listadas acima gosto de evitar ao máximo uma atribuição de valor para as variáveis declaradas como parâmetros de função porque dependendo do meu fluxo de negócio posso cair em um comportamento confuso, já que modificar parâmetros de função também irá alterar o objeto passado como argumento.

Na prática, acredito que os efeitos colaterais nos parâmetros podem causar um fluxo de execução contra intuitivo e dificultar a localização de erros.


## Reunindo todas as regras

```
"rules": {
    "prettier/prettier": ["error"],
    "arrow-body-style": "off",
    "function-paren-newline": "off",
    "complexity": ["warn", 5],
    "max-statements": ["warn", { "max": 10 }],
    "max-statements-per-line": ["warn", { "max": 1 }],
    "max-nested-callbacks": ["warn", { "max": 2 }],
    "max-depth": ["warn", { "max": 2 }],
    "max-params": ["warn", 3],
    "max-lines": ["warn", { "max": 50, "skipComments": true }],
    "max-len": ["warn", 80, { "ignoreUrls": true }],
    "no-param-reassign": ["warn", {
        props: true,
        ignorePropertyModificationsFor: [ 
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'item', // for map interator
        'e', // for e.returnvalue
        'module', // for curry functions
        'req', // for requests obj
        'request', // for requests obj
        'res', // for responses obj
        'response', // for response obj
        ] 
    }], 
  }
```

## Regra 7: Prettier com EditorConfig

.prettierrc

```
{
   "printWidth": 80,
   "singleQuote": true
}

```

.editorconfig

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
# editorconfig-tools is unable to ignore longs strings or urls
max_line_length = null
```

Não tenho muito o que falar sobre essas regras, elas são usadas apenas para automatizar o processo de formatar o código.

## Regra 8: Testes com unitários com Jest

Nos meus projetos serverless **não** escrevo testes de integração porque eles vão me gerar um custo desnecessário para o que eu preciso, me atento a fazer somente testes unitários com a maior cobertura possível que hoje gira em torno de 90%.

Se você está começando com testes ou não tem o costume de escrever testes e vai começar a desenvolver um projeto serverless os seus testes no final do dia vão ser seus melhores amigos. 

Recomendo que você mantenha a sua cobertura acima do que se costuma recomendar (70%), no começo vai parecer um saco ficar escrevendo tanto teste, mas com a medida que a sua aplicação for crescendo/mudando e os erros forem aparecendo você vai perceber que os testes vão te ajudar a enxergar o problema e muitas das vezes vão servir como uma documentação do seu código por isso escreva boas descrições.

Por isso recomendo que você leia esses dois artigos do [Lucas Santos](https://twitter.com/_StaticVoid):

*   [Testes: O que são? Aonde vivem?](https://medium.com/trainingcenter/testes-o-que-s%C3%A3o-aonde-vivem-4b8dfe12269e)
*   [Testes Unitários 101: Mocks, Stubs, Spies e todas essas palavras difíceis](https://medium.com/trainingcenter/testes-unit%C3%A1rios-mocks-stubs-spies-e-todas-essas-palavras-dif%C3%ADceis-f2765ac87cc8)

Outra coisa que ajudam e muito na criação de testes unitários é [uma boa injeção de dependências](https://www.youtube.com/watch?v=0X1Ns2NRfks), o [Vinicius Reis](https://twitter.com/LuizVinicius73) tem um artigo excelente sobre isso: 

* [Container de Injeção de Dependências com JavaScript](https://blog.codecasts.com.br/dependency-injection-container-javascript-49e9eb2c399c)


## Conclusão

O peso da qualidade do seu projeto é relativamente proporcional a qualidade dos seus testes e do código que você aplica.

Se quiser entrar em contato comigo estou sempre caminhando pelo [Twitter](https://twitter.com/malaquiasdev) e [Telegram](https://t.me/malaquiasdev)
