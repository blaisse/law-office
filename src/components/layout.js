import React from "react"
import MobileMenu from './header/mobile_menu'
import Header from './header/header'
import SubRouteLinks from './header/SubRouteLinks'

const Layout = ({ children }) => {
  return (
    <div >
      <MobileMenu />        
      <Header Links={SubRouteLinks} />

      <main>{children}</main>

      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer> */}
    </div>
  )
}

export default Layout
