import React from 'react';
import { scrollTo } from '../../../utils/navigation';

const Offer = () => {
  const offers = [
    'Prawo rodzinne',
    'Prawo karne',
    'Prawo gospodarcze',
    'Prawo administracyjne',
    'Prawo cywilne',
    'Współpraca z klientem obcojęzycznym',
    'Stała obsługa prawna'
  ]

  return (
    <section id='offer' className='offer'>
      <div className='section-container'>
        <h2 className='section-header'>Oferta</h2>

        <div className='section-content'>
          <div className='offer-card-container'>
            {
              offers.map(offer => {
                return (
                  <div className='offer-card' key={offer}>
                    {/* <span className='offer-card-box' /> */}
                    <span>{offer}</span>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className='scroll-down' onClick={scrollTo('info')}><span style={{ borderColor: '#000' }}></span></div>
      </div>
    </section>
  );
}

export default Offer;
