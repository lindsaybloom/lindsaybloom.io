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
  ResponsiveContext,
} from "grommet"
import theme from "../styles/theme"
import styled from "styled-components"

const StyledBox = styled(Box)`
  border-radius: 20px;
  border: 2px solid;
`

const Contact = props => {

  const size = React.useContext(ResponsiveContext);
  const boxMarginBottom = size === "xsmall" || size === "small" ? "xlarge" : "0"

  return (
    <section id="contact">
      <ResponsiveContext.Consumer>
        {size =>
          <Box margin={{ top: "large", bottom: boxMarginBottom}} align="center">
            <Heading>Get in touch with me!</Heading>
            <Text>
              Please email me directly at{" "}
              <Anchor href="mailto: lindsaybloomdev@gmail.com">
                lindsaybloomdev@gmail.com
              </Anchor>
              .
            </Text>

            <Anchor
              margin={{ top: "large" }}
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
        }
      </ResponsiveContext.Consumer>
    </section>
  )
}

export default Contact
