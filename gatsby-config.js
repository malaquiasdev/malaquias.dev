require('dotenv').config();
process.env.AWS_ACCESS_KEY_ID
process.env.AWS_SECRET_ACCESS_KEY

module.exports = {
  siteMetadata: {
    title: `MalaquiasDEV | A Vida, o código e tudo mais`,
    description: `Baiano | Pedreiro de Software | Estou sempre buscando por melhores práticas, experimentando novas linguagens e tecnologias.`,
    author: `@malaquiasdev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: process.env.S3_BUCKET_NAME
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/perfil.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],
}