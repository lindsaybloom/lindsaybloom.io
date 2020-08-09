import React from "react"
import { Box, Heading, Text, Paragraph, Anchor } from "grommet"
import theme from "../styles/theme"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import * as contentful from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import { FaCanadianMapleLeaf } from "react-icons/fa"
import { Coffee } from "grommet-icons"

const About = props => {
  const about = useStaticQuery(graphql`
    {
      contentfulRichText(name: { eq: "who-am-i" }) {
        text {
          json
        }
      }
    }
  `)

  console.log(about)
  return (
    <section id="about">
      <Box pad={{ bottom: "300px" }}>
        <Heading>Who am I?</Heading>
        <Box direction="column" width="60%">
          {documentToReactComponents(about.contentfulRichText.text.json)}
        </Box>
      </Box>
    </section>
  )
}

export default About
