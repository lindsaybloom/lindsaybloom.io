import React from "react"

export const H1 = ({ children, className }: { children: React.ReactNode, className?: string }) => 
  <h1 className={`text-4xl leading-9 ${className}`}>{children}</h1>

export const H3 = ({ children, className }: { children: React.ReactNode, className?: string }) => 
  <h1 className={`text-2xl leading-9 ${className}`}>{children}</h1>

export const Text = ({ children, className }: { children: React.ReactNode, className?: string }) => 
  <p className={`text-lg ${className}`}>{children}</p>

  export const Span = ({ children, className }: { children: React.ReactNode, className?: string }) => 
  <span className={`text-lg ${className}`}>{children}</span>