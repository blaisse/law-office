import React from 'react'
import { Link } from "gatsby"

const SubRouteLinks = () => {
  return (
    <>
      <Link
        className='menu-link'
        to="/">
        Strona główna
      </Link>

      <Link
        className='menu-link'
        to="/#offer">
        Oferta
      </Link>

      <Link
        className='menu-link'
        to="/#info">
        O mnie
      </Link>

      <Link
        className='menu-link menu-link-active'
        to="/blog">
        Blog
      </Link>

      <Link
        className='menu-link'
        to="/#contact">
        Kontakt
      </Link>
    </>
  )
}

export default SubRouteLinks
