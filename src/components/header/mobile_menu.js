import React from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io'


const MobileMenu = () => {
  const openMenu = () => {
    document.querySelector('.menu-icon').style.display = 'none'
    document.querySelector('.menu-open-icon').style.display = 'block'
    document.querySelector('.header').style.display = 'flex'
  }

  const closeMenu = () => {
    document.querySelector('.menu-icon').style.display = 'block'
    document.querySelector('.menu-open-icon').style.display = 'none'
    document.querySelector('.header').style.display = 'none'
  }

  return (
    <>
      <div className='menu-icon' onClick={openMenu}>
        <IoMdMenu />
      </div>
      <div className='menu-open-icon' onClick={closeMenu}>
        <IoMdClose />
      </div>
    </>
  );
}

export default MobileMenu;
