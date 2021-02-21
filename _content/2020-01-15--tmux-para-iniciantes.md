---
title: 'Tmux para iniciantes'
date: '2020-01-15T23:46:37.121Z'
template: 'post'
draft: false
slug: 'tmux-para-iniciantes'
category: 'back-end'
tags:
  - 'back-end'
  - 'tmux'
  - 'produtividade'
  - 'terminal'
description: 'Conheci o tmux na época em que tentei dar uma nova função para o meu IPad, a de ser uma máquina capaz de me permitir codar. O IPad ficou para trás e nesse texto vai lhe dou tour de poucos minutos no uso do tmux.'
socialImage: '/media/artigos/tmux-para-iniciantes/sessao-nova.png'
---

![Capa](/media/artigos/tmux-para-iniciantes/capa.gif)

Conheci o tmux na época em que tentei dar uma nova função para o meu IPad, a de ser uma máquina capaz de me permitir codar (é possível fazer isso com um Surface Pro). Para tentar derrubar as limitações impostas na época pelo IOS tentei usar editor de texto, acessar um Raspberry Pie, até que cheguei a brilhante ideia (ironia) de criar um servidor EC2 na AWS e acessar ele via SSH.

Bem, a ideia do IPad ficou para trás e enterrei bem fundo, porém todo esse período de experimentos me levou a conhecer melhor três ferramentas: terminal, vim e tmux. Adorei o novo costume que desenvolvi e levei para usar também no ambiente de trabalho.

Você pode até achar feio, verboso, complexo, improdutivo, mas para o meu raciocínio foi algo como “WTF, o que está acontecendo? De onde veio todo esse foco no código e na atividade?

E foi assim que descobrir um novo caminho para minha mente brilhar!

Esse texto vai lhe levar em um tour de poucos minutos no uso do tmux e suas possibilidades. Se você tem um tempinho livre, peço então humildemente que me dê a honra de lhe ensinar o pouco que sei sobre o tmux, continue lendo!

## O que é tmux e quais os seus benefícios?

Os criadores do tmux o descrevem como um multiplicador de terminal, ou seja, dentro de uma janela do terminal, você pode abrir várias janelas com visualizações baseadas em painéis. Onde cada painel tem um terminal executando de maneira independente, isso permite que você tenha vários comandos e aplicativos executando, sem a necessidade de abrir várias janelas.

Além disso, o tmux mantém essas janelas e painéis em uma sessão. Você pode sair de uma sessão a qualquer momento, chamamos isso de **desanexação**. Uma característica que considero incrível é que a sessão fica ativa até você matar o servidor do tmux (quando você reinicia o computador, por exemplo ou executa um comando que mata o servidor). Isso é incrivelmente útil porque depois em qualquer momento você pode escolher exatamente aquela sessão e o tmux irá te deixar no mesmo ponto de quando você a deixou, simplesmente **anexando** a essa sessão.

Se você já trabalhou com servidores remotos usando ssh, deve conseguir perceber como isso útil! Por exemplo, quando você perder a sua conexão ssh, a sessão do tmux será simplesmente desconectada, mas continuará sendo executada no servidor em segundo plano, incluindo todos os seus processos ativos. Para continuar sua sessão, basta se conectar no servidor novamente e depois naquela mesma sessão que está em execução.

Todavia não fique pensando que o tmux só é útil apenas quando precisamos trabalhar com uma máquina remota. Pessoalmente, me vejo desconectando das sessões quando estou mudando de contexto de trabalho, basicamente como desenvolvedor backend que trabalha muito com microserviços, mantenho sempre uma sessão para cada microserviço, assim quando preciso migrar entre projetos já estou no ponto ideal.

## Massa, entendi. Mas por que devo então usar o tmux no lugar do iTerm2 ou Terminator?

Na minha opinião quando se precisa apenas do gerenciamento básico de janelas, o iTerm do Mac ou Terminator do linux são soluções excelentes já que também possuem suporte a janelas e painéis. Mas ainda acredito que você está perdendo:

- sessões: desconectar e anexar sessões me ajuda na alternância de contexto de atividade no trabalho;
- independência de plataforma: posso usar o tmux no meu Macbook, no meu Dell com Linux, em máquinas na nuvem como o AWS EC2, máquinas simples como Raspberry Pie, BeagleBones e etc;
- personalizável: existem várias maneiras de personalizar a aparência e o comportamento de um ambiente tmux;
- credibilidade nas ruas: você pode se sentir um hacker enquanto trabalha :P.

## Começando a usar

Este guia prático abordará apenas os recursos básicos que devem ser mais que suficientes para começar e ser produtivo(a) com o tmux. Para começar basta abrir seu terminal e seguir as instruções.

### Instalação

A instalação do tmux é simples e direta para a maioria das plataformas. Um simples **sudo apt-get install tmux** (Ubuntu e derivados), **sudo yum install tmux**(CentOS e derivados) ou **brew install tmux** (Mac) deve ser suficiente.

### Sua primeira sessão

Para criar uma sessão, basta digitar:

```
tmux
```

Esse comando vai abrir uma nova sessão, criará uma nova janela e iniciará um shell nessa janela.

Quando estiver no Tmux, você verá uma linha de status na parte inferior da tela que mostra informações sobre a sessão atual.

![Uma nova sessão no tmux](/media/artigos/tmux-para-iniciantes/sessao-nova.png)

A barra de status é uma parte importante do tmux. Além das janelas abertas, também mostra algumas informações do sistema, como data e hora. Totalmente personalizável, já vi algumas coisas realmente chiques por aí (próximos eventos da agenda, status da bateria, para citar alguns).

### Criando uma sessão nomeada

Por padrão, as sessões do tmux são nomeadas numericamente. Mas, como falei anteriormente, gosto de trabalhar com sessões que possuem contexto de atividade e utilizar números nesse caso pode deixar as coisas confusas, por isso gosto criar sempre uma sessão nomeada.

Para criar uma nova sessão nomeada, execute o comando tmux com os seguintes argumentos:

```
tmux new -s session_name
```

![Uma nova sessão nomeada](/media/artigos/tmux-para-iniciantes/sessa-nova-nomeada.png)

### Criando uma nova sessão sem sair da antiga

Por padrão o tmux sempre espera que você esteja desanexado de uma sessão para se criar outra, por isso precisamos adicionar mais um parâmetro no comando assim:

```
tmux new -s session_name -d
```

### Reconectando a sua antiga sessão

Para se conectar a uma sessão antiga acredito que você precisa encontrar o seu nome ou número. O tmux possui um comando muito útil que nos permite obter uma lista das sessões em execução no momento, digite:

```
tmux ls
```

![Lista de sessões ativas](/media/artigos/tmux-para-iniciantes/sessao-ativa.png)

Fique atento ao nome ou número na primeira coluna apresentada em seu terminal. No meu exemplo você pode ver que existem duas sessões em execução. A primeiro é chamado artigo e a segunda blog. E que atualmente estou utilizando a sessão blog.

Para me anexar a sessão artigo basta executar o comando:

```
tmux a -t session_name
```

O problema é que por padrão esse comando só funciona se você estiver fora de qualquer sessão tmux, mas com o poder da personalização conseguimos burlar essa limitação (final do artigo).

### Dividindo a tela em painéis

Agora que criamos nossa primeira sessão, podemos ter uma ideia dos painéis. Quando você cria uma nova sessão, o tmux inicia por padrão com uma janela e um único painel dentro, mas queremos dividir nossa tela.

Todos os comandos no tmux são acionados por uma chave de prefixo seguida por uma chave de comando (bastante semelhante ao emacs). Por padrão, a chave de prefixo do tmux é **C-b** (Ctrl+b).

Essa notação pode parecer um pouco estranha se você não estiver acostumado, mas C- significa "pressione e segure a tecla Ctrl", portanto C-b significa pressionar as teclas **Ctrl e b** ao mesmo tempo.

Para dividir a tela com dois painéis horizontais use o comando:

```
C-b + %
```

Lembrando o que acabei de lhe contar sobre a sequência de prefixo e tecla de comando do tmux, com o comando acima vamos dividir seu painel único em dois painéis, um esquerdo e outro direito, pressionando **Ctrl e b** ao mesmo tempo, solte os dois e digite a tecla %.

Voilà! Você acabou de invocar um atalho do tmux e dividir seu painel em dois.

![Dois paineis horizontais](/media/artigos/tmux-para-iniciantes/paineis-horizontal-dois.png)

Também existe uma divisão de painéis superior e inferior. Para dividir use o atalho C-b ".

![Paineis superior e inferior](/media/artigos/tmux-para-iniciantes/paineis-superior-inferior.png)

### Navegando entre os painéis

No momento, estamos presos no painel recém-criado. Mas vamos supor que queremos voltar para o painel da direita (o maior). Fácil: para alternar de um painel para o outro usamos o atalho **C-b <tecla de seta>**, onde **<tecla de seta>** é a tecla de seta apontando para o painel para o qual você deseja alternar.

No nosso caso, queremos mudar para o painel à direita, então pressionamos **Ctrl e b** seguido da tecla de seta direita.

Agora você pode seguir em frente e dividir cada um dos seus novos painéis ainda mais. Sinta-se à vontade para experimentar e dividir seus painéis como um maníaco(a) para ter uma ideia do poder que isso nós dar.

### Desanexando de uma sessão

Você pode se desconectar da sessão do Tmux e retornar ao seu shell normal digitando:

```
C-b d
```

### Fechando um painel

Fechar um painel é tão simples quanto fechar uma sessão regular do terminal. Digite exit ou pressione **Ctrl + d** e ele desapareceu.

## Customizando seu tmux com gpakosz/.tmux

[Gregory Pakosz](https://github.com/gpakosz) criou uma das customizações mais utilizadas hoje em dia pelas pessoas que procuram um modelo já pronto. Durante todo esse tempo que estou utilizando o tmux já experimentei fazer ao meu gosto e outros modelos já prontos.

Mas o do [Gregory Pakosz](https://github.com/gpakosz) foi o que me adaptei melhor, ele é muito simples de usar e de aprender os atalhos, além de ter diversos ícones que podemos usar para montar o nosso status bar.

### Instalação

Para instalar, execute o seguinte no seu terminal (lembre-se de backup do seu ~ / .tmux.conf):

```
$ cd

$ git clone https://github.com/gpakosz/.tmux.git

$ ln -s -f .tmux/.tmux.conf

$ cp .tmux/.tmux.conf.local .
```

### Atalhos

Dicionário:

1. **<prefix>** significa que você tem que pressionar **Ctrl + a** ou **Ctrl + b**
2. **<prefix> c** significa que você tem que pressionar **Ctrl + a** ou **Ctrl + b** seguido de **c**
3. **<prefix> C-c** **means you have to hit Ctrl + a** ou **Ctrl + b** seguido de **Ctrl + c**

Comandos básicos:

- **<prefix> r** recarrega as configurações
- **C-l** limpa a tela e o histórico do tmux
- **<prefix> C-c** cria uma nova sessão
- **<prefix> C-f** permite alternar entre sessões usando o nome ou número
- **<prefix> \$** permite renomear o nome da sessão
- **<prefix> C-h + <prefix> C-l** permite navegar pelos painéis
- **<prefix> Tab** leva você para o último painel ativo
- **<prefix> -** divide o painel atual verticalmente
- **<prefix> \_** divide o painel atual horizontalmente
- **<prefix> h, <prefix> j, <prefix> k** e **<prefix> l** navega pelos painéis como se tivesse usando o Vim
- **<prefix> H, <prefix> J, <prefix> K** e **<prefix> L** redimensiona os painéis
- **<prefix> ⇧, <prefix> ⇨, <prefix> ⇩** e **<prefix> ⇦** navega pelos painéis
- **<prefix> +** maximiza o painel atual em uma nova janela
- **<prefix> m** ativa ou desativa o uso do mouse
- **<prefix> Enter** entra no modo de cópia
- **<prefix> b** lista o que se tem copiado de pasta
- **<prefix> p** cola o último conteúdo copiado
- **<prefix> P** permite escolher o que será colado em uma lista

Aprenda mais acessando o projeto no github [gpakosz/.tmux: 🇫🇷 Oh My Tmux! Pretty & versatile tmux configuration made with ❤️ (imho the best tmux configuration that just works)](https://github.com/gpakosz/.tmux).

## Conclusão

E é isso! Parabéns, você acabou de concluir suas primeiras impressões com tmux e sujou um pouco as mãos! Sim, existem muitas outras coisas que o tmux pode fazer. Mas o que você acabou de aprender deve ser tudo para começar a usar o tmux no futuro.

---

Se você gostou desse texto por favor não deixe de curtir e compartilhar, isso 😄

Se quiser saber o que ando fazendo por aí ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como [@malaquiasdev](https://twitter.com/malaquiasdev).

Para ler mais textos meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](https://malaquias.dev).
