import React from 'react';
import ContactData from '../../common/ContactData';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div className='section-container-info'>
        <h2 className='section-header'>Kontakt</h2>
            
        <div className='contact-form-container'>
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
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_API_KEY}
                  &q=Plac+Brama+Portowa+4,+71-899+Szczecin`} allowFullScreen>
              </iframe>
            </div>
          </div>
          <div style={{ display: 'flex', flex: .4, justifyContent: 'center' }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
