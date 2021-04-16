import * as React from "react"
import Layout from "../components/layout"
import PostTile from "../components/postTile"
import { useStaticQuery, graphql } from "gatsby"
import {
  Layer,
  Heading,
  Box,
  FormField,
  TextInput,
  Button,
  Text,
  ResponsiveContext,
} from "grommet"
import styled from "styled-components"
import { Close } from "grommet-icons"

const RoundBox = styled(Box)`
  border-radius: 20px;
`

const Blog = () => {
  const { blogPosts } = useStaticQuery(graphql`
    {
      blogPosts: allContentfulBlogPost {
        edges {
          node {
            title
            slug
            body {
              json
            }
            description {
              description
            }
            date(formatString: "MM/DD/YYYY")
            hero {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
              file {
                url
                details {
                  image {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const [open, setOpen] = React.useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => {
    setOpen(false)
    window.location.reload()
  }
  // const formRef = React.createRef<HTMLFormElement>()
  const handleSubmit = e => {
    let form = document.getElementById("email-signup") as HTMLFormElement
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
  const size = React.useContext(ResponsiveContext)
  const flexDirection = size === "xsmall" || size === "small" ? "column" : "row"

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Layout>
          <RoundBox
            direction="column"
            align="center"
            border={{ size: "xsmall" }}
            pad="medium"
            width="fit-content"
            alignSelf="center"
          >
            <Heading textAlign="center" size="small">
              Sign up for my email list!
            </Heading>
            <Text margin={{ bottom: "medium" }} textAlign="center">
              Get an email notification for every post.
            </Text>
            <form
              id="email-signup"
              name="email-signup"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              style={{ marginBottom: "0" }}
            >
              <input type="hidden" name="form-name" value="email-signup" />
              <Box direction={flexDirection}>
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
              <Box
                margin={{ top: "medium" }}
                direction="row"
                gap="medium"
                justify="center"
              >
                <Button type="submit" primary label="Signup" />
              </Box>
            </form>
          </RoundBox>

          <>
            {open && (
              <Layer position="center" onClickOutside={onClose} onEsc={onClose}>
                <Box pad="small" direction="row" justify="end">
                  <Button onClick={onClose}>
                    <Close />
                  </Button>
                </Box>
                <Box pad="medium" gap="small" width="medium">
                  <Heading level={3} margin="none">
                    Thanks for signing up! You'll receive an email when I
                    release my next post.
                  </Heading>
                </Box>
              </Layer>
            )}
          </>

          <Box direction="column" pad={{ vertical: "large" }}>
            {blogPosts.edges.map(post => (
              <PostTile post={post} />
            ))}
          </Box>
        </Layout>
      )}
    </ResponsiveContext.Consumer>
  )
}
export default Blog
