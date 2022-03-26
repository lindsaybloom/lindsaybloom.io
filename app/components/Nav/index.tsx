import React from "react"
import config from "../../../config"
import LogoV2 from "../Logo/logoV2"
import { Link } from "remix"
import { Menu, MenuItemProps } from "../Menu"

const Nav = () => {
  const menuItems: Array<MenuItemProps> = []
  config.navLinks.map(({ name, url }) =>
    menuItems.push({ label: name, href: url })
  )

  return (
    <header className="flex flex-row align-middle justify-between py-3 mx-6">
      <div className="flex flex-row align-middle gap-2 w-60">
        <Link to="/">
          <LogoV2 height={60} width={100} />
        </Link>
      </div>
      <Menu items={menuItems} />
      <nav className="hidden lg:flex flex-row items-center gap-3">
        {config.navLinks.map(item => (
          <Link to={item.url} key={item.name}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Nav
