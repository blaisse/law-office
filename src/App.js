import React, { Component } from 'react';
import logo_transparent from './AG-logo-659x200px-20191129-transparent.png'
import person_1 from './carousel/IMG_2829.jpg';
import person_2 from './carousel/Kancelaria - małe-11.jpg'
import office_book from './carousel/Kancelaria - małe-18.jpg'
import office_person from './carousel/Kancelaria - małe-1.jpg'
import table from './carousel/Kancelaria - małe-14.jpg'
import office from './carousel/Kancelaria - małe-20.jpg'
import logo_vertical from './AG-logo-1000x667px-20191129.png'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import './App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Link, animateScroll as scroll, scroller } from 'react-scroll'
import ContactForm from './ContactForm';

const header_height = 90

const { innerWidth } = window
const offset = innerWidth > 1210 ? -header_height : 0

const data = {
  email: 'agnieszka.gziut@gmail.com',
  address: 'Pl. Brama Portowa 4 (III piętro), 70-225 Szczecin',
  phone: '530-822-277',
  open: '9:00 - 17:00'
}

const offers = [
  'Prawo rodzinne',
  'Prawo karne',
  'Prawo gospodarcze',
  'Prawo administracyjne',
  'Prawo cywilne',
  'Współpraca z klientem obcojęzycznym',
  'Stała obsługa prawna'
]


class App extends Component {
  componentDidMount() {
    const scrollToTop = document.querySelector('.scroll-to-top')

    window.onscroll = () => {
      if (window.scrollY > 150) {
        scrollToTop.classList.remove('scroll-to-top-invisible')
      } else {
        scrollToTop.classList.add('scroll-to-top-invisible')
      }
 
    }
  }

  scrollTo = element => () => {
    scroller.scrollTo(element, {
      duration: 500,
      smooth: true,
      offset
    })
  }

  handleMenuClick = () => {
    if (document.querySelector('.menu-open-icon').style.display === 'block') {
      document.querySelector('.header').style.display = 'none'
      document.querySelector('.menu-icon').style.display = 'block'
      document.querySelector('.menu-open-icon').style.display = 'none'
    }
  }

  openMenu = () => {
    document.querySelector('.menu-icon').style.display = 'none'
    document.querySelector('.menu-open-icon').style.display = 'block'
    document.querySelector('.header').style.display = 'flex'

  }

  closeMenu = () => {
    document.querySelector('.menu-icon').style.display = 'block'
    document.querySelector('.menu-open-icon').style.display = 'none'
    document.querySelector('.header').style.display = 'none'
  }

  render(){
    return (
      <div>
        <div className='menu-icon' onClick={this.openMenu}>
          <IoMdMenu />
        </div>
        <div className='menu-open-icon' onClick={this.closeMenu}>
          <IoMdClose />
        </div>

        <div className='header'>
          <div className='header-logo'>
            <img 
              className='logo-img'
              src={logo_transparent}
              onClick={scroll.scrollToTop}
              alt='Adwokat Agnieszka Gziut logo' />
          </div>
          <div className='header-menu'>
            <Link 
              activeClass='menu-link-active'
              to='welcome'
              // offset={-header_height}
              offset={offset}
              spy={true}
              smooth={true}
              onClick={this.handleMenuClick}
              className='header-link'>
              <span>Strona główna</span>
            </Link>

            <Link 
              activeClass='menu-link-active'
              to='offer'
              offset={offset}
              spy={true}
              smooth={true}
              onClick={this.handleMenuClick}
              className='header-link'>
              <span>Oferta</span>
            </Link>

            <Link 
              activeClass='menu-link-active'
              to='info'
              offset={offset}
              spy={true}
              smooth={true}
              onClick={this.handleMenuClick}
              className='header-link'>
              <span>O mnie</span>
            </Link>

            {/* <Link 
              activeClass='menu-link-active'
              to='faq'
              offset={offset}
              spy={true}
              smooth={true}
              onClick={this.handleMenuClick}
              className='header-link'>
              <span>FAQ</span>
            </Link> */}

            <Link 
              activeClass='menu-link-active'
              to='contact'
              offset={-header_height}
              spy={true}
              smooth={true}
              duration={505}
              onClick={this.handleMenuClick}
              className='header-link'>
              <span>Kontakt</span>
            </Link>
          </div>
          <div className='header-additional'>
            <span>{data.email}</span>
            <span>tel. {data.phone}</span>
            <span>{data.address}</span>
            <span>Czynne: {data.open}</span>
          </div>
        </div>

        <section id='welcome' className='welcome first-section'>
            <div className='welcome-container'>
              <div className='welcome-text'>
                <div className='welcome-text-container'>
                  <img className='welcome-logo' src={logo_vertical} alt='Agnieszka Gziut adwokat' />
                  <button onClick={this.scrollTo('contact')} className='contact-button'>Kontakt</button>
                  <div className='header-additional-welcome'>
                    <span>{data.email}</span>
                    <span>tel. {data.phone}</span>
                    <span>{data.address}</span> 
                    <span>Czynne: {data.open}</span>
                  </div>
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
                <img className='welcome-image' src={office_person} alt='Szczecin' />
                <img className='welcome-image' src={person_1} alt='Szczecin' />
                <img className='welcome-image' src={office} alt='Szczecin' />
                {/* <img className='welcome-image' src={szczecin} alt='Szczecin' /> */}
                <img className='welcome-image' src={table} alt='Szczecin' />
                <img className='welcome-image' src={person_2} alt='Szczecin' />
                <img className='welcome-image' src={office_book} alt='Szczecin' />
              </Carousel>
              {/* <img className='welcome-image' src={szczecin} alt='Szczecin' /> */}
              {/* <button onClick={this.scrollTo('contact')} className='contact-button'>Kontakt</button> */}
              <div className='scroll-down' onClick={this.scrollTo('offer')}><span></span></div>
            </div>
        </section>

        <section id='offer' className='offer'>
          <div className='section-container'>
            <h2 className='section-header'>Oferta</h2>

            <div className='section-content'>
              <div className='offer-card-container'>
                {
                  offers.map(offer => {
                    return (
                      <div className='offer-card' key={offer}>
                        <span className='offer-card-box' />
                        {offer}
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className='scroll-down' onClick={this.scrollTo('info')}><span style={{ borderColor: '#000' }}></span></div>
          </div>
        </section>

        <section id='info' className='info'>
          <div className='section-container-info'>
            <h2 className='section-header'>O mnie</h2>

            <div className='info-container'>
              <div className='info-p-container'>
                <span className='info-p-box' /> 
                <p className='info-p'>Jestem absolwentką Wydziału Prawa i Administracji Uniwersytetu Szczecińskiego w Szczecinie. W 2015 r. obroniłam pracę magisterską pt. „odpowiedzialność członków zarządu w spółce z ograniczoną odpowiedzialnością”, pod opieką prof. dr hab. Zbigniewa Kuniewicza. W toku studiów brałam udział w programie Erasmus na Université Montesquieu Bordeaux 4 we Francji.</p>
              </div>
              <div className='info-p-container'>
                <span className='info-p-box' /> 
                <p className='info-p'>Swoje pierwsze kroki zawodowe stawiałam w trakcie studiów w Kancelarii Adwokackiej adwokata Dariusza Jana Babskiego. Następnie rozpoczęłam współpracę z Kancelarią Adwokacką adwokata Krzysztofa Tumielewicza, pod którego patronatem ukończyłam również aplikację adwokacką.</p>
              </div>
              <div className='info-p-container'>
                <span className='info-p-box' /> 
                <p className='info-p'>W trakcie odbytej aplikacji zdobywałam doświadczenie z szerokiego zakresu spraw, w tym między innymi spraw cywilnych: rodzinnych, spadkowych, odszkodowawczych, o rozliczenie konkubinatu, sporów przeciwko Narodowemu Funduszowi Zdrowia, a także spraw karnych, gospodarczych oraz administracyjnych.</p>
              </div>
              <div className='info-p-container'>
                <span className='info-p-box' /> 
                <p className='info-p'>Posługuję się biegle językiem angielskim a także językiem francuskim.</p>
              </div>
            </div>

            <div className='scroll-down' onClick={this.scrollTo('contact')}><span style={{ borderColor: '#000' }} /></div>
          </div>
        </section>

        <section id='contact' className='contact'>
          <div className='section-container-info'>
          <h2 className='section-header'>Kontakt</h2>
              
          <div className='contact-form-container'>
            <div style={{ display: 'flex', flex: .6, flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flex: .3, justifyContent: 'center' }}>
                    <div className='contact-data'>
                      <span>{data.email}</span>
                      <span>tel. {data.phone}</span>
                      <span>{data.address}</span> 
                      <span>Czynne: {data.open}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flex: .7 }}>
                    <iframe
                      title='office-map'
                      width="100%"
                      frameBorder="0"
                      className='google-map'
                      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}
                        &q=Plac+Brama+Portowa+4,+71-899+Szczecin`} allowFullScreen>
                    </iframe>
                  </div>
            </div>
            <div style={{ display: 'flex', flex: .4, justifyContent: 'center' }}>
              <ContactForm submit={this.submit} />
            </div>
          </div>

          </div>
        </section>

        <div className='scroll-to-top scroll-to-top-invisible' onClick={scroll.scrollToTop}><span></span></div>
      </div>
    )
  }
}

export default App
