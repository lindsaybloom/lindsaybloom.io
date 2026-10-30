import React from "react"

export type MenuItemProps = {
  label: string
  href: string
  onClick?: (e: React.MouseEvent) => void
}

type MenuProps = {
  items: Array<MenuItemProps>
}

const MenuItem = ({ label, href, onClick }: MenuItemProps) => {
  return (
    <a
      className="block py-2 t-callout text-ink hover:no-underline hover:text-black"
      href={href}
      onClick={onClick}
    >
      {label}
    </a>
  )
}

// Two-line icon that morphs into an X, like a compact mobile global nav
export const Menu = ({ items }: MenuProps) => {
  const [isOpen, toggle] = React.useState(false)

  const handleClick = () => toggle(!isOpen)

  return (
    <div className="md:hidden">
      <button
        className="relative w-11 h-11 -mr-3 flex items-center justify-center"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span
          className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${
            isOpen ? "rotate-45" : "-translate-y-[3px]"
          }`}
        />
        <span
          className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${
            isOpen ? "-rotate-45" : "translate-y-[3px]"
          }`}
        />
      </button>
      {isOpen && (
        <nav
          aria-label="Primary"
          className="globalnav fixed inset-x-0 top-11 bottom-0 px-12 pt-6 fadeIn"
        >
          {items?.map(item => (
            <MenuItem key={item.href} onClick={handleClick} {...item} />
          ))}
        </nav>
      )}
    </div>
  )
}
