import React from "react"
import {
  Box,
  Heading,
  Text,
  Paragraph,
  Anchor,
  TextInput,
  TextArea,
  Form,
  FormField,
} from "grommet"
import theme from "../styles/theme"
import styled from "styled-components"

const StyledBox = styled(Box)`
  border-radius: 20px;
  border: 2px solid;
`

const Contact = props => {
  return (
    <section id="contact">
      <Box margin={{ top: "large" }}>
        <Heading>Get in touch with me!</Heading>
        <Text>
          Please email me directly at{" "}
          <Anchor href="mailto: lindsaybloomdev@gmail.com">
            lindsaybloomdev@gmail.com
          </Anchor>
          .
        </Text>

        <Anchor
          margin={{ top: "medium" }}
          href="mailto: lindsaybloomdev@gmail.com"
        >
          <StyledBox
            height="80px"
            width="150px"
            align="center"
            justify="center"
          >
            <Text>Email me!</Text>
          </StyledBox>
        </Anchor>
      </Box>
    </section>
  )
}

export default Contact
