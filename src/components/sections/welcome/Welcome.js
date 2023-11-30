import React from 'react';
import ContactData from '../../common/ContactData';

import { Carousel } from 'react-responsive-carousel'
import { scrollTo } from '../../../utils/navigation';

// import logo_vertical from '/content/assets/AG-logo-1000x667px-20191129.png'
import logo_vertical from '/content/assets/AG-logo-header-mobile.png'

// import person_1 from '/content/assets/carousel/IMG_2829.jpg';
// import person_2 from '/content/assets/carousel/Kancelaria-male-11.jpg'
// import office_book from '/content/assets/carousel/Kancelaria-male-18.jpg'
// import office_person from '/content/assets/carousel/Kancelaria-male-1.jpg'
// import table from '/content/assets/carousel/Kancelaria-male-14.jpg'
// import office from '/content/assets/carousel/Kancelaria-male-20.jpg'

import main_image from '/content/assets/carousel/updated-images/2LH07879.jpg'
import main_image1 from '/content/assets/carousel/updated-images/2LH07879-1x.jpg'
import main_image2 from '/content/assets/carousel/updated-images/2LH07879-2x.jpg'
import main_image4 from '/content/assets/carousel/updated-images/2LH07879-4x.jpg'


const Welcome = () => {
  return (
    <section id='welcome' className='welcome first-section'>
      <div className='welcome-container'>
        <div className='welcome-text'>
          <div className='welcome-text-container'>
            <div className='welcome-logo-container'>
              <img className='welcome-logo' src={logo_vertical} alt='Agnieszka Gziut-Gasztka adwokat' />
            </div>
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
          <img
            className='welcome-image'
            src={main_image}
            srcSet={`${main_image1} 900w, ${main_image2} 1800w, ${main_image4} 3600w`}
            sizes="100vw"
            alt="Agnieszka Gziut-Gasztka adwokat, Szczecin"
          />
          {/* <img className='welcome-image' src={main_image} alt='Agnieszka Gziut adwokat, Szczecin' /> */}
          {/* <img className='welcome-image' src={office_person} alt='Agnieszka Gziut adwokat, Szczecin' /> */}

          {/* <img className='welcome-image' src={person_1} alt='Agnieszka Gziut adwokat, Szczecin' />
          <img className='welcome-image' src={office} alt='Agnieszka Gziut adwokat, Szczecin' />
          <img className='welcome-image' src={table} alt='Agnieszka Gziut adwokat, Szczecin' />
          <img className='welcome-image' src={person_2} alt='Agnieszka Gziut adwokat, Szczecin' />
          <img className='welcome-image' src={office_book} alt='Agnieszka Gziut adwokat, Szczecin' /> */}
        </Carousel>
        <div
          className='scroll-down'
          aria-label='Move to another page'
          onClick={scrollTo('offer')}
        >
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
