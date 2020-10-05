const dotenv = require('dotenv');
const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Lindsay Bloom',
        short_name: 'LindsayBloom',
        start_url: '/',
        background_color: 'black',
        theme_color: 'gray',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'sdgc3wpiox9z',
        accessToken: 'VygsV8cfARSa5qilfeNy8ciVhCmx2Cp4R5PP0vMNWrc', // process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
