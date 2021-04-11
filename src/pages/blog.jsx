import * as React from "react"
import Layout from "../components/layout"

const Blog = () => {
  return (
    <>
      <Layout>
        <div
          id="retainable-rss-embed"
          data-rss="https://medium.com/feed/@lbloom97"
          data-maxcols="2"
          data-layout="grid"
          data-poststyle="inline"
          data-readmore="Read the rest"
          data-buttonclass="btn btn-primary"
          data-offset="-200"
        >
          &#160;
        </div>
      </Layout>
      <script src="https://www.twilik.com/assets/retainable/rss-embed/retainable.js"></script>
    </>
  )
}
export default Blog
