---
title: 'Como usar o Optional do Java 8 com a JPA (Hibernate)'
date: '2017-02-20T23:46:37.121Z'
template: 'post'
draft: false
slug: 'como-usar-o-optional-do-java-8-com-a-jpa-hibernate'
category: 'back-end'
tags:
  - 'back-end'
  - 'java'
  - 'jpa'
  - 'hibernate'
description: ''
socialImage: 'https://miro.medium.com/max/860/1*JHQ7FFeCX4rU35kid1stIw.jpeg'
---

![capa](https://miro.medium.com/max/860/1*JHQ7FFeCX4rU35kid1stIw.jpeg)

## Resumo

Finalmente temos em mãos um facilitador para evitar o velho NullPointerException. O Optional é um novo recurso no mundo Java, tenha em mente como uma espécie de caixa que pode ser preenchida ou não, caso possua um algo então é possível utilizar vários recursos que nos auxiliam no manuseio desse conteúdo, caso a caixa não esteja preenchida ao menos podemos evitar, sem nenhum esforço, o bendito/maldito erro do NullPointerException.

Você já tentou utilizar o Optional como um atributo de uma entidade? Se sim, provavelmente aconteceu o erro (será explicado durante o texto) e sua aplicação mal subiu. Então “Como é que utilizo o Optional com a JPA?”, “Por que não posso utiliza-lo como atributo na minha entidade?”, “Para que ele serve?”. Pretendo responder essas perguntas e te prometo que não serei chato.

## Falar é fácil, me mostre o código!

Para aqueles que preferem ir direto para o [código aqui esta o link do repositório no GitHub](https://github.com/mmalaquias1/microprofile-swarm-samples/tree/master/swarm-jpa-java8-optional).

## Domínio da nossa mini aplicação

![diagrama do banco de dados](https://miro.medium.com/max/478/0*lSIQtq9VIIrGYwN_.)

## Como fazíamos o mapeamento antes do Optional?

```
@Entity
public class WeightHistory implements Serializable {

private static final long serialVersionUID = 1L;
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(updatable = false, nullable = false)
private Long id;

@Version
@Column
private int version;

@Column(nullable = false)
private BigDecimal weight;

@ManyToOne
private Person person;

public Long getId() { return this.id; }
public int getVersion() { return this.version; }
public BigDecimal getWeight() { return weight; }
public Person getPerson() { return person; }
```

Neste texto vamos analisar o uso do Optional com o atributo **Person** da entidade acima, esse atributo foi escolhido por ser o único na classe que pode ser nulo.

## No que o Optional vai te ajudar?

Esse recurso vai te ajudar a diminuir a quantidade de NullPointerException na sua aplicação/API por causa da possibilidade de trabalhar com objetos sem valor.

Para isso você só precisa trabalhar com funções que retornem o tipo Optional e **não recomendo usá-lo diretamente nos atributos** de suas entidades/DTOs, o Optional foi planejado para ser um recurso utilizado como tipo de retorno para funções, serviços, DAOs, repositórios e etc.

A JSR-335 definiu que o Optional não seria serializável logo ele é um novo tipo que server como **suporte** na linguagem, essa foi uma escolha planejada pelos arquitetos da linguagem.

Caso queria ler mais sobre essa discussão de ser ou não serializável [você pode acessar a mail list da openjdk](http://mail.openjdk.java.net/pipermail/jdk8-dev/2013-September/003274.html). Também recomendo a leitura desse texto do [Ivan Queiroz que explica com vários exemplos o uso mais detalhado do Optional](http://blog.ivanqueiroz.com/2017/01/revisando-padroes-java-8-null-object.html).

## Onde você deve evitar usar o Optional?

Optional não deve ser sua bala de prata para evitar todos os NullPointerException da sua aplicação/API, ele deve ser encarado como um facilitador, a **JSR-335 não recomenda** que você utilize o recurso nos contextos abaixo:

- Como atributo da sua entidade (lembre-se ele não é serializável)
- Como atributo do seu DTO (lembre-se ele não é serializável)
- Como parâmetro das suas funções
- Como parâmetro nos construtores

## Qual o melhor formar até agora de usar o recurso?

```
@Entity
public class WeightHistory implements Serializable {

private static final long serialVersionUID = 1L;
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(updatable = false, nullable = false)
private Long id;

@Version
@Column
private int version;

@Column(nullable = false)
private BigDecimal weight;

@ManyToOne
private Person person;

public Long getId() { return this.id; }
public int getVersion() { return this.version; }
public BigDecimal getWeight() { return weight; }

public Optional<Person> getPerson() {
return Optional.ofNullable(person);
}
```

Sim, a solução é simples mesmo. **Não podemos utiliza-lo como atributo** na nossa classe **Person** devido a tudo que foi explicado acima, mas podemos utiliza-lo como tipo de retorno do método get(). Caso queria praticar o uso do Optional você pode ir lá no [repositório no GitHub e hackear o código](https://github.com/mmalaquias1/microprofile-swarm-samples/tree/master/swarm-jpa-java8-optional). Tente usar o Optional como atributo da classe e tente subir a aplicação.

_Originally published on [Medium](https://medium.com/collabcode/como-usar-o-optional-do-java-8-com-a-jpa-hibernate-c1e48a4aa546)._

---

## Finalizando…

Se você gostou desse post não esquece de dar um like e compartilhar 😄

Se quiser saber o que ando fazendo por ai ou tirar alguma dúvida fique a vontade para me procurar nas redes sociais como @ [malaquiasdev](https://twitter.com/malaquiasdev).

Para ler mais post meus acesse [MalaquiasDEV | A Vida, o código e tudo mais](http://malaquias.dev).
