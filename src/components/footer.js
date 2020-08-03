import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { Footer, Anchor } from 'grommet';
import { Instagram, Twitter, Github, Linkedin } from 'grommet-icons';


const MyFooter = ({ background }) => (
  <Footer justify="end" background={background}>
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
  </Footer>
)

export default MyFooter
