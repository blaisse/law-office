import React from 'react';
import { scrollTo } from '../../../utils/navigation';
import InfoText from './InfoText';

import image from '/content/assets/carousel/updated-images/2LH08164.jpg'
import image1 from '/content/assets/carousel/updated-images/2LH08164-1x.jpg'
import image2 from '/content/assets/carousel/updated-images/2LH08164-2x.jpg'

const Info = () => {
  return (
    <section id='info' className='info'>
      <div className='section-container-info'>
        <h1 className='section-header'>O mnie</h1>

        <div className='info-wrapper'>
          <div className='info-container'>
            <InfoText text='Jestem absolwentką Wydziału Prawa i Administracji Uniwersytetu Szczecińskiego w Szczecinie. W 2015 r. obroniłam pracę magisterską pt. „odpowiedzialność członków zarządu w spółce z ograniczoną odpowiedzialnością”, pod opieką prof. dr hab. Zbigniewa Kuniewicza. W toku studiów brałam udział w programie Erasmus na Université Montesquieu Bordeaux 4 we Francji.' />
            <InfoText text='Swoje pierwsze kroki zawodowe stawiałam w trakcie studiów w Kancelarii Adwokackiej adwokata Dariusza Jana Babskiego. Następnie rozpoczęłam współpracę z Kancelarią Adwokacką adwokata Krzysztofa Tumielewicza, pod którego patronatem ukończyłam również aplikację adwokacką.' />
            <InfoText text='W trakcie odbytej aplikacji zdobywałam doświadczenie z szerokiego zakresu spraw, w tym między innymi spraw cywilnych: rodzinnych, spadkowych, odszkodowawczych, o rozliczenie konkubinatu, sporów przeciwko Narodowemu Funduszowi Zdrowia, a także spraw karnych, gospodarczych oraz administracyjnych.' />
            <InfoText text='Posługuję się biegle językiem angielskim a także językiem francuskim.' />
          </div>
          <div style={{ display: 'flex', flex: 0.5, justifyContent: 'center' }}>
            {/* <img className='offer-image' src={image} /> */}
            <img
              className='info-image'
              src={image}
              srcSet={`${image1} 900w, ${image2} 1800w, ${image} 3600w`}
              // sizes="100vw"
              alt="Agnieszka Gziut-Gasztka adwokat, Szczecin"
            />
          </div>
        </div>

        <div className='scroll-down' onClick={scrollTo('contact')}>
          <span className='scroll-down-highlight'></span>
        </div>
      </div>
    </section>
  );
}

export default Info;
