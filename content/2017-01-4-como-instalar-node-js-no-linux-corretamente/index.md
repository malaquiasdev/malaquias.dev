---
title: "Como instalar Node.js no Linux corretamente"
path: blog/como-instalar-node-js-no-linux-corretamente
tags: [nodejs]
cover: ./nodejs-logo.jpeg
date: 2019-06-16
excerpt: 
---

Em distribuições Debian Based é muito comum utilizar o comando **apt install -nome do pacote-** e com o Node isso pode lhe trazer muitos problemas. Entretanto tenho certeza que os mais novos no linux vão preferir utilizar o comando **apt install -nome do pacote-** do que fazer a instalação do pacote binário e isso vai quebrar tudo, porque até o momento que estou escrevendo esse texto os repositórios do Debian estão desatualizados (o Debian tem o costume de demorar para atualizar seus repositórios).

Minha recomendação é que você **não instale o Node** pelo comando **sudo apt-get install -y nodejs** vai acontecer um conflito de nomes entre node e nodejs, parece besteira que uma simples nomenclatura quebre tudo, mas não é! O NPM que é o gerenciador de dependências vai ficar perdido e algumas funções não funcionarão.

![imagem ilustrando desespero](https://miro.medium.com/max/672/1*W4xYQIOT9fLREWeitYsIlQ.jpeg)

#### Calma! É tentador entrar em desespero, mas segure sua onda…

Se você não deseja compilar o arquivo binário de instalação do Node na mão grande, a solução de instalação contínua simples, instale o NVM primeiro e depois o Node. O legal do NVM é que você pode instalar várias versões do Node e ficar alternando entre elas, mas antes de instalar o NVM precisamos de alguns pacotes de dependências que já estão no repositório de sua distribuição Debian Based.

```
sudo apt-get update
sudo apt-get install build-essential libssl-dev
```

Agora que você já tem o necessário em seu sistema vamos instalar o NVM:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

O número da versão que está em negrito pode mudar com o tempo, então recomendo você acessar a [página do projeto no GitHub](https://github.com/creationix/nvm) e procurar pela nova versão.

Não tenha medo, o que está sendo feito aqui é o download de um script e a execução do mesmo, tudo vai ser instalado em um diretório oculto na pasta do seu usuário não é necessário utilizar o comando com sudo nesse caso.

Agora execute:

```
nvm ls-remote
```

Ele vai te exibir várias versões do Node e assim sabemos que o NVM está funcionando corretamente. Eu escolhi a versão LTS mais recente no momento em que estou escrevendo esse artigo a v6.11.2, você pode instalá-la digitando:

```
nvm install v6.11.2
```

Caso você instale mais de uma versão e no futuro tenha necessidade de alternar entre elas utilize o comando:

```
nvm use -número da versão-
```

Agora vamos verificar a versão do Node para ter certeza que tudo foi instalado corretamente utilizando o comando:

```
node -v
```

Como ganhamos de bônus o NPM quando instalamos o Node.js e caso você tenha instalado a versão 6.11.2 o seu NPM vai estar desatualizado, então vamos atualiza-lo:

```
npm i npm -g
```

Pronto, agora é só correr pra um abraço.

_Originally published on [Medium](https://medium.com/collabcode/como-instalar-node-js-no-linux-corretamente-ubuntu-debian-elementary-os-729fb4c92f2d)._

---

## Finalizando…

Se você gostou desse post não esquece de dar um like e compartilhar 😄

Se quiser saber o que ando fazendo por ai ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como @ [malaquiasdev](https://twitter.com/malaquiasdev).

Para ler mais post meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](http://malaquias.dev).