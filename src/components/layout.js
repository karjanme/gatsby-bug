import React from 'react'
import { container } from './common.module.css'
import { childContent } from './layout.module.css'
import Navigation from "./navigation/navigation"

const Layout = ({ children }) => {
  return (
    <>
      <div className={container}>
        <Navigation />
        <main className={childContent}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
