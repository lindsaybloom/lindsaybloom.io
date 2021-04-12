const path = require("path")
const dotenv = require("dotenv")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  const jobPageTemplate = path.resolve("src/templates/job-page.js")
  const homePageTemplate = path.resolve("src/templates/home-page.js")

  const jobPageResults = await graphql(`
    {
      allContentfulContentPage {
        edges {
          node {
            id
            slug
            content {
              company
              position
              startDate(formatString: "MM:DD")
              location
              description {
                json
              }
            }
          }
        }
      }
    }
  `)

  const homePageResults = await graphql(`
    {
      allContentfulHomePage {
        edges {
          node {
            preHeader
            header
            slug
            subHeader {
              subHeader
            }
          }
        }
      }
    }
  `)

  jobPageResults.data.allContentfulContentPage.edges.forEach(({ node }) => {
    const { slug, content } = node

    createPage({
      path: slug,
      component: jobPageTemplate,
      context: {
        content,
      },
    })
  })



  homePageResults.data.allContentfulHomePage.edges.forEach(({ node }) => {
    const { preHeader, header, slug, subHeader } = node

    createPage({
      path: slug,
      component: homePageTemplate,
      context: {
        preHeader, header, subHeader
      },
    })
  })
}
