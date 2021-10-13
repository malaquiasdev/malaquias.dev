---
title: "Lombok: Fixing SonarQube coverage problem"
path: blog/lombok-fixing-sonarqube-coverage-problem
tags: [java, devops, english]
cover: ./scott-rodgerson-5v235ueAU58-unsplash.jpg
date: 2021-10-13
excerpt: "How to fix low code coverage rate in SonarQube when using Lombok annotations"
---

*Photo by [Scott Rodgerson](https://unsplash.com/@scottrodgerson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

[Here is a Portuguese version.](https://dev.to/malaquiasdev/lombok-corrigindo-problema-de-cobertura-de-codigo-no-sonarqube-570h)

In my ongoing project, I have a CI/CD flow and one step is responsible to collect the code coverage and validate if I have the minimal value to proceed to another step.

However, even having 84% of code coverage, the SonarQube always returned 30% of the result in the step, because of that the deployment step was never executed. 

I spent some time understanding that the problem was in the Lombok annotations, the SonarQube was computing the generated code.

## The solution:

It's simple to resolve this issue. I created a file named `lombok.config` inside the folder java *(/../src/main/java/lombok.config)* with this:

```
config.stopBubbling = true
lombok.addLombokGeneratedAnnotation = true
```

## What are these settings for?

The `config.stopBubbling` informs the Lombok that the folder where the file is the root and the Lombok don't need to search for more parent folders.

While `lombok.addLombokGeneratedAnnotation`  put in every generated code by Lombok annotation, another one named `@lombok.Generated`. This annotation informs Jacoco to not collect coverage from those codes.

Done, problem solved!

## Finishing...

If you liked this post, please be sure to like and share 😄

If you want to know what I'm doing out there or ask any questions, feel free to look for me on social networks like [@malaquiasdev](https://twitter.com/malaquiasdev).

To read more of my posts, go to [MalaquiasDEV | Life, the code and everything else.](http://malaquias.dev/tags/english)