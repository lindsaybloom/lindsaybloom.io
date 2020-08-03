import React from "react"
import { css } from "styled-components"
import Layout from "../components/layout"


const shellStyles = css``

const HomePage = ({ pageContext }) => 
  <Layout css={shellStyles}>
    <div>{pageContext.header}</div>
  </Layout>


export default HomePage
