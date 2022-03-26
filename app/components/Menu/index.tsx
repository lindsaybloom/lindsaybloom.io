import React from "react"
import { FiMenu } from "react-icons/fi"

export type MenuItemProps = {
  label: string
  href: string
  onClick?: (e: React.MouseEvent) => void
}

type MenuProps = {
  label?: string
  items: Array<MenuItemProps>
}

const MenuItem = ({ label, href, onClick }: MenuItemProps) => {
  return (
    <a className="p-2 text-lg border-t" href={href} onClick={onClick}>
      {label}
    </a>
  )
}

export const Menu = ({ label, items }: MenuProps) => {
  const [isOpen, toggle] = React.useState(false)

  const handleClick = (e: React.MouseEvent) => {
    toggle(!isOpen)
  }

  return (
    <nav className="container flex justify-end relative">
      <button className="flex lg:hidden items-center" onClick={handleClick}>
        <FiMenu className="w-5 h-5" />
        {label && (
          <h3 className="text-2xl font-medium text-blue-500 pl-3">{label}</h3>
        )}
      </button>
      {isOpen && (
        <div className="flex flex-col top-3/4 absolute border border-white bg-grayDarkest">
          {items.map(item => (
            <MenuItem key={item.href} onClick={handleClick} {...item} />
          ))}
        </div>
      )}
    </nav>
  )
}
