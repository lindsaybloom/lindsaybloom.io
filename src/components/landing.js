import React from "react"
import { Box, Heading, Text, Paragraph, Avatar, ResponsiveContext } from "grommet"
import theme from "../styles/theme"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import * as contentful from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import { Reactjs, Js, Cart, CreditCard } from "grommet-icons"

const Image = styled(Img)`
  img {
    position: static;
  }
  height: 300px;
  width: 200px;
`

const Container = styled(Box)`
  position: relative;
`

const ImageStyle = {
  "object-fit": "contain",
  "object-position": "left top",
}

const ImageWrapper = styled(Box)`
  position: absolute;
  bottom: ${props => props.bottom};
  right: 0%;
`

const StyledReact = styled(Reactjs)`
  height: ${props => props.height};
  width: ${props => props.width};
`
const StyledJs = styled(Js)`
  height: ${props => props.height};
  width: ${props => props.width};
  & g {
    stroke: black !important;
  }
`
const StyledCart = styled(Cart)`
  height: ${props => props.height};
  width: ${props => props.width};
`

const StyledCreditCard = styled(CreditCard)`
  height: ${props => props.height};
  width: ${props => props.width};
`

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
      image: contentfulIcon(contentfulid: { eq: "bitmoji" }) {
        id
        file {
          fixed {
            base64
            tracedSVG
            aspectRatio
            srcWebp
            srcSetWebp
          }
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

  const size = React.useContext(ResponsiveContext);
  const sectionPaddingTop = size === "xsmall" || size === "small" ? "0" : "100px"
  const sectionPaddingBottom = size === "xsmall" || size === "small" ? "100px" : "300px"
  const flexDirection = size === "xsmall" || size === "small" ? "column" : "row"
  const paragraphWidth = size === "xsmall" || size === "small" ? "100%" : "60%"
  const bottom = size === "xsmall" || size === "small" ? "55%" : "-50%"
  const descriptionPadding = size === "xsmall" || size === "small" ? "300px" : "0"
  const iconHeight = size === "xsmall" || size === "small" ? "50px" : "100px"
  const iconWidth = size === "xsmall" || size === "small" ? "50px" : "100px"

  return (
    <section id="landing">
      <ResponsiveContext>
        {size => (
          <Box pad={{ bottom: sectionPaddingBottom, top: sectionPaddingTop }}>
            <Box direction={flexDirection} align="baseline" justify="start">
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
            <Container direction="row" justify="between">
              <Box direction="row" width={paragraphWidth} pad={{top: descriptionPadding}}>
                {documentToReactComponents(description.text.json)}
              </Box>
              <ImageWrapper direction="row" margin={{ right: "xlarge" }} bottom={bottom}>
                <Image fixed={image.file.fixed} imgStyle={ImageStyle} />
              </ImageWrapper>
            </Container>
            <Box
              direction="row"
              justify="evenly"
              margin={{ top: "large" }}
              width={paragraphWidth}
            >
              <StyledReact height={iconHeight} width={iconWidth} />
              <StyledJs height={iconHeight} width={iconWidth} />
              <StyledCart height={iconHeight} width={iconWidth} />
              <StyledCreditCard height={iconHeight} width={iconWidth} />
            </Box>
          </Box>
        )}
      </ResponsiveContext>
    </section>
  )
}

export default Landing
