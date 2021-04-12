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
import { ContentfulJob, ContentfulBlogPost } from "../types/contentful"

type PostTileProps = {
  post: ContentfulBlogPost
}

const StyledAnchor = styled(Anchor)`
  color: white !important;
  & :hover {
    text-decoration: none;
  }
`

const PostTile = ({ post }: PostTileProps) => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box direction="column" pad={{ right: "xlarge" }}>
          <StyledAnchor href={`/${post.node.slug}`}>
            <Heading margin={{ bottom: "xsmall" }}>{post?.node?.title}</Heading>
            <Text>{post?.node?.description?.description}</Text>
          </StyledAnchor>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default PostTile
