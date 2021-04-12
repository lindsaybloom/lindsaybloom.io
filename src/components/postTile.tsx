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
import { ContentfulBlogPost } from "../types/contentful"
import Image from "gatsby-image"

type PostTileProps = {
  post: ContentfulBlogPost
}

const StyledAnchor = styled(Anchor)`
  color: white !important;
  & :hover {
    text-decoration: none;
  }
  padding-left: 24px;

  @media only screen and (max-width: 600px) {
    padding-left: 0;
  }
`
const TileWrapper = styled(Box)`
  & .gatsby-image-wrapper {
    width: 100%;
  }
  & .gatsby-image-wrapper img {
    object-fit: contain !important;
  }
`

const PostTile = ({ post }: PostTileProps) => {
  const size = React.useContext(ResponsiveContext)
  const wrapperFlex = size === "xsmall" || size === "small" ? "column" : "row"
  const imagePadding = size === "xsmall" || size === "small" ? "0" : "medium"

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <TileWrapper direction={wrapperFlex}>
          <Image fluid={post.node.hero.fluid} />
          <StyledAnchor href={`/${post.node.slug}`}>
            <Heading margin={{ bottom: "xsmall" }}>{post?.node?.title}</Heading>
            <Text>{post?.node?.description?.description}</Text>
          </StyledAnchor>
        </TileWrapper>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default PostTile
