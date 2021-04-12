import React from "react"
import "../styles/globals.css"
import "../styles/styles.css"
import { useStaticQuery, graphql } from "gatsby"
import { Box, ResponsiveContext } from "grommet"
import Layout from "../components/layout"
import Jobs from "../components/jobs"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Tools from "../components/tools"
import Landing from "../components/landing"
import About from "../components/about"

const IndexPage = () => {
  const { jobs, projects } = useStaticQuery(graphql`
    {
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

  return (
    <>
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
    </>
  )
}

export default IndexPage
