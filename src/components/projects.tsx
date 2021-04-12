import React from "react"
import { Box, Heading, Anchor, Text } from "grommet"
import styled from "styled-components"
import Img from "gatsby-image"
import { ContentfulProject } from "../types/contentful"

type ProjectProps = {
  projects: ContentfulProject[]
}

const Image = styled(Img)`
  img {
    position: static;
  }
  height: 300px;
  width: 500px;
`

const ImageStyle = {
  objectFit: "contain",
  objectPosition: "left top",
}

const Projects = ({ projects }: ProjectProps) => (
  <section id="projects">
    <Heading>Projects</Heading>
    {projects.map(p => (
      <Box key={p.node.name}>
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
    ))}
  </section>
)

export default Projects
