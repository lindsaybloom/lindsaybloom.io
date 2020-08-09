import React from "react"
import { Box, Heading, Tab, Tabs, Anchor, Text, Paragraph } from "grommet"
import theme from "../styles/theme"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import Img from "gatsby-image"

const Image = styled(Img)`
  img {
    position: static;
  }
  height: 300px;
  width: 500px;
`

const ImageStyle = {
  "object-fit": "contain",
  "object-position": "left top",
}

// const StyledGrid = styled()`
//   margin-top: 50px;
//   .projects {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     grid-gap: 15px;
//     position: relative;
//     ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
//   }
// `

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <Heading>Projects</Heading>
      {projects.map(p => {
        return (
          <Box>
            <Box direction="row" justify="evenly" align="center">
              {p.node.media ? (
                <Image fluid={p.node.media.fluid} imgStyle={ImageStyle} />
              ) : null}
            </Box>
            <Text size="large" margin={{ left: "xlarge", top: "large" }}>
              {p.node.name}
            </Text>
            {p.node.url ? (
              <Anchor
                size="large"
                margin={{ left: "xlarge", top: "large" }}
                href={p.node.url}
              >
                {p.node.url}
              </Anchor>
            ) : null}
          </Box>
        )
      })}
    </section>
  )
}

export default Projects
