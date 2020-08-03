import React from "react"
import { Box, Heading, Text, Paragraph, Avatar } from "grommet"
import theme from "../styles/theme"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import * as contentful from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

const Image = styled(Img)`
  img {
    position: static;
  }
  height: 300px;
  width: 200px;
`

const ImageStyle = {
  "object-fit": "contain",
  "object-position": "left top",
}

const Landing = props => {
  const { tagline, description, image } = useStaticQuery(graphql`
    {
      tagline: contentfulShortText(name: { eq: "landing-tagline" }) {
        text
      }
      description: contentfulRichText(name: { eq: "landing-description" }) {
        text {
          json
        }
      }
      image: contentfulIcon(contentfulid: { eq: "profile" }) {
        id
        file {
          fixed {
            base64
            tracedSVG
            aspectRatio
            srcWebp
            srcSetWebp
          }
          fluid(maxWidth: 319, quality: 80) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  `)

  return (
    <section id="landing">
      <Box direction="row" align="baseline" justify="start">
        <Paragraph>Hey, I'm</Paragraph>
        <Heading margin={{ left: "small", bottom: "small" }}>
          Lindsay Bloom
        </Heading>
      </Box>
      <Box>
        <Heading className="tagline" margin={{ top: "none" }}>
          {tagline.text}
        </Heading>
      </Box>
      <Box direction="row" justify="between">
        <Box direction="row" width="60%">
          {documentToReactComponents(description.text.json)}
        </Box>
        <Box direction="row" margin={{ right: "xlarge" }}>
          <Image fluid={image.file.fluid} imgStyle={ImageStyle} />
        </Box>
      </Box>
    </section>
  )
}

export default Landing
