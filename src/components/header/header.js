import React from 'react';
import { scrollToTop } from '../../utils/navigation';
import ContactData from '../common/ContactData';
import Menu from './menu';
// import logo_transparent from '/content/assets/AG-logo-659x200px-20191129-transparent.png'
import logo from '/content/assets/AG-logo-header.png'

const Header = ({ Links }) => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img
          style={{ marginLeft: 10 }}
          role='button'
          tabIndex={0}
          aria-label='Scroll to top of the page'
          src={logo}
          onClick={scrollToTop}
          alt='Adwokat Agnieszka Gziut-Gasztka logo'
        />
      </div>
      <Menu Links={Links} />
      <ContactData className='header-additional' />
    </div>
  );
}

export default Header;
