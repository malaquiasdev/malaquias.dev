---
title: "Guia dos Serverless das Galaxias - #2 - Como chegamos até aqui?"
path: blog/guia-serverless-galaxias-2
tags: [serverless]
cover: ./serverless-capa.jpg
date: 2019-07-26
excerpt: 
---

Nesse momento imagino que você não está conseguindo conter a sua ansiedade por codar uma aplicação Serverless, sei que é fácil se empolgar (não vamos codar nesse artigo). Todavia é importante entendermos como chegamos até aqui para que possamos tentar imaginar o que vem por aí.

Lá nos anos 60, a visão de futuro era ter todo mundo interconectado e acessando sites e dados de qualquer lugar do planeta. Mas acredito que foi na década de 90 que a internet ganhou mais popularidade e as tecnologias web começaram a amadurecer.

Com isso se criou uma necessidade para hospedar esses sites. Os [provedores de serviço de internet](https://pt.wikipedia.org/wiki/Fornecedor_de_acesso_à_internet) multiplicaram-se rapidamente oferecendo infraestrutura e alugando recursos compartilhados para satisfazer a necessidade de seus clientes.

Rapidamente entramos num fenômeno que posteriormente ficou mundialmente conhecido como a [bolha da internet](https://pt.wikipedia.org/wiki/Bolha_da_Internet) e para atender as necessidades da época uma uma estratégia de hospedagem distribuída nasceu e deu origem aos centros globais de dados.

Esses centros de dados abstraíam o ambiente de hospedagem oferecendo elasticidade limitada e diversos de recursos. Nessa época a escala ainda era obtida adicionando mais hardware. O papel do consumidor era de gerenciar seus aplicativos, o sistema operacional contratado, os dados das suas aplicações, armazenamento, rede e hardware.

A medida que o tempo foi passando esse cenário foi evoluindo e esses centros de dados se transformaram em plataformas de infraestrutura conhecidos como [IaaS (Infraestrutura como serviço)](https://azure.microsoft.com/pt-br/overview/what-is-iaas/), são alguns exemplos de provedores: [Amazon Web Services (AWS)](https://aws.amazon.com/), [Microsoft Azure](https://azure.microsoft.com/pt-br/), [Google Compute Engine (GCE)](https://cloud.google.com/?hl=pt) e o [OpenStack](https://www.openstack.org).

Ficou então a cargo desses e outros provedores de abstrair os componentes de infraestrutura, gerenciar as virtualizações (VMs), servidores, discos rígidos, armazenamento de dados e rede. Logo os seus consumidores são responsáveis por gerenciar suas aplicações, as pilhas de VMs e sistema operacional.

O escalonamento nesse modelo é alcançado alocando mais VMs e recursos de infraestrutura.

Não demorou muito tempo para o [PaaS (Platform-as-a-Service)](https://azure.microsoft.com/pt-br/overview/what-is-paas/) aparecer, com esse modelo uma nova camada de abstração floresceu por cima do modelo IaaS com o intuito de fornecer uma plataforma de computação em nuvem com um portal de autoatendimento para as aplicações. São alguns exemplos de provedores: [Amazon Web Services (AWS)](https://aws.amazon.com/), [Microsoft Azure](https://azure.microsoft.com/pt-br/), [Google Compute Engine (GCE)](https://cloud.google.com/?hl=pt), [Heroku](https://www.heroku.com), [Red Hat OpenShift](https://www.redhat.com/pt-br/technologies/cloud-computing/openshift) e a [Pivotal CF](https://pivotal.io/platform).

O PaaS abstraiu bastante a gestão de infraestrutura, aumento a facilidade de se obter escalabilidade, alta disponibilidade e multilocação (sua aplicação executando em diversas regiões do mundo), além disso os provedores passaram a gerenciar o sistema operacional, as VMs, os servidores, o armazenamento de dados e a estrutura de rede. Os Consumidores passaram a gerenciar suas aplicações.

Um tempo depois chegaram os containers (docker) que abstraiu as VMs, tornando mais leve por usar menos recursos e mais rápido em nas inicializações das aplicações. Nossas aplicações agora passaram a ser portáteis para todos os sistemas operacionais, nasceu também um mecanismo de empacotamento e distribuição de configurações de ambiente.

Os fornecedores de PaaS logo passaram a usar containers para gerenciar e orquestrar as aplicações de seus clientes.

Os containers também foram responsáveis por alavancar a arquitetura de micro-serviços, facilitando o encapsulando e isolando componentes funcionais reutilizáveis.

São alguns exemplos de provedores: [Amazon Web Services (AWS)](https://aws.amazon.com/), [Microsoft Azure](https://azure.microsoft.com/pt-br/), [Google Compute Engine (GCE)](https://cloud.google.com/?hl=pt), [Docker Data Center](https://hub.docker.com).

Os provedores passaram então a gerenciar os containers, sistema operacional, os servidores, o armazenamento de dados e a estrutura de rede. Enquanto os consumidores continuam gerenciando suas aplicações.

Em 2014 a AWS lançou um serviço conhecido como [AWS Lambda](https://aws.amazon.com/pt/lambda/) e muita gente considera isso o nascimento do modelo [FaaS (Functions-as-a-service)](https://vertigo.com.br/o-que-e-faas-function-as-a-service-2/), todavia lá em 2006 uma empresa chamada Zimki já nos apresentava a característica de “pague quando usar” em sua plataforma e 6 anos depois (2012) nascem o [Firebase](https://firebase.google.com/?hl=pt-BR) e a [Iron.io](https://www.iron.io), tirando a Zimki e mostrando aos demais provedores a força de novos modelos de cobrança por prestação de serviço.

Voltamos para 2014 o nascimento do [AWS Lambda](https://aws.amazon.com/pt/lambda/) e avançando mais 2 anos (2016) nascem o [IBM Cloud Functions](https://www.ibm.com/br-pt/cloud/functions), [Google Cloud Functions](https://cloud.google.com/functions/?hl=pt-br), [Microsoft Azure Cloud Functions](https://azure.microsoft.com/pt-br/services/functions/) e [Stackpath](https://www.stackpath.com), em 2017 o [Huawei Function Stage](http://www.huaweicloud.com/en-us/product/functionstage.html), em 2018 nasceram o [Cloudflare Workers](https://www.cloudflare.com/pt-br/products/cloudflare-workers/), [Now by Zeit](https://zeit.co/now), [Alibaba Function Compute](https://www.alibabacloud.com/products/function-compute). Com tantos provedores novos entrando no mercado, só deus sabe o que vem por aí.

O modelo Serverless passou a abstrair como acontece a execução do código fazendo com que o provedor se torne o responsável por gerenciar todo o ambiente de execução do código dos seus clientes. Para os consumidores restou a responsabilidade de gerenciar o código da aplicação.

*Originally published on [dev.to](https://dev.to/collabcode/o-guia-dos-serverless-das-galaxias-como-chegamos-ate-aqui-15fg).*

---

## Finalizando…

Se você gostou desse post não esquece de dar um like e compartilhar 😄

Se quiser saber o que ando fazendo por ai ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como @ [malaquiasdev](https://twitter.com/malaquiasdev).

Para ler mais post meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](http://malaquias.dev).
