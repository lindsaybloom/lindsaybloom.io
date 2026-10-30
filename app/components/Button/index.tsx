import React from "react"

export type ButtonVariant = "primary" | "secondary"

// Full class names are listed so Tailwind's content scan keeps them
const variantClassNames: Record<ButtonVariant, string> = {
  primary: "button-primary",
  secondary: "button-secondary",
}

export const buttonClassName = (
  variant: ButtonVariant = "primary",
  inline = true
) => `button ${variantClassNames[variant]} ${inline ? "w-auto" : "w-full"}`

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  inline?: boolean
  type?: "button" | "reset" | "submit"
  variant?: ButtonVariant
}

export const Button = ({
  children,
  inline = true,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${buttonClassName(variant, inline)} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
