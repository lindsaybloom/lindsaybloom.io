import React from "react"

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  inline?: boolean
  type?: "button" | "reset" | "submit"
}

export const Button = ({
  children,
  inline = true,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${
        inline ? "w-auto" : "w-full"
      } border-2 rounded-3xl border-pinkLightest text-white bg-pinkLightest py-1 px-3`}
      {...props}
    >
      {children}
    </button>
  )
}
