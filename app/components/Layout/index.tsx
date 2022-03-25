import React from "react"
import Nav from "../Nav"
import Head from "../Head"
import Footer from "../Footer"

export const Layout = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  // const { metadata } = useStaticQuery(graphql`
  //   {
  //     metadata: contentfulMetadata(contentfulid: { eq: "lindsaybloom.io" }) {
  //       title
  //       contentfulid
  //       author
  //       language
  //       description {
  //         description
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="/src/images/favicon.png" />
      {/* <Head metadata={metadata} /> */}
      <Nav />
      <div
        style={{
          margin: "0 auto",
          maxWidth: "90%",
          padding: "0 1.0875rem 1.45rem",
        }}
      >
        <main className={`${className} mb-3`}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
