import React from "react"
import config from "../../../config"
import LogoV2 from "../Logo/logoV2"
import { Link } from "remix"

const Nav = () => {
  const menuItems: Array<{ label: string; href: string }> = []
  config.navLinks.map(({ name, url }) =>
    menuItems.push({ label: name, href: url })
  )

  return (
    <header className="flex flex-row align-middle justify-between py-3 mx-6">
      <div className="flex flex-row align-middle gap-2 w-60">
        <Link to="https://lindsaybloom.io">
          <LogoV2 height={60} width={100} />
        </Link>
      </div>
      {/* <Menu label="Menu" items={menuItems} /> */}
      <nav className="flex flex-row items-center gap-3">
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
