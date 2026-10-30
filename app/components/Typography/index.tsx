import React from "react"

type TypographyProps = { children: React.ReactNode; className?: string }

export const Hero = ({ children, className = "" }: TypographyProps) => (
  <h1 className={`t-hero ${className}`}>{children}</h1>
)

export const H1 = ({ children, className = "" }: TypographyProps) => (
  <h2 className={`t-headline ${className}`}>{children}</h2>
)

export const H3 = ({ children, className = "" }: TypographyProps) => (
  <h3 className={`t-callout ${className}`}>{children}</h3>
)

export const Subhead = ({ children, className = "" }: TypographyProps) => (
  <p className={`t-subhead ${className}`}>{children}</p>
)

export const Text = ({ children, className = "" }: TypographyProps) => (
  <p className={`t-body ${className}`}>{children}</p>
)

export const Span = ({ children, className = "" }: TypographyProps) => (
  <span className={`t-body ${className}`}>{children}</span>
)
