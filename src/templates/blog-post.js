import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import SEO from "../components/seo"
import MobileMenu from '../components/header/mobile_menu'
import Header from '../components/header/header'
import MobileLogo from '../components/sections/welcome/MobileLogo'
import SubRouteLinks from '../components/header/SubRouteLinks'

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  // const featuredImage = {
  //   fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
  //   alt: post.featuredImage?.node?.alt || ``,
  // }

  return (
    <div>
      {/* <SEO title={post.title} description={post.excerpt} />
      <MobileMenu />        
      <Header Links={SubRouteLinks} />
      <MobileLogo />

      <section id='articles' className='articles first-section'>
        <div className='section-container-info'>
          <h2 className='section-header' itemProp="headline">{post.title}</h2>
          <div className='info-container'>
            <article
              className='blog'
              itemScope
              itemType="http://schema.org/Article"
            >
              {featuredImage?.fluid && (
                <Image
                  fluid={featuredImage.fluid}
                  alt={featuredImage.alt}
                  style={{ marginBottom: 50, maxHeight: 350 }}
                />
              )}
              {!!post.content && (
                <section itemProp="articleBody">{parse(post.content)}</section>
              )}
            </article>
            <nav className="blog-post-nav">
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.uri} rel="prev">
                      ← {parse(previous.title)}
                    </Link>
                  )}
                </li>

                <li>
                  {next && (
                    <Link to={next.uri} rel="next">
                      {parse(next.title)} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostById(
//     # these variables are passed in via createPage.pageContext in gatsby-node.js
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     # selecting the current post by id
//     post: wpPost(id: { eq: $id }) {
//       id
//       excerpt
//       content
//       title
//       date(formatString: "MMMM DD, YYYY")

//       featuredImage {
//         node {
//           altText
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1000, quality: 100) {
//                 ...GatsbyImageSharpFluid_tracedSVG
//               }
//             }
//           }
//         }
//       }
//     }

//     # this gets us the previous post by id (if it exists)
//     previous: wpPost(id: { eq: $previousPostId }) {
//       uri
//       title
//     }

//     # this gets us the next post by id (if it exists)
//     next: wpPost(id: { eq: $nextPostId }) {
//       uri
//       title
//     }
//   }
// `
