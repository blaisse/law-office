import React from 'react'
import { Link } from "gatsby"

import { scrollTo } from '../../../utils/navigation'
import Article from './Article'

const Articles = ({ articles }) => {
  return (
    <section id='articles' className='articles'>
      <div className='section-container-info'>
        <h2 className='section-header'>Blog</h2>

       
        <div className='info-container'>
          {articles.map(article => <Article key={article.uri} article={article} />)}
          {!articles.length ? <p className='additional-text'>Sekcja w przygotowaniu</p> : null}
        </div>
        {articles.length ?
          <div className='articles-blog'>
            <Link to='/blog'>
              Sprawdź wszystkie artykuły
            </Link>
          </div> : null
        }

        <div className='scroll-down' onClick={scrollTo('contact')}><span style={{ borderColor: '#000' }} /></div>
      </div>
    </section>
  )
}

export default Articles
