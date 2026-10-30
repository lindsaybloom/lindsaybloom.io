import config from "../../../config"
import Logo from "../Logo/logo"
import { Link } from "remix"
import { Menu, MenuItemProps } from "../Menu"

const Nav = () => {
  const menuItems: Array<MenuItemProps> = config.navLinks.map(
    ({ name, url }) => ({ label: name, href: url })
  )

  return (
    <header className="globalnav sticky top-0 z-50 w-full">
      <div className="max-w-nav mx-auto h-11 px-[22px] flex items-center justify-between">
        <Link
          to="/"
          aria-label="Lindsay Bloom, home"
          className="globalnav-link flex items-center"
        >
          <Logo height={36} width={36} />
        </Link>
        <nav
          aria-label="Primary"
          className="hidden md:flex flex-1 justify-end gap-10 lg:gap-12 t-micro"
        >
          {config.navLinks.map(item => (
            <Link to={item.url} key={item.name} className="globalnav-link">
              {item.name}
            </Link>
          ))}
        </nav>
        <Menu items={menuItems} />
      </div>
    </header>
  )
}

export default Nav
