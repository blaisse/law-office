import React from 'react'
import { Link } from 'react-scroll'
import { calculateOffset, header_height } from '../../utils/navigation'

const LandingPageLinks = () => {
  const handleMenuClick = () => {
    if (document.querySelector('.menu-open-icon').style.display === 'block') {
      document.querySelector('.header').style.display = 'none'
      document.querySelector('.menu-icon').style.display = 'block'
      document.querySelector('.menu-open-icon').style.display = 'none'
    }
  }

  const offset = calculateOffset()
  
  return (
    <>
      <Link 
        activeClass='menu-link-active'
        to='welcome'
        offset={offset}
        spy={true}
        smooth={true}
        onClick={handleMenuClick}
        className='menu-link'>
        <span>Strona główna</span>
      </Link>

      <Link 
        activeClass='menu-link-active'
        to='offer'
        offset={offset}
        spy={true}
        smooth={true}
        onClick={handleMenuClick}
        className='menu-link'>
        <span>Oferta</span>
      </Link>

      <Link 
        activeClass='menu-link-active'
        to='info'
        offset={offset}
        spy={true}
        smooth={true}
        onClick={handleMenuClick}
        className='menu-link'>
        <span>O mnie</span>
      </Link>

      <Link 
        activeClass='menu-link-active'
        to='articles'
        offset={offset}
        spy={true}
        smooth={true}
        onClick={handleMenuClick}
        className='menu-link'>
        <span>Blog</span>
      </Link>

      <Link 
        activeClass='menu-link-active'
        to='contact'
        offset={-header_height}
        spy={true}
        smooth={true}
        duration={505}
        onClick={handleMenuClick}
        className='menu-link'>
        <span>Kontakt</span>
      </Link>
    </>
  )
}

export default LandingPageLinks
