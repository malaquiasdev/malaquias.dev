module.exports = {
  pathPrefix: '',
  siteUrl: 'https://malaquias.dev',
  siteTitle: 'MalaquiasDEV | A Vida, o código e tudo mais',
  siteDescription:
    'Baiano | Tech Lead na Claro Brasil | Gosto de compartilhar conhecimento escrevendo sobre coisas de tech ☕️',
  author: 'Mateus Malaquias',
  postsForArchivePage: 3,
  defaultLanguage: 'pt-br',
  disqusScript: process.env.DISQUS_SCRIPT || '',
  pages: {
    home: '/',
    blog: 'blog',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/malaquiasdev',
    twitter: 'https://twitter.com/malaquiasdev',
    instagram: 'https://www.instagram.com/malaquiasdev/',
    linkedin: 'https://www.linkedin.com/in/mateus-malaquias-692532b5/',
    mail: 'mateusmalaquiasdev@outlook.com',
    rss: '/rss.xml',
  },
  contactFormUrl:
    process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '123456789',
  tags: {
    javascript: {
      name: 'javascript',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      color: '#90c53f',
    },
    devops: {
      name: 'devops',
      color: '#00c86f',
    },
    serverless: {
      name: 'serverless',
      color: '#f16165',
    },
    produtividade: {
      name: 'produtividade',
      color: '#ff8c2a',
    },
    carreira: {
      name: 'carreira',
      color: '#6b5be2',
    },
    java: {
      name: 'java',
      color: '#dd3431',
    },
    aws: {
      name: 'aws',
      color: '#f9c646',
    },
  },
};
