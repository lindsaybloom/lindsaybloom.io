import * as React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import { useStaticQuery, graphql } from "gatsby"
import { Box, ResponsiveContext } from "grommet"
import { ContentfulBlogPostBySlug } from "../types/contentful"

type BlogPostProps = {
  data: {
    contentfulBlogPost: ContentfulBlogPostBySlug
  }
  location: {
    hash: string
    host: string
    hostname: string
    href: string
    key: string
    origin: string
    pathname: string
    port: string
    protocol: string
    search: string
    state: null
  }
  navigate: any
  pageContext: {
    slug: string
  }
  path: string
  pathContext: {
    slug: string
  }
  uri: string
}

const BlogPost = (props: BlogPostProps) => {
  const { data } = props
  const { contentfulBlogPost: blogPost } = data

  return (
    <>
      <Layout>
        <Box direction="column" pad={{ vertical: "large" }}>
          <Post post={blogPost} />
        </Box>
      </Layout>
    </>
  )
}
export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      description {
        description
      }
      body {
        json
      }
    }
  }
`
