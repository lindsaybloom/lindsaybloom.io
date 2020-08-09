import React from "react"
import { Box, Heading, Stack, Text, Paragraph, Anchor } from "grommet"
import theme from "../styles/theme"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import * as contentful from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import { FaCanadianMapleLeaf } from "react-icons/fa"
import { Coffee } from "grommet-icons"

const Image = styled(Img)`
  img {
    position: static;
  }
  height: 400px;
  width: 300px;
`
const ImageStyle = {
  "object-fit": "contain",
  "object-position": "left top",
}

const Underlay = styled(Box)`
  opacity: 0.5;
`

const About = props => {
  const { about, photo } = useStaticQuery(graphql`
    {
      about: contentfulRichText(name: { eq: "who-am-i" }) {
        text {
          json
        }
      }
      photo: contentfulPhoto(contentfulid: { eq: "who-am-i-photo" }) {
        id
        file {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  `)

  const [overlayOpacity, setOverlayOpacity] = React.useState("0.3")
  const mouseOver = opacity => {
    setOverlayOpacity(opacity)
  }

  const Overlay = styled(Box)`
    opacity: ${overlayOpacity};
  `

  return (
    <section id="about">
      <Box pad={{ bottom: "300px" }}>
        <Heading>Who am I?</Heading>
        <Box direction="row" justify="between" align="center">
          <Box direction="column" width="60%">
            {documentToReactComponents(about.text.json)}
          </Box>
          <Stack anchor="bottom-left">
            <Underlay
              height="400px"
              width="300px"
              margin="large"
              background="dark-2"
            />
            <Stack anchor="center">
              <Image fluid={photo.file.fluid} imgStyle={ImageStyle} />
              <Overlay
                background="accent-2"
                height="400px"
                width="300px"
                onMouseOver={() => mouseOver("0")}
                onMouseLeave={() => mouseOver("0.3")}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </section>
  )
}

export default About
