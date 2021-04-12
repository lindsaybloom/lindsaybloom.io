import React from "react"
import Helmet from "react-helmet"
import config from "../config"
import favicon from "../images/favicon.ico"
import theme from "../styles/theme"
import logoIcon from "../images/LB_Logo.png"
import { ContentfulMetadata } from "../types/contentful"

const Head = ({ metadata }: ContentfulMetadata) => (
  <Helmet>
    <html lang="en" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="https://lindsaybloom.io" />
    <link href="https://www.twilik.com/assets/retainable/rss-embed/retainable.css" />

    <meta name="description" content={metadata.description.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-site-verification" content={config.googleVerification} />
    <meta property="og:title" content={metadata.title} />
    <meta
      property="og:description"
      content={metadata.description.description}
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={config.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={config.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={config.siteUrl} />
    <meta name="twitter:site" content={config.twitterHandle} />
    <meta name="twitter:creator" content={config.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta
      name="twitter:description"
      content={metadata.description.description}
    />
    <meta name="twitter:image:alt" content={metadata.title} />

    <meta
      name="msapplication-TileColor"
      content={theme.global.colors["accent-1"]}
    />
    <meta name="msapplication-TileImage" content={logoIcon} />
    <meta name="theme-color" content={theme.global.colors.brand} />
  </Helmet>
)

export default Head
