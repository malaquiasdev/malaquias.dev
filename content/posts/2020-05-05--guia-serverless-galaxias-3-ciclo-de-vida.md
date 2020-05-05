---
title: "O Guia dos Serverless das Galáxias #3 - Entendendo o ciclo de vida de uma função lambda"
date: "2020-05-05T23:46:37.121Z"
template: "post"
draft: false
slug: "guia-serverless-galaxias-3-ciclo-de-vida"
category: "back-end"
tags:
  - "back-end"
  - "aws"
  - "serverless"
description: "Quando a gente cria ou atualiza uma função, na maioria dos casos, esse processo é muito rápido e as nossas funções estão prontas para executar quase que imediatamente. Neste post, vamos entender os estados de uma função, as condições de cada estado e como ocorre a transição entre eles."
socialImage: "/media/artigos/2020-05-05--guia-serverless-galaxias-3-ciclo-de-vida/cover.png"
---

![Serverless Capa](/media/artigos/2020-05-05--guia-serverless-galaxias-3-ciclo-de-vida/cover.png)

Quando a gente cria ou atualiza uma função, na maioria dos casos, esse processo é muito rápido e as nossas funções estão prontas para executar quase que imediatamente. 

No entanto, existem situações em que esses processos podem levar mais tempo.

Neste post, vamos entender os estados de uma função, as condições de cada estado e como ocorre a transição entre eles.

## Estados de uma função

### Pendente

É o primeiro estado pelo qual todas as funções passam quando são criadas. A função se mantém nesse estado durante um processo de deploy ou durante a configuração de todos os recursos externos necessários. 

Tenha sempre em mente que só é possível executar uma função quando o seu estado é **Ativo**, portanto, qualquer invocação nesse momento irá falhar. 


### Ativo

Alcançado após a conclusão de qualquer deploy com sucesso, configuração ou alocação de recursos durante a criação ou atualização de uma função. 

É importante ter em mente que as funções só podem ser invocadas nesse estado. Por isso que durante uma atualização, o estado permanece como ativo. 

Durante um processo de atualização todas as invocações irão ser executadas utilizando os códigos e as configurações anteriores até que o processo seja concluído com sucesso.


### Falha

É o estado que representa algo que deu errado na configuração ou no provisionamento de recursos externos.


### Inativo

Inativo ou o famoso "cold start" é o estado de uma função quando ela fica sem ser executada por um determinado período de tempo ou quando a função precisa escalar rapidamente para atender muitas chamadas concorrentes. 

Esse estado existe para baratear os custos de infraestrutura do serviços, quando a função entra nesse estado todos os recursos externos que foram configurados para ela são removidos. 


## Estados de uma função durante uma atualização


### Em progresso

Significa que uma atualização está acontecendo. Enquanto uma função está nesse sub estado, todas as invocação são realizadas nos códigos e configurações já existentes.


### Bem sucedido

A atualização foi concluída.


### Falhou

A atualização da função falhou, todas as alterações são abortadas. Tanto o código como a configuração anterior permanecem no estado ativo e disponíveis.

Outro ponto importante durante o processo é que as funções só podem ser atualizadas se estiverem no estado **Ativo** ou **Inativo**. Os comandos de atualização emitidos nas funções que não estão nesses estados falharão.

## Ciclos de Vida dos Estados de uma função

Como não conseguimos mover manualmente uma função entre os seus estados, a transição entre os estados acaba dependendo das ações que executamos diretamente sobre as funções.


![Fluxograma do ciclo de vida de uma função](/media/artigos/2020-05-05--guia-serverless-galaxias-3-ciclo-de-vida/ciclo-de-vida.png)

Para todas as funções, o ciclo de vida do estado primário se parece com o seguinte:

*   Ao criar uma função, ela começa no estado **Pendente**;
*   Após a configuração de todos os recursos necessários com sucesso, o estado passa a ser **Ativo**;
    *   Se a configuração de recurso ou função falhar por qualquer motivo, ela passará para o estado de **Falha**;
*   Se uma função não for executado durante um período de tempo, ela entrará no estado **Inativo**;
*   Na primeira chamada após ficar **Inativo**, uma função entra novamente no estado **Pendente**;
    *   Êxito define o estado como **Ativo** novamente;
    *   Falha define o estado de volta para **Inativo**;
*   Uma atualização com sucesso, também define o estado de volta para **Ativo**;

### Ciclo de vida de uma função durante o processo de atualização

![Fluxograma do ciclo de vida de uma função durante o processo de atualização](/media/artigos/2020-05-05--guia-serverless-galaxias-3-ciclo-de-vida/ciclo-de-vida-processo-atualizacao.png)

Para atualizar funções, o ciclo de vida é o seguinte:

*   Na atualização, o estado de atualização é definido como **Em Progresso**;
    *   Êxito define o estado como **Bem Sucedido**;
    *   Uma falha define como **Falha** mesmo;
*   Uma função **inativa** voltará ao estado ativo com uma atualização **bem sucedida**.

## Conclusão

Na AWS (provedor de cloud que tenho mais contato) todas as funções mostrarão apenas um estado **Ativo** no painel web. Você não verá uma transição de estado para **Pendente** por exemplo. Mas dá para consultar o estado atual da função usando os SDKs da AWS e a CLI da AWS mais recentes (versão 1.16.291 ou superior).

---

## Finalizando…

Se você gostou desse post não esquece de dar um like e compartilhar 😄

Se quiser saber o que ando fazendo por ai ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como @ [malaquiasdev](https://twitter.com/malaquiasdev).

Para ler mais post meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](http://malaquias.dev).
