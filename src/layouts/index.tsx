import React, { ReactNode } from "react"
import "./index.css"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
