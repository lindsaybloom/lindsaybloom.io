import React from "react"
import Nav from "../Nav"
import Footer from "../Footer"

export const Layout = ({
  children,
  className = "",
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <>
      <link rel="icon" type="image/png" href="/src/images/favicon.png" />
      <Nav />
      <main className={className}>{children}</main>
      <Footer />
    </>
  )
}
