module.exports = {
  siteMetadata: {
    title: `Gatsby with Drupal`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        typeRoots: `./src/typings`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://using-drupal.amazee.io/`,
        apiBase: `jsonapi`,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./src/typings/graphql-types.ts`,
      },
    },
  ],
}
