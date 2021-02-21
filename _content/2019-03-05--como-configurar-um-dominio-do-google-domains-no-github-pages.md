---
title: 'Como Configurar Um Dominio Do Google Domains No Github Pages'
date: '2019-03-05T23:46:37.121Z'
template: 'post'
draft: false
slug: 'como-configurar-um-dominio-do-google-domains-no-github-pages'
category: 'infra'
tags:
  - 'devops'
  - 'githubpages'
  - 'infra'
  - 'jekyll'
description: ''
socialImage: 'https://i.ytimg.com/vi/2MsN8gpT6jY/maxresdefault.jpg'
---

![capa](https://i.ytimg.com/vi/2MsN8gpT6jY/maxresdefault.jpg)

[Recentemente os domínios .dev foram liberados ao público pelo Google](https://canaltech.com.br/internet/google-libera-dominio-dev-para-todos-duas-semanas-apos-lancamento-134053). Imaginei que essa seria uma boa oportunidade para criar finalmente o meu cantinho na internet.

Quando fui comparar os valores de hospedagem para o meu site lembrei que o Github Pages juntamente com o Jekyll são uma boa opção para quem está começando, então com a plataforma de blog e hospedagem escolhidas fui em busca de pensar em um domínio.

Escolhi malaquias.dev para fazer menção a um ID que já utilizo nas minhas redes sociais, pois bem nome de domínio pensado e aprovado é chegada agora dos finalmente e comprar. Inicialmente iria comprar na Godaddy porque vi uma promoção de R\$ 52,00 no primeiro ano, mas um amigo me avisou que o Google vende domínios e que lá estava mais barato.

Optei então pela plataforma do Google e a treta começou, domínio comprado, mas como fazer as configurações? Tive que ler apenas uma documentação do Github Pages. O resultado dessa experiência além de obviamente está usando com sucesso o meu domínio no meu blog é esse artigo simplificando o processo para vocês.

Aqui vou supor que você já possui um repositório criado, está usando o Github Pages e comprou um dominio no Google Domains.

## Configurando o DNS no Google Domains

![google domains console](https://miro.medium.com/max/2224/0*N2R-g2jASQd8AUNK.jpeg)

Vá até o seu painel no Google Domains e clique em **MANAGE**, clique em **DNS** e depois vá direto para a sessão **Custom resource records**.

Agora vamos começar a brincar…

Atualmente você precisa adicionar quatro itens do tipo A (address).

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Caso esse artigo tenha ficado datado recomendo que você acesse a pagina [**Setting up an apex domain do Github**](https://help.github.com/en/articles/setting-up-an-apex-domain#configuring-a-records-with-your-dns-provider) para verificar os valores de DNS.

Adicionados os quatro IPs agora podemos adicionar um novo recurso do tipo CNAME e o seu valor vai apontar para a URL que o Github Pages te forneceu quando você configurou o seu repositório, no meu caso o foi malaquaisdev.github.io

![console do DNS](https://miro.medium.com/max/2224/0*vqM3yx7g4b-puFX-.jpeg)

## Configurando seu CNAME no Github

Existem duas maneiras de se configurar um CNAME, podemos criar o arquivo na mão ou ir nas configurações do repositório e deixar que o Github faça isso por nós.

Vamos fazer da maneira mais simples e delegar essa responsabilidade para o Github, então vá até a página settings do seu repositório.

![github settings path](https://miro.medium.com/max/2224/0*fRGQsZEGCcVNgbb1.jpeg)

Feito isso, desça até sessão do Github Pages e adicione um custom domain que é o domínio comprado e configurado por você e salve.

## Aproveite para ativar o HTTPS

HTTPS é um recurso muito importante de se ter hoje em dia para que os navegadores reconheçam aquela requisição como segura. O massa é que o Github Pages nos oferta isso de graça, basta que a gente marque a opção Enforce HTTPS, ela pode não esta habilitada logo de cara então espere alguns minutos e tente novamente se for o caso.

![github settings pagina](https://miro.medium.com/max/2224/0*EVgDJHLkElshmsaI.jpeg)

Por último não esqueça de alterar a URL do seu site no arquivo de configurações do Jekyll para que essas configurações funcionem.

## Conclusão

Essas configurações podem levar até um dia para serem validadas, mas uma vez que forem efetivadas tudo vai funcionar lindamente S2.

_Originally published on [Medium](https://medium.com/collabcode/como-configurar-um-dominio-do-google-domains-no-github-pages-87324885bf11)._

---

## Finalizando…

Se você gostou desse post não esquece de dar um like e compartilhar 😄

Se quiser saber o que ando fazendo por ai ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como @ [malaquiasdev](https://twitter.com/malaquiasdev).

Para ler mais post meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](http://malaquias.dev).
