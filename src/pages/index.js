import React from "react"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { scrollToTop } from '../utils/navigation';

import Header from '../components/header/header';
import MobileMenu from '../components/header/mobile_menu';
import Info from '../components/sections/info/Info';
import Offer from '../components/sections/offer/Offer';
import Welcome from '../components/sections/welcome/Welcome';
import Contact from '../components/sections/contact/Contact';

import { useStaticQuery, graphql } from "gatsby"
import Articles from '../components/sections/articles/Articles';
import LandingPageLinks from '../components/header/LandingPageLinks';



const Layout = ({ data }) => {
  return (
    <div>
      <MobileMenu />        
      <Header Links={LandingPageLinks} />

      <Welcome />
      <Offer />
      <Info />
      <Articles articles={data.allWpPost.nodes} />
      <Contact />

      <div className='scroll-to-top scroll-to-top-invisible' onClick={scrollToTop}><span></span></div>
    </div>
  )
}

export default Layout

export const query = graphql`
  query MyQuery {
    allWpPost(limit: 3, sort: {fields: date, order: DESC}) {
      nodes {
        id
        title
        excerpt
        uri
        date
        featuredImage {
          node {
            id
            sourceUrl
          }
        }
      }
    }
  }
`

{/* <div className="global-wrapper">
<footer>
  © {new Date().getFullYear()}, Built with
  {` `}
  <a href="https://www.gatsbyjs.com">Gatsby</a>
  {` `}
  And <a href="https://wordpress.org/">WordPress</a>
</footer>
</div> */}
