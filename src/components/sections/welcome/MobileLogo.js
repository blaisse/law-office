import React from 'react'
import { Link } from 'gatsby'
import logo_vertical from '/content/assets/AG-logo-1000x667px-20191129.png'


const MobileLogo = () => {
  return (
    <div className='mobile-logo'>
      <Link
        to='/'
      >
        <img className='welcome-logo' src={logo_vertical} alt='Agnieszka Gziut-Gasztka adwokat' />
      </Link>
    </div>
  )
}

export default MobileLogo
