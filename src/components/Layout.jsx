import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Panel } from './Panel'

export const Layout = ({children}) => {
  return (
    <>
    <div className="layout">
      <header>
        <Panel/>
        <Navbar/>
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    </>
    )
}
