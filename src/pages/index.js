import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Jobs from "../components/jobs"
import { Grommet, Box } from "grommet"
import theme from "../styles/theme"
// import SEO from "../components/seo"
import "../styles/globals.css"
import "../styles/styles.css"
import Landing from "../components/landing"
import About from "../components/about"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulJob(sort: { fields: startDate, order: ASC }) {
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
    }
  `)

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="/src/images/favicon.png" />
      <Grommet theme={theme}>
        <Box key="fadeIn" animation={{ type: "fadeIn", duration: 4000 }}>
          <Layout>
            {/* <SEO title="Home" /> */}
            <Landing />
            <About />
            <Jobs jobs={data.allContentfulJob.edges} />
          </Layout>
        </Box>
      </Grommet>
    </>
  )
}

export default IndexPage
