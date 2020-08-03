import React from "react"
import { css } from "styled-components"
import Layout from "../components/layout"
import Jobs from "../components/jobs"

const shellStyles = css``

const JobPage = ({ pageContext }) => 
  <Layout css={shellStyles}>
    {console.log(pageContext.content)}
    {pageContext.content.map(c => {
      return <p>{c.company}</p>
    })}
  </Layout>


export default JobPage
