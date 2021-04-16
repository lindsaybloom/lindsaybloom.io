import React from "react"
import {
  Box,
  Heading,
  Text,
  Anchor,
  ResponsiveContext,
  Form,
  FormField,
  TextInput,
  TextArea,
  Button,
  Layer,
} from "grommet"
import styled from "styled-components"

const StyledBox = styled(Box)`
  border-radius: 20px;
  border: 2px solid;
`

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

const Contact = () => {
  const size = React.useContext(ResponsiveContext)
  const boxMarginBottom = size === "xsmall" || size === "small" ? "xlarge" : "0"
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const [open, setOpen] = React.useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  const handleSubmit = e => {
    let form = document.getElementById("contact-form") as HTMLFormElement
    let formData = new FormData(form)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch(error => alert(error))
    e.preventDefault()
    onOpen()
  }

  return (
    <section id="contact">
      <ResponsiveContext.Consumer>
        {size => (
          <>
            <Box
              margin={{ top: "large", bottom: boxMarginBottom }}
              align="center"
            >
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

              <Text margin={{ top: "large", bottom: "large" }}>
                Or, fill out this form!
              </Text>

              <form
                id="contact-form"
                name="contact-form"
                method="POST"
                data-netlify="true"
                netlify-honeypot="form-name"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <Box direction="row">
                  <FormField
                    name="name"
                    htmlFor="input-name"
                    label="Name"
                    margin={{ right: "large" }}
                  >
                    <TextInput
                      id="input-name"
                      name="name"
                      required
                      onChange={handleChange}
                    />
                  </FormField>
                  <FormField name="email" htmlFor="input-email" label="Email">
                    <TextInput
                      id="input-email"
                      name="email"
                      input-type="email"
                      required
                      onChange={handleChange}
                    />
                  </FormField>
                </Box>
                <FormField
                  name="message"
                  htmlFor="input-message"
                  label="Message"
                >
                  <TextArea
                    id="input-message"
                    name="message"
                    onChange={handleChange}
                  />
                </FormField>
                <Box margin={{ top: "large" }} direction="row" gap="medium">
                  <Button type="submit" primary label="Submit" />
                </Box>
              </form>
            </Box>
            {open && (
              <Layer position="center" onClickOutside={onClose} onEsc={onClose}>
                <Box pad="medium" gap="small" width="medium">
                  <Heading level={3} margin="none">
                    Thanks for reaching out! I'll do my best to get back to you
                    as soon as possible.
                  </Heading>
                </Box>
              </Layer>
            )}
          </>
        )}
      </ResponsiveContext.Consumer>
    </section>
  )
}

export default Contact
