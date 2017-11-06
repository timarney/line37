module.exports = {
  siteMetadata: {
    title: `line37`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/`
      }
    },
    `gatsby-transformer-sharp`
  ]
};
