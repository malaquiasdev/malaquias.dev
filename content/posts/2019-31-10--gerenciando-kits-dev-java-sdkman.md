---
title: 'Gerenciando kits de desenvolvimento Java, Kotlin e Clojure facilmente com o SDKMAN'
date: '2019-10-31T23:46:37.121Z'
template: 'post'
draft: false
slug: 'gerenciando-kits-dev-java-sdkman'
category: 'back-end'
tags:
  - 'back-end'
  - 'kotlin'
  - 'clojure'
  - 'linux'
description: 'Você é uma pessoa que costuma trabalhar em projetos Java que possuem versões do SDKs (Software Development Kits) diferentes? No mundo Java não é incomum a necessidade de se trabalhar em versões mais antigas da plataforma como o Java 6 e 7 para corrigir problemas ou adicionar pequenas funcionalidades no projeto, entretanto, a maioria dos projetos mais recentes exige o Java 8 ou 11, o que na minha opinião torna a rotina de uma pessoa desenvolvedora Java um inferno, já que ficar alternando entre versões do SDK durante o seu dia de trabalho é um processo chato.'
socialImage: '/media/artigos/gerenciando-kits-dev-java-sdkman/capa.png'
---

![Capa](/media/artigos/gerenciando-kits-dev-java-sdkman/capa.png)

Você é uma pessoa que costuma trabalhar em projetos Java que possuem versões do SDKs (Software Development Kits) diferentes?

No mundo Java não é incomum a necessidade de se trabalhar em versões mais antigas da plataforma como o Java 6 e 7 para corrigir problemas ou adicionar pequenas funcionalidades no projeto, entretanto, a maioria dos projetos mais recentes exige o Java 8 ou 11, o que na minha opinião torna a rotina de uma pessoa desenvolvedora Java um inferno, já que ficar alternando entre versões do SDK durante o seu dia de trabalho é um processo chato.

Para piorar a situação, cada sistema operacional (Linux, MacOS e Windows) trabalha com as variáveis de ambiente do Java de maneira diferente.

Se colocarmos na ponta do lápis imagino que perdemos uma parte de nossa sanidade e de tempo nesse processo. É por esse motivo que tenho uma boa notícia para você!

## Olá SDKMAN!

O SDKMAN é uma ferramenta CLI (terminal) que nos ajuda a gerenciar vários kits de desenvolvimento. Ele nos fornece uma maneira conveniente de instalar, alternar, listar e remover verões.

Você consegue gerenciar versões paralelas facilmente em qualquer sistema operacional semelhante ao Unix (pro pessoal que usa Windows recomendo instalar um bash Linux).

Com ele conseguimos instalar diversos SDKs da JVM, como Java, Kotlin e Clojure (leiningen). Além de também nos ajudar com os gerenciadores de dependências, como o Ant, Maven e Gradle.

Como se não fosse suficiente também conseguimos instalar e configurar alguns frameworks, como Spring Boot, Vert.x, Spark e Micronaut.

E o melhor de tudo é que o SDKMAN é gratuito, leve, de código aberto e escrito em Bash.

## Instalando em distribuições Debian-like

A instalação do SDKMAN é bem simples, mas primeiro, instale os aplicativos zip e unzip que estão disponíveis nos repositórios padrão da maioria das distribuições Linux. Por exemplo, para instalar em sistemas baseados no Debian, basta executar:

`sudo apt install zip unzip`

Só então podemos instalar o SDKMAN:

`curl -s "https://get.sdkman.io" | bash`

Pronto, simples assim! Uma vez finalizado a instalação só precisamos carregar as variáveis de ambiente:

`source "$HOME/.sdkman/bin/sdkman-init.sh"`

Por fim, verifique se a instalação foi bem-sucedida usando o comando:

`sdk version`

![sdk version](https://i.ibb.co/x6L9G8N/PNG-image.png)

Se você conseguiu visualizar a versão do SDKMAN no seu terminal, então meus parabéns!

Vamos em frente e ver como instalar e gerenciar SDKs.

## Instalando os SDKs

Você pode visualizar a lista de SDKs disponíveis no site do SDKMAN ou executando o comando:

`sdk list`

![sdk list](https://i.ibb.co/d2RqXqc/PNG-image.png)

Como você viu a lista é bem extensa. Mas o processo de instalação é bastante simples, por exemplo, vamos instalar o SDK LTS mais atual do Java:

`sdk install java`

![sdk install java](https://i.ibb.co/0fByGC3/PNG-image.png)

Caso deseje visualizar as outras versões disponíveis basta executar:

`sdk list java`

![sdk list java](https://i.ibb.co/8sJsvdg/PNG-image.png)

Para instalar uma versão específica de um SDK precisamos fazer uso da coluna identifier, por exemplo:

`sdk install java 8.0.222-amzn`

Esse mesmo fluxo de instalação pode ser utilizado em qualquer uma das opções na lista SDKs disponíveis no site do SDKMAN.

## Gerenciando os SDKs instalados

Agora que já instalamos algumas versões do Java (experimente instalar uma versão específica do Java), podemos naturalmente alternar entre essas versões instaladas.

Para isso vamos buscar novamente a lista de versões, só que dessa vez reparem na coluna **Status**, essa coluna tem a função de nos informar o que está instalado. E para sabermos qual versão está em uso sem precisar executar o comando _java -version_ basta olhar para a informação da coluna **Use**.

![sdk list java](https://i.ibb.co/VSCy6bP/PNG-image.png)

Com esses dados em mão podemos facilmente alterar a versão do SDK que estamos usando, por exemplo vamos alterar a versão do Java 11 para o Java 8:

`sdk default java 8.0.222-amzn`

![sdk default java](https://i.ibb.co/vjvphYs/PNG-image.png)

Para verificar o que está atualmente em uso para todos os SDKs, execute:

`sdk current`

![sdk current](https://i.ibb.co/vjqPgn3/PNG-image.png)

Para atualizar um SDK desatualizado, faça:

`sdk upgrade java`

Você também consegue verificar o que está desatualizado, executando:

`sdk upgrade`

Para remover um SDK instalado, execute:

`sdk uninstall java 8.0.222-amzn`

![sdk list java](https://i.ibb.co/51NtcwK/PNG-image.png)

## Removendo o SDKMAN

Se você não mais precisa do SDKMAN ou não gostou dele fique a vontade para removê-lo:

`tar zcvf ~ / sdkman-backup _ $ (data +% F-% kh% M) .tar.gz -C ~ / .sdkman`

E depois:

`rm -rf ~ / .sdkman`

Por fim, abra os arquivos **.bashrc, .bash_profile, .profile ou .zshrc** localize e remova as seguintes linhas.

`#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!`
`export SDKMAN_DIR="/home/sk/.sdkman"`
`[[ -s "/home/sk/.sdkman/bin/sdkman-init.sh" ]] && source "/home/sk/.sdkman/bin/sdkman-init.sh"`

## Conclusão

Imagino que você já passou por esse sofrimento de instalar e gerenciar múltiplas versões de JDKs, se esse for o seu caso, o SDKMAN pode ser uma ótima opção!

Hoje você aprendeu como usar o SDKMAN para instalar diferentes versões, alternar entre versões e desinstalar, fizemos tudo isso usando o Java. Mas você pode usar esses mesmos métodos para lidar com a instalação de outras plataformas como Kotlin, Clojure (leiningen), Ant, Maven, Gradle, Spring Boot, Vert.x, Spark e Micronaut por exemplo.

---

## Finalizando…

Se você gostou desse post não esquece de dar um like e compartilhar 😄

Se quiser saber o que ando fazendo por ai ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como @ [malaquiasdev](https://twitter.com/malaquiasdev).

Para ler mais post meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](http://malaquias.dev).
