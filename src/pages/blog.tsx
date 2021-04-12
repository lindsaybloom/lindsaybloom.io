import * as React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import PostTile from "../components/postTile"
import { useStaticQuery, graphql } from "gatsby"
import { Box, ResponsiveContext } from "grommet"

const Blog = () => {
  const { blogPosts } = useStaticQuery(graphql`
    {
      blogPosts: allContentfulBlogPost {
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

  return (
    <>
      <Layout>
        <Box direction="column" pad={{ vertical: "large" }}>
          {blogPosts.edges.map(post => (
            <PostTile post={post} />
          ))}
        </Box>
      </Layout>
      <script src="https://www.twilik.com/assets/retainable/rss-embed/retainable.js"></script>
    </>
  )
}
export default Blog
