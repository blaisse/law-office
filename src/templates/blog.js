import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from '../components/header/header'
import MobileMenu from '../components/header/mobile_menu'
import Article from '../components/sections/articles/Article'
import MobileLogo from '../components/sections/welcome/MobileLogo'
import SubRouteLinks from '../components/header/SubRouteLinks'


const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data && data.allWpPost ? data.allWpPost.nodes : []

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <div>
      <SEO title="All posts" />
      <MobileMenu />        
      <Header Links={SubRouteLinks} />
      <MobileLogo />

      <section id='articles' className='articles first-section'>
        <div className='section-container-info'>
          <h2 className='section-header'>Blog</h2>
          <div className='info-container'>
            <div className='blog-archive'>
              {posts.map(post => <Article article={post} />)}

              <div className='blog-archive-pagination'>
                <div>
                  {previousPagePath && (
                    <>
                      <Link to={previousPagePath}>Poprzednia strona</Link>
                    </>
                  )}
                </div>
                <div>
                  {nextPagePath && <Link to={nextPagePath}>Następna strona</Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogIndex

export const query = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
