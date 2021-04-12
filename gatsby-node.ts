const path = require("path")
const dotenv = require("dotenv")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  const blogPostPageTemplate = path.resolve("src/templates/blog-post.tsx")

  const blogPosts = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            body {
              json
            }
            description {
              description
            }
          }
        }
      }
    }
  `)

  blogPosts.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    const { slug } = node

    createPage({
      path: `blog/${slug}`,
      component: blogPostPageTemplate,
      context: {
        slug,
      },
    })
  })
}
