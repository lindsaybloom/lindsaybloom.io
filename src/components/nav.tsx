import React from "react"
import {
  Anchor,
  Box,
  Header,
  Nav as Navigation,
  Menu,
  ResponsiveContext,
} from "grommet"
import { navLinks } from "../config"
import LogoV2 from "./logoV2"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"

const MenuItem = styled(AnchorLink)`
  text-decoration: none;
`

const Nav = () => {
  const menuItems = []
  navLinks.map(({ name, url }) => menuItems.push({ label: name, href: url }))
  const size = React.useContext(ResponsiveContext)
  const isMenu = size === "xsmall" || size === "small"

  return (
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small" width="60px" height="0">
        <Anchor href="https://lindsaybloom.io">
          <LogoV2 height={60} width={100} />
        </Anchor>
      </Box>
      <ResponsiveContext.Consumer>
        {size =>
          isMenu ? (
            <Menu label="Menu" items={menuItems} />
          ) : (
            <Navigation direction="row">
              {navLinks.map(item => (
                <MenuItem to={item.url} key={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Navigation>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  )
}

export default Nav
