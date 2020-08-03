import React, { Component } from "react"
import { Anchor, Box, Header, Nav, Menu, ResponsiveContext } from "grommet"
import { navLinks } from "../config"
import Logo from "../components/logo"

const getNavItems = () => {
  let navItems = []
  navLinks.map(({ url, name }, i) => navItems.push({ label: name, href: url }))
}

const Navigation = () => {
  const navItems = getNavItems()
  return (
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small" width="60px" height="0">
        <Logo />
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === "small" ? (
            <Menu label="Menu" items={navItems} />
          ) : (
            <Nav direction="row">
              {navLinks.map(item => (
                <Anchor href={item.url} label={item.name} key={item.name} />
              ))}
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  )
}

export default Navigation
