import React from 'react'
import parse from "html-react-parser"
import { Link } from 'gatsby'


const Article = ({ article }) => {
  const regex = /<a class="more-link" href=".*">Continue reading <span class="screen-reader-text">.*<\/span><\/a>/g;
  const excerpt = article.excerpt.replace(regex, '')

  return (
    <article 
      key={article.uri}
      className='article'
      itemScope
      itemType="http://schema.org/Article"
    >
      <Link to={article.uri} itemProp="url">
        <h2 itemProp="headline">{parse(article.title)}</h2>
      </Link>
      <p itemProp="description">{parse(excerpt)}</p>
      <Link to={article.uri} itemProp="url" className='read-more'>
        <p itemProp="headline">Czytaj dalej</p>
      </Link>
    </article>
  )
}

export default Article
