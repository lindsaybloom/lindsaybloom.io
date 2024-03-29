import React from "react"
import Nav from "../Nav"
import Footer from "../Footer"

export const Layout = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" href="/src/images/favicon.png" />
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
