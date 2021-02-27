import React from 'react';
import ContactData from '../../common/ContactData';

import { Carousel } from 'react-responsive-carousel'
import { scrollTo } from '../../../utils/navigation';

import logo_vertical from '/content/assets/AG-logo-1000x667px-20191129.png'

import person_1 from '/content/assets/carousel/IMG_2829.jpg';
import person_2 from '/content/assets/carousel/Kancelaria-male-11.jpg'
import office_book from '/content/assets/carousel/Kancelaria-male-18.jpg'
import office_person from '/content/assets/carousel/Kancelaria-male-1.jpg'
import table from '/content/assets/carousel/Kancelaria-male-14.jpg'
import office from '/content/assets/carousel/Kancelaria-male-20.jpg'


const Welcome = () => {
  return (
    <section id='welcome' className='welcome first-section'>
      <div className='welcome-container'>
        <div className='welcome-text'>
          <div className='welcome-text-container'>
            <img className='welcome-logo' src={logo_vertical} alt='Agnieszka Gziut adwokat' />
            <button onClick={scrollTo('contact')} className='contact-button'>Kontakt</button>
            <ContactData className='header-additional-welcome' />
          </div>
        </div>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <img className='welcome-image' src={office_person} alt='Agnieszka Gziut adwokat, Szczecin' />
          <img className='welcome-image' src={person_1} alt='Agnieszka Gziut adwokat, Szczecin' />
          <img className='welcome-image' src={office} alt='Agnieszka Gziut adwokat, Szczecin' />
          <img className='welcome-image' src={table} alt='Agnieszka Gziut adwokat, Szczecin' />
          <img className='welcome-image' src={person_2} alt='Agnieszka Gziut adwokat, Szczecin' />
          <img className='welcome-image' src={office_book} alt='Agnieszka Gziut adwokat, Szczecin' />
        </Carousel>
        <div className='scroll-down' onClick={scrollTo('offer')}><span></span></div>
      </div>
    </section>
  );
}

export default Welcome;
