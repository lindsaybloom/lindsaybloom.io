import * as React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import { graphql } from "gatsby"
import { Box } from "grommet"
import { ContentfulBlogPostBySlug } from "../types/contentful"
import config from "../config"

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

type Meta = Array<{ name?: string; property?: string; content?: string }>

const BlogPost = (props: BlogPostProps) => {
  const { data } = props
  const { contentfulBlogPost: blogPost } = data
  const meta: Meta = [
    {
      name: `description`,
      content: blogPost.description.description,
    },
    {
      property: `og:title`,
      content: blogPost.title,
    },
    {
      property: `og:description`,
      content: blogPost.description.description,
    },
    {
      property: "og:image",
      content: blogPost?.hero?.file?.url,
    },
    {
      property: "og:image:width",
      content: blogPost?.hero?.file?.details?.image?.width?.toString(),
    },
    {
      property: "og:image:height",
      content: blogPost?.hero?.file?.details?.image?.height?.toString(),
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: config.twitterHandle,
    },
    {
      name: `twitter:title`,
      content: blogPost.title,
    },
    {
      name: `twitter:description`,
      content: blogPost.description.description,
    },
    {
      property: "twitter:image",
      content: blogPost?.hero?.file?.url,
    },
  ]

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
      date(formatString: "MM/DD/YYYY")
      hero {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        file {
          url
          details {
            image {
              height
              width
            }
          }
        }
      }
    }
  }
`
