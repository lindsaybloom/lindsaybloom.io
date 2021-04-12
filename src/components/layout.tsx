import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Main } from "grommet"
import Nav from "./nav"
import Head from "./head"
import Footer from "./footer"
import { Grommet, ResponsiveContext } from "grommet"
import { breakpoints } from "../styles/breakpoints"

const Layout = ({ children }) => {
  const { metadata } = useStaticQuery(graphql`
    {
      metadata: contentfulMetadata(contentfulid: { eq: "lindsaybloom.io" }) {
        title
        contentfulid
        author
        language
        description {
          description
        }
      }
    }
  `)

  const size = React.useContext(ResponsiveContext)

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="/src/images/favicon.png" />
      <Head metadata={metadata} />
      <Grommet theme={breakpoints as any}>
        <ResponsiveContext.Consumer>
          {size => (
            <>
              <Nav />
              <div
                style={{
                  margin: "0 auto",
                  maxWidth: "90%",
                  padding: "0 1.0875rem 1.45rem",
                }}
              >
                <Main>{children}</Main>
                <Footer />
              </div>
            </>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </>
  )
}

export default Layout
