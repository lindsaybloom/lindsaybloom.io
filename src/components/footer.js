import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Box, Footer as GrommetFooter, Anchor, Text } from "grommet"
import { Instagram, Twitter, Github, Linkedin } from "grommet-icons"

const Footer = ({ background }) => (
  <GrommetFooter background={background} margin={{ top: "xlarge" }}>
    <Box direction="row" justify="between" width="100%">
      <Text>Designed &amp; built by Lindsay Bloom </Text>
      <Box direction="row" justify="between" width="10%">
        <Anchor href="https://www.instagram.com/lindsaybloom/">
          <Instagram color="accent-2" />
        </Anchor>
        <Anchor href="https://www.twitter.com/lbloom97/">
          <Twitter color="accent-2" />
        </Anchor>
        <Anchor href="https://www.github.com/lindsaybloom/">
          <Github color="accent-2" />
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/lindsay-bloom/">
          <Linkedin color="accent-2" />
        </Anchor>
      </Box>
    </Box>
  </GrommetFooter>
)

export default Footer
