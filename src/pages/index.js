import React from "react"
import theme from "../styles/theme"
import "../styles/globals.css"
import "../styles/styles.css"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Jobs from "../components/jobs"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Tools from "../components/tools"
import Head from "../components/head"
import { Grommet, Box, ResponsiveContext } from "grommet"
// import SEO from "../components/seo"

import Landing from "../components/landing"
import About from "../components/about"
import { breakpoints } from "../styles/breakpoints"

const IndexPage = () => {
  const { jobs, projects, metadata } = useStaticQuery(graphql`
    {
      metadata: contentfulMetadata(title: {eq: "Lindsay Bloom"}) {
        description {
          description
        }
        title
      }
      jobs: allContentfulJob(sort: { fields: startDate, order: ASC }) {
        edges {
          node {
            company
            position
            startDate(formatString: "MM:YYY")
            endDate(formatString: "MM:YYY")
            description {
              json
            }
            website
          }
        }
      }
      projects: allContentfulProject {
        edges {
          node {
            id
            name
            url
            description {
              json
            }
            media {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `)

  const size = React.useContext(ResponsiveContext);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="/src/images/favicon.png" />
      <Head metadata={metadata} />
      <Grommet theme={breakpoints}>
        <ResponsiveContext.Consumer>
          {size => (
            <Box key="fadeIn" animation={{ type: "fadeIn", duration: 4000 }}>
              <Layout>
                {/* <SEO title="Home" /> */}
                <Landing />
                <About />
                <Tools />
                <Jobs jobs={jobs.edges} />
                {/* <Projects projects={projects.edges} /> */}
                <Contact />
              </Layout>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </>
  )
}

export default IndexPage
