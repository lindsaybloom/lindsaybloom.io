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
  Button,
} from "grommet"
import theme from "../styles/theme"
import styled from "styled-components"

const Contact = props => {
  return (
    <section id="contact">
      <Box margin={{ top: "large" }}>
        <Heading>Get in touch with me!</Heading>
        <Text>
          Please feel free to email me directly at{" "}
          <Anchor href="mailto: lindsaybloomdev@gmail.com">
            lindsaybloomdev@gmail.com
          </Anchor>
          , or please fill out the form below.
        </Text>
        <Form onSubmit={({ value }) => {}}>
          <Box direction="row" justify="between" margin={{ top: "large" }}>
            <FormField
              required
              name="firstName"
              htmlfor="first-name"
              label="First Name"
              width="45%"
            >
              <TextInput id="first-name" name="firstName" />
            </FormField>
            <FormField
              required
              name="lastName"
              htmlfor="last-name"
              label="Last Name"
              width="45%"
            >
              <TextInput id="last-name" name="lastName" />
            </FormField>
          </Box>
          <Box direction="row" justify="between">
            <FormField
              required
              name="email"
              htmlfor="email"
              label="Email"
              width="45%"
            >
              <TextInput id="phone" name="phone" />
            </FormField>
            <FormField
              required={false}
              name="phone"
              htmlfor="phone"
              label="Phone Number"
              width="45%"
            >
              <TextInput id="last-name" name="lastName" />
            </FormField>
          </Box>
          <FormField required name="subject" htmlfor="subject" label="Subject">
            <TextInput id="subject" name="subject" />
          </FormField>
          <FormField required name="message" htmlfor="message" label="Message">
            <TextArea id="message" name="message" />
          </FormField>
          <Button
            type="submit"
            primary
            label="Submit"
            margin={{ top: "large" }}
          />
        </Form>
      </Box>
    </section>
  )
}

export default Contact
