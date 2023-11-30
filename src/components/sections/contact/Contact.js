import React from 'react';
import ContactData from '../../common/ContactData';
import ContactForm from './ContactForm';

import image from '/content/assets/carousel/updated-images/2LH07992.jpg'
import image1 from '/content/assets/carousel/updated-images/2LH07992-1x.jpg'
import image2 from '/content/assets/carousel/updated-images/2LH07992-2x.jpg'

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div className='section-container-info'>
        <h1 className='section-header'>Kontakt</h1>

        <div className='contact-form-container'>
          <div style={{ display: 'flex', flex: .6, flexDirection: 'column' }}>
            <div style={{display: 'flex', justifyContent: 'center' }}>
              <img
                className='info-image'
                src={image}
                srcSet={`${image1} 900w, ${image2} 1800w, ${image} 3600w`}
                alt="Agnieszka Gziut-Gasztka adwokat, Szczecin"
              />
            </div>
          </div>
          <div className='contact-info'>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <div className='contant-data-wrapper'>
                  <ContactData className='contact-data' />
                </div>
                <div style={{ display: 'flex', flex: 1 }}>
                  <iframe
                    title='office-map'
                    width="100%"
                    frameBorder="0"
                    className='google-map'
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_API_KEY}
                      &q=Kancelaria+Adwokacka+Adwokat+Agnieszka+Gziut`} allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className='contact-form-header'>Formularz kontaktowy</h1>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <ContactForm />
        </div>

            
        {/* <div className='contact-form-container'>
          <div style={{ display: 'flex', flex: .6, flexDirection: 'column' }}>
            <div style={{ display: 'flex', flex: .3, justifyContent: 'center' }}>
              <ContactData className='contact-data' />
            </div>
            <div style={{ display: 'flex', flex: .7 }}>
              <iframe
                title='office-map'
                width="100%"
                frameBorder="0"
                className='google-map'
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_API_KEY || 'AIzaSyBxiSCZRnaGfmFy3c0BjmpYxtBZzWlHrYI'}
                  &q=Kancelaria+Adwokacka+Adwokat+Agnieszka+Gziut`} allowFullScreen>
              </iframe>
            </div>
          </div>
          <div style={{ display: 'flex', flex: .4, justifyContent: 'center' }}>
            <ContactForm />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
