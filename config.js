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
    email: 'mateusmalaquiasdev@outlook.com',
    rss: '/rss.xml',
  },
  contactFormUrl:
    process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '123456789',
  tags: {
    javascript: {
      name: 'javascript',
      description:
        'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description:
        'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    typescript: {
      name: 'typescript',
      description:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description:
        'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description:
        'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description:
        'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description:
        'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description:
        'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    devops: {
      name: 'devops',
      description:
        'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    serverless: {
      name: 'serverless',
      description:
        'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    produtividade: {
      name: 'produtividade',
      description:
        'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    carreira: {
      name: 'carreira',
      description:
        'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    java: {
      name: 'java',
      description:
        'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    aws: {
      name: 'aws',
      description:
        'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  },
};
