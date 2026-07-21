// Internationalization dictionary. Add a key to BOTH locales.

export const LOCALES = ["en", "pt"] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Lang = "en";

export const localeNames: Record<Lang, string> = {
  en: "EN",
  pt: "PT",
};

type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
};

type SkillGroup = { group: string; items: string[] };

type CommunityRole = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

type Dict = {
  nav: { home: string; about: string; services: string; gallery: string; blog: string };
  home: {
    eyebrow: string;
    greeting: string;
    tagline: string;
    bio: string;
    ctaAbout: string;
    ctaServices: string;
    stack: string;
    latest: string;
    allPosts: string;
    funFacts: string;
    facts: string[];
  };
  about: {
    eyebrow: string;
    roleLine: string;
    prose: string[]; // HTML allowed
    experienceTitle: string;
    experience: Job[];
    skillsTitle: string;
    skills: SkillGroup[];
    communityTitle: string;
    community: CommunityRole[];
    educationTitle: string;
    degree: string;
    certs: string[];
    elsewhere: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; desc: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    empty: string;
    homeTitle: string;
    viewAll: string;
  };
};

// Skill items are technology names — identical across locales, only group labels translate.
const SKILL_ITEMS = {
  languages: ["Java", "TypeScript", "JavaScript", "Go", "Kotlin", "Python", "SQL"],
  frameworks: ["Spring Boot", "Quarkus", "Node.js", "Gin", "Serverless", "Flask"],
  apis: ["REST", "GraphQL", "gRPC", "Webhooks"],
  data: ["PostgreSQL", "MySQL", "DynamoDB", "MongoDB", "Redis", "InfluxDB"],
  messaging: ["SQS", "SNS", "Kinesis", "EventBridge", "Step Functions", "Event Hubs"],
  cloud: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
  architecture: ["Microservices", "DDD", "SOLID", "Hexagonal", "BFF", "Saga", "CQRS"],
  testing: ["JUnit", "Mockito", "Jest", "Cypress", "Playwright"],
  cicd: ["Git", "GitHub Actions", "Prometheus", "Datadog", "Grafana"],
};

export const ui: Record<Lang, Dict> = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", gallery: "Gallery", blog: "Blog" },
    home: {
      eyebrow: "Senior Software Engineer",
      greeting: "Hi, I'm Mateus Malaquias.",
      tagline:
        "Senior software engineer with 10+ years building scalable systems for fintech, video-streaming and accommodations.",
      bio: "I am deeply committed to delivering robust backend solutions that drive efficiency and innovation.",
      ctaAbout: "About me →",
      ctaServices: "What I do",
      stack: "Stack",
      latest: "Latest writing",
      allPosts: "all posts on dev.to ↗",
      funFacts: "Fun facts",
      facts: [
        "Coffee is my favorite drink",
        "I love playing Elden Ring in my spare time",
        "I write about comic-books, technology, and the things I read",
        "If I wasn't a developer, I'd probably be a zoologist",
        "Big fan of Studio Ghibli and Pixar",
      ],
    },
    about: {
      eyebrow: "About",
      roleLine: "Senior Software Engineer · São Paulo, Brazil",
      prose: [
        "I'm a software engineer with over a decade of experience, specializing in designing and developing scalable systems for <strong>fintech</strong>, <strong>video-streaming</strong> and <strong>accommodations</strong>.",
        "I am deeply committed to delivering robust backend solutions that drive efficiency and innovation — systems that stay correct under load, are a pleasure to operate, and outlive the trends that shaped them.",
        'Outside of shipping software, I write about technology, comic-books, and whatever I\'m reading. You\'ll find my notes on <a href="https://dev.to/malaquiasdev" target="_blank" rel="noopener">dev.to</a>.',
      ],
      experienceTitle: "Experience",
      experience: [
        {
          role: "Lead Software Engineer",
          company: "PBSF",
          period: "Jun 2025 – Present",
          location: "São Paulo, Brazil",
          summary:
            "Medical technology company focused on real-time neonatal monitoring and multimodal data analysis to protect brain health.",
          bullets: [
            "Led a team of 10 engineers designing and scaling a distributed edge-to-cloud architecture on Azure — Kubernetes, Java (Quarkus), MySQL, Event Hubs, Redis, InfluxDB, Blob Storage and DuckDB for high-throughput medical data ingestion via Parquet pipelines.",
            "Architected edge components for reliable offline buffering and real-time sync with Azure clusters, ensuring sub-second telemetry streaming from neonatal ICUs.",
            "Defined CI/CD pipelines and observability standards (Prometheus, centralized logging), improving incident response time by over 60%.",
            "Mentored developers through code reviews, design sessions and career planning.",
          ],
        },
        {
          role: "Lead Software Engineer",
          company: "StudentRoomStay (SRS)",
          period: "Jun 2024 – Jun 2025",
          location: "San Luis Obispo, California",
          summary:
            "International student accommodation that has placed tens of thousands of students across the US, Australia and New Zealand.",
          bullets: [
            "Architected and led migration of core booking and matching services from AWS Lambda + DynamoDB to a Kubernetes-based microservices architecture with PostgreSQL — eliminating 90% of data-mismatch incidents and adding full ACID support.",
            "Designed normalized relational schemas focused on reducing complex join latencies and enabling advanced reporting.",
            "Built high-availability REST APIs guided by DDD, using Materialized View caching and the Async Request–Reply pattern.",
            "Monitored production health with CloudWatch dashboards and led on-call incidents.",
          ],
        },
        {
          role: "Senior Software Engineer",
          company: "Greenlight",
          period: "May 2022 – May 2024",
          location: "Atlanta, Georgia",
          summary:
            "Debit card and money app for families, empowering parents to raise financially-smart kids.",
          bullets: [
            "Led end-to-end development of core products — P2P transfers, Savings Goals and Chore Management — serving 1.5M+ active users.",
            "Architected and executed migration of the Chores module from monolith to Kubernetes-based microservices using TypeScript and Java.",
            "Optimized data performance with relational (MySQL) and NoSQL (DynamoDB, Redis) stores, reducing average query latency by 50%.",
            "Monitored production health with Datadog dashboards and led on-call incidents.",
          ],
        },
        {
          role: "Senior Software Engineer",
          company: "Itaú Unibanco",
          period: "Sep 2021 – May 2022",
          location: "São Paulo, Brazil",
          summary:
            "The largest bank in Latin America, present in 18 countries, serving 55M+ customers daily.",
          bullets: [
            "Designed and implemented migration of multiple BFF services from on-premise servers to AWS EKS.",
            "Built high-availability REST APIs in Java/Spring Boot with SQL Server and Redis, handling peak loads with sub-500ms response times.",
            "Established end-to-end monitoring and alerting with Grafana and AppDynamics, reducing mean time to resolution.",
            "Guided and reviewed backend trainees, standardizing code quality checks and AWS best practices.",
          ],
        },
        {
          role: "Lead Software Engineer",
          company: "Claro Brasil",
          period: "Jun 2018 – Sep 2021",
          location: "São Paulo, Brazil",
          summary:
            "Telecom leader in Latin America, present in 4,200+ Brazilian cities, reaching 96% of the population.",
          bullets: [
            "Led 3 teams across Brazil, Argentina and Mexico to build a high-throughput video-streaming platform — scaling to 50K req/s at peak and 1M+ concurrent users.",
            "Spearheaded a serverless push-notification platform on AWS — delivering 600M+ notifications in year one across 18M device endpoints at 60% lower cost than the legacy system.",
            "Defined cloud architecture standards and CI/CD pipelines.",
            "Owned hiring, onboarding, reviews and career coaching for engineers.",
          ],
        },
      ],
      skillsTitle: "Skills",
      skills: [
        { group: "Languages", items: SKILL_ITEMS.languages },
        { group: "Frameworks & Runtimes", items: SKILL_ITEMS.frameworks },
        { group: "APIs & Integration", items: SKILL_ITEMS.apis },
        { group: "Databases & Caching", items: SKILL_ITEMS.data },
        { group: "Messaging & Streaming", items: SKILL_ITEMS.messaging },
        { group: "Cloud & Infrastructure", items: SKILL_ITEMS.cloud },
        { group: "Architecture", items: SKILL_ITEMS.architecture },
        { group: "Testing & QA", items: SKILL_ITEMS.testing },
        { group: "CI/CD & Observability", items: SKILL_ITEMS.cicd },
      ],
      communityTitle: "Community",
      community: [
        {
          role: "Member, Java Community & SouJava",
          org: "JCP",
          period: "Jun 2018 – Present",
          bullets: [
            "Elected Java Community Process (JCP) member — review and vote on JSRs and engage with Expert Groups to shape platform evolution.",
            "Co-lead the SouJava user group, planning quarterly meetups, hackathons and signature events.",
            "Speaker at flagship conferences like Oracle Code One (formerly JavaOne).",
          ],
        },
        {
          role: "Community Manager",
          org: "Training Center",
          period: "Jul 2018 – Dec 2020",
          bullets: [
            "Produced 30+ talks on systems architecture, Agile and programming fundamentals; authored technical blog posts and mentored learners one-on-one.",
          ],
        },
        {
          role: "Organizer",
          org: "NoSQLBahia & JavaBahia",
          period: "2016 – 2018",
          bullets: [
            "Ran Brazil's largest NoSQL meetup at UFBA (500+ attendees) and co-organized biannual JavaBahia meetups in Salvador.",
          ],
        },
      ],
      educationTitle: "Education & Certificates",
      degree: "Degree in Analysis and Development of Systems · Unijorge · 2016",
      certs: [
        "OWASP Top 10 Application Security · Kontra · 2023",
        "Cybercrime Essentials for Financial Institutions · BAI · 2023",
        "+ 40 additional professional certifications",
      ],
      elsewhere: "Elsewhere",
    },
    services: {
      eyebrow: "Services",
      title: "How I can help",
      lead: "Backend-heavy engineering for teams that care about correctness and scale.",
      items: [
        {
          title: "Backend Architecture",
          desc: "Designing scalable, resilient backend systems — APIs, event-driven pipelines, and data modeling for high-throughput domains.",
        },
        {
          title: "Fintech Systems",
          desc: "Building secure, compliant financial platforms: payments, ledgers, and transaction processing with correctness as the first priority.",
        },
        {
          title: "Cloud & Microservices",
          desc: "Decomposing monoliths, designing service boundaries, and shipping cloud-native systems on AWS and Azure.",
        },
        {
          title: "Technical Mentoring",
          desc: "Code reviews, architecture guidance, and helping teams level up engineering practices.",
        },
      ],
      ctaTitle: "Have a project in mind?",
      ctaText: "Let's talk about it.",
      ctaButton: "Get in touch →",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Pixel Art Gallery",
      intro:
        "A hand-picked collection of pixel art pieces. Follow along on Instagram for more.",
      empty: "No pieces yet — check back soon.",
      homeTitle: "Pixel Art Gallery",
      viewAll: "View full gallery →",
    },
  },
  pt: {
    nav: { home: "Início", about: "Sobre", services: "Serviços", gallery: "Galeria", blog: "Blog" },
    home: {
      eyebrow: "Engenheiro de Software Sênior",
      greeting: "Olá, eu sou o Mateus Malaquias.",
      tagline:
        "Engenheiro de software sênior com mais de 10 anos construindo sistemas escaláveis para fintech, streaming de vídeo e hospedagem.",
      bio: "Sou comprometido em entregar soluções de backend robustas que geram eficiência e inovação.",
      ctaAbout: "Sobre mim →",
      ctaServices: "O que eu faço",
      stack: "Stack",
      latest: "Escritos recentes",
      allPosts: "todos os posts no dev.to ↗",
      funFacts: "Curiosidades",
      facts: [
        "Café é minha bebida favorita",
        "Adoro jogar Elden Ring no tempo livre",
        "Escrevo sobre quadrinhos, tecnologia e o que ando lendo",
        "Se não fosse desenvolvedor, provavelmente seria zoólogo",
        "Grande fã do Studio Ghibli e da Pixar",
      ],
    },
    about: {
      eyebrow: "Sobre",
      roleLine: "Engenheiro de Software Sênior · São Paulo, Brasil",
      prose: [
        "Sou engenheiro de software com mais de uma década de experiência, especializado em projetar e desenvolver sistemas escaláveis para <strong>fintech</strong>, <strong>streaming de vídeo</strong> e <strong>hospedagem</strong>.",
        "Sou comprometido em entregar soluções de backend robustas que geram eficiência e inovação — sistemas que permanecem corretos sob carga, são um prazer de operar e sobrevivem às tendências que os moldaram.",
        'Fora do código, escrevo sobre tecnologia, quadrinhos e o que ando lendo. Minhas notas ficam no <a href="https://dev.to/malaquiasdev" target="_blank" rel="noopener">dev.to</a>.',
      ],
      experienceTitle: "Experiência",
      experience: [
        {
          role: "Engenheiro de Software Líder",
          company: "PBSF",
          period: "Jun 2025 – Atual",
          location: "São Paulo, Brasil",
          summary:
            "Empresa de tecnologia médica focada em monitoramento neonatal em tempo real e análise de dados multimodais para proteger a saúde cerebral.",
          bullets: [
            "Liderei um time de 10 engenheiros no design e escala de uma arquitetura distribuída edge-to-cloud no Azure — Kubernetes, Java (Quarkus), MySQL, Event Hubs, Redis, InfluxDB, Blob Storage e DuckDB para ingestão de dados médicos de alto throughput via pipelines Parquet.",
            "Arquitetei componentes de edge para buffering offline confiável e sincronização em tempo real com clusters Azure, garantindo telemetria sub-segundo de UTIs neonatais.",
            "Defini pipelines de CI/CD e padrões de observabilidade (Prometheus, logging centralizado), reduzindo o tempo de resposta a incidentes em mais de 60%.",
            "Mentorei desenvolvedores via code reviews, sessões de design e planejamento de carreira.",
          ],
        },
        {
          role: "Engenheiro de Software Líder",
          company: "StudentRoomStay (SRS)",
          period: "Jun 2024 – Jun 2025",
          location: "San Luis Obispo, Califórnia",
          summary:
            "Plataforma internacional de hospedagem estudantil que já alocou dezenas de milhares de estudantes nos EUA, Austrália e Nova Zelândia.",
          bullets: [
            "Arquitetei e liderei a migração dos serviços core de booking e matching de AWS Lambda + DynamoDB para microsserviços em Kubernetes com PostgreSQL — eliminando 90% dos incidentes de inconsistência de dados e adicionando suporte ACID completo.",
            "Projetei schemas relacionais normalizados focados em reduzir latência de joins complexos e habilitar relatórios avançados.",
            "Construí APIs REST de alta disponibilidade guiadas por DDD, usando cache de Materialized View e o padrão Async Request–Reply.",
            "Monitorei a saúde de produção com dashboards CloudWatch e liderei incidentes de plantão.",
          ],
        },
        {
          role: "Engenheiro de Software Sênior",
          company: "Greenlight",
          period: "Mai 2022 – Mai 2024",
          location: "Atlanta, Geórgia",
          summary:
            "Cartão de débito e app financeiro para famílias, ajudando pais a criarem filhos financeiramente conscientes.",
          bullets: [
            "Liderei o desenvolvimento ponta a ponta de produtos core — transferências P2P, Metas de Poupança e Gestão de Tarefas — atendendo 1,5M+ de usuários ativos.",
            "Arquitetei e executei a migração do módulo de Tarefas de monolito para microsserviços em Kubernetes usando TypeScript e Java.",
            "Otimizei performance de dados com stores relacionais (MySQL) e NoSQL (DynamoDB, Redis), reduzindo a latência média de consultas em 50%.",
            "Monitorei a saúde de produção com dashboards Datadog e liderei incidentes de plantão.",
          ],
        },
        {
          role: "Engenheiro de Software Sênior",
          company: "Itaú Unibanco",
          period: "Set 2021 – Mai 2022",
          location: "São Paulo, Brasil",
          summary:
            "O maior banco da América Latina, presente em 18 países, atendendo mais de 55M de clientes diariamente.",
          bullets: [
            "Projetei e implementei a migração de múltiplos serviços BFF de servidores on-premise para AWS EKS.",
            "Construí APIs REST de alta disponibilidade em Java/Spring Boot com SQL Server e Redis, lidando com picos de carga em respostas sub-500ms.",
            "Estabeleci monitoramento e alertas ponta a ponta com Grafana e AppDynamics, reduzindo o tempo médio de resolução.",
            "Orientei e revisei trainees de backend, padronizando checks de qualidade e boas práticas de AWS.",
          ],
        },
        {
          role: "Engenheiro de Software Líder",
          company: "Claro Brasil",
          period: "Jun 2018 – Set 2021",
          location: "São Paulo, Brasil",
          summary:
            "Líder em telecomunicações na América Latina, presente em 4.200+ cidades brasileiras, alcançando 96% da população.",
          bullets: [
            "Liderei 3 times no Brasil, Argentina e México na construção de uma plataforma de streaming de vídeo de alto throughput — escalando para 50K req/s em pico e 1M+ de usuários simultâneos.",
            "Conduzi uma plataforma serverless de push notifications na AWS — entregando 600M+ de notificações no primeiro ano em 18M de endpoints, com custo 60% menor que o sistema legado.",
            "Defini padrões de arquitetura cloud e pipelines de CI/CD.",
            "Responsável por contratação, onboarding, avaliações e coaching de carreira dos engenheiros.",
          ],
        },
      ],
      skillsTitle: "Habilidades",
      skills: [
        { group: "Linguagens", items: SKILL_ITEMS.languages },
        { group: "Frameworks & Runtimes", items: SKILL_ITEMS.frameworks },
        { group: "APIs & Integração", items: SKILL_ITEMS.apis },
        { group: "Bancos & Cache", items: SKILL_ITEMS.data },
        { group: "Mensageria & Streaming", items: SKILL_ITEMS.messaging },
        { group: "Cloud & Infraestrutura", items: SKILL_ITEMS.cloud },
        { group: "Arquitetura", items: SKILL_ITEMS.architecture },
        { group: "Testes & QA", items: SKILL_ITEMS.testing },
        { group: "CI/CD & Observabilidade", items: SKILL_ITEMS.cicd },
      ],
      communityTitle: "Comunidade",
      community: [
        {
          role: "Membro, Java Community & SouJava",
          org: "JCP",
          period: "Jun 2018 – Atual",
          bullets: [
            "Membro eleito do Java Community Process (JCP) — reviso e voto em JSRs e participo de Expert Groups para moldar a evolução da plataforma.",
            "Co-lidero o grupo de usuários SouJava, planejando meetups trimestrais, hackathons e eventos.",
            "Palestrante em conferências como Oracle Code One (ex-JavaOne).",
          ],
        },
        {
          role: "Community Manager",
          org: "Training Center",
          period: "Jul 2018 – Dez 2020",
          bullets: [
            "Produzi 30+ palestras sobre arquitetura de sistemas, Agile e fundamentos de programação; escrevi posts técnicos e mentorei alunos individualmente.",
          ],
        },
        {
          role: "Organizador",
          org: "NoSQLBahia & JavaBahia",
          period: "2016 – 2018",
          bullets: [
            "Conduzi o maior meetup de NoSQL do Brasil na UFBA (500+ participantes) e co-organizei os encontros semestrais do JavaBahia em Salvador.",
          ],
        },
      ],
      educationTitle: "Formação & Certificados",
      degree: "Análise e Desenvolvimento de Sistemas · Unijorge · 2016",
      certs: [
        "OWASP Top 10 Application Security · Kontra · 2023",
        "Cybercrime Essentials for Financial Institutions · BAI · 2023",
        "+ 40 certificações profissionais adicionais",
      ],
      elsewhere: "Onde me encontrar",
    },
    services: {
      eyebrow: "Serviços",
      title: "Como posso ajudar",
      lead: "Engenharia focada em backend para times que se importam com correção e escala.",
      items: [
        {
          title: "Arquitetura de Backend",
          desc: "Projetar sistemas de backend escaláveis e resilientes — APIs, pipelines orientados a eventos e modelagem de dados para domínios de alto throughput.",
        },
        {
          title: "Sistemas Fintech",
          desc: "Construir plataformas financeiras seguras e em conformidade: pagamentos, ledgers e processamento de transações com a correção como prioridade.",
        },
        {
          title: "Cloud & Microsserviços",
          desc: "Decompor monolitos, desenhar fronteiras de serviço e entregar sistemas cloud-native na AWS e Azure.",
        },
        {
          title: "Mentoria Técnica",
          desc: "Code reviews, orientação de arquitetura e ajuda para times evoluírem suas práticas de engenharia.",
        },
      ],
      ctaTitle: "Tem um projeto em mente?",
      ctaText: "Vamos conversar.",
      ctaButton: "Fale comigo →",
    },
    gallery: {
      eyebrow: "Galeria",
      title: "Galeria de Pixel Art",
      intro:
        "Uma coleção selecionada de peças de pixel art. Acompanhe mais no Instagram.",
      empty: "Ainda não há peças — volte em breve.",
      homeTitle: "Galeria de Pixel Art",
      viewAll: "Ver galeria completa →",
    },
  },
};

// Helpers
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split("/")[1];
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Lang) : DEFAULT_LOCALE;
}

// Logical path without locale prefix, e.g. "/pt/about" -> "/about", "/" -> "/".
export function stripLocale(pathname: string): string {
  const cleaned = pathname.replace(/^\/(pt)(?=\/|$)/, "").replace(/\/$/, "");
  return cleaned === "" ? "/" : cleaned;
}

// Build a URL for a logical path in a given locale.
export function localeHref(lang: Lang, logicalPath: string): string {
  const base = logicalPath === "/" ? "" : logicalPath;
  return lang === DEFAULT_LOCALE ? logicalPath : `/${lang}${base}` || "/";
}
