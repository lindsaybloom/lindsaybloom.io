const config = require("./src/config")
require("dotenv").config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lindsay Bloom",
        short_name: "LindsayBloom",
        start_url: "/",
        background_color: "black",
        theme_color: "gray",
        display: "minimal-ui",
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "sdgc3wpiox9z",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
  ],
}
