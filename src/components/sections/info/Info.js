import React from 'react';
import { scrollTo } from '../../../utils/navigation';
import InfoText from './InfoText';

const Info = () => {
  return (
    <section id='info' className='info'>
      <div className='section-container-info'>
        <h1 className='section-header'>O mnie</h1>

        <div className='info-container'>
          <InfoText text='Jestem absolwentką Wydziału Prawa i Administracji Uniwersytetu Szczecińskiego w Szczecinie. W 2015 r. obroniłam pracę magisterską pt. „odpowiedzialność członków zarządu w spółce z ograniczoną odpowiedzialnością”, pod opieką prof. dr hab. Zbigniewa Kuniewicza. W toku studiów brałam udział w programie Erasmus na Université Montesquieu Bordeaux 4 we Francji.' />
          <InfoText text='Swoje pierwsze kroki zawodowe stawiałam w trakcie studiów w Kancelarii Adwokackiej adwokata Dariusza Jana Babskiego. Następnie rozpoczęłam współpracę z Kancelarią Adwokacką adwokata Krzysztofa Tumielewicza, pod którego patronatem ukończyłam również aplikację adwokacką.' />
          <InfoText text='W trakcie odbytej aplikacji zdobywałam doświadczenie z szerokiego zakresu spraw, w tym między innymi spraw cywilnych: rodzinnych, spadkowych, odszkodowawczych, o rozliczenie konkubinatu, sporów przeciwko Narodowemu Funduszowi Zdrowia, a także spraw karnych, gospodarczych oraz administracyjnych.' />
          <InfoText text='Posługuję się biegle językiem angielskim a także językiem francuskim.' />
        </div>

        <div className='scroll-down' onClick={scrollTo('articles')}><span style={{ borderColor: '#000' }} /></div>
      </div>
    </section>
  );
}

export default Info;
