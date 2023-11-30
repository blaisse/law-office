import React, { useState } from 'react';
import { scrollTo } from '../../../utils/navigation';
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import FamilyLaw from './text/FamilyLaw';
import CriminalLaw from './text/CriminalLaw';
import EconomicLaw from './text/EconomicLaw';
import AdministrativeLaw from './text/AdministrativeLaw';
import CivilLaw from './text/CivilLaw';
import Client from './text/Client';
import LabourLaw from './text/LabourLaw';
import image from '/content/assets/carousel/updated-images/2LH07945.jpg'
import image1 from '/content/assets/carousel/updated-images/2LH07945-1x.jpg'
import image2 from '/content/assets/carousel/updated-images/2LH07945-2x.jpg'

const offers = [
  {
    text: 'Prawo rodzinne',
    component: 'FamilyLaw',
  },
  {
    text: 'Prawo karne',
    component: 'CriminalLaw',
  },
  {
    text: 'Prawo gospodarcze',
    component: 'EconomicLaw',
  },
  {
    text: 'Prawo administracyjne',
    component: 'AdministrativeLaw',
  },
  {
    text: 'Prawo cywilne',
    component: 'CivilLaw',
  },
  {
    text: 'Współpraca z klientem obcojęzycznym',
    component: 'Client',
  },
  {
    text: 'Prawo pracy',
    component: 'LabourLaw',
  }
]

const mapOffers = {
  FamilyLaw,
  CriminalLaw,
  EconomicLaw,
  AdministrativeLaw,
  CivilLaw,
  Client,
  LabourLaw,
}

const Offer = () => {
  const [open, setOpen] = useState(false);
  const [ModalComponent, setModalComponent] = useState('FamilyLaw');

  const onOpenModal = component => () => {
    setModalComponent(component);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const Component = mapOffers[ModalComponent]

  return (
    <section id='offer' className='offer'>
      <div className='section-container-info'>
        <h1 className='section-header'>Oferta</h1>
        <Modal
          styles={{
            closeButton: {
              outline: 0
            },
            modalContainer: {
              borderRadius: '10px',
            },
          }}
          open={open}
          onClose={onCloseModal}
          center
        >
          <Component />
        </Modal>

        <div className='section-content'>
          <div className='offer-container'>
            <div style={{ display: 'flex', flex: 0.5, justifyContent: 'center' }}>
              <img
                className='info-image'
                src={image}
                srcSet={`${image1} 900w, ${image2} 1800w, ${image} 3600w`}
                sizes="100vw"
                alt="Agnieszka Gziut-Gasztka adwokat, Szczecin"
              />
            </div>
            <div className='offer-card-container'>
              {
                offers.map(offer => {
                  return (
                    <div 
                      className='offer-card'
                      key={offer.text}
                      onClick={onOpenModal(offer.component)}
                    >
                      <span>{offer.text}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className='scroll-down' onClick={scrollTo('info')}>
          <span className='scroll-down-highlight'></span>
        </div>
      </div>
    </section>
  );
}

export default Offer;
