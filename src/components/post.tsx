import React from "react"
import {
  Box,
  Heading,
  Tab,
  Tabs,
  Anchor,
  Text,
  ResponsiveContext,
} from "grommet"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import {
  ContentfulJob,
  ContentfulBlogPost,
  ContentfulBlogPostBySlug,
} from "../types/contentful"

type PostProps = {
  post: ContentfulBlogPostBySlug
}

const Post = ({ post }: PostProps) => {
  const size = React.useContext(ResponsiveContext)
  const sectionPaddingBottom =
    size === "xsmall" || size === "small" ? "100px" : "200px"

  return (
    <article id="post">
      <ResponsiveContext.Consumer>
        {size => (
          <>
            <Heading>{post.title}</Heading>
            {documentToReactComponents(post.body.json)}
          </>
        )}
      </ResponsiveContext.Consumer>
    </article>
  )
}

export default Post
