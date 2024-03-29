import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
  // const { wp, wpUser } = useStaticQuery(
  //   graphql`
  //     query {
  //       wp {
  //         generalSettings {
  //           title
  //           description
  //         }
  //       }

  //       # if there's more than one user this would need to be filtered to the main user
  //       wpUser {
  //         twitter: name
  //       }
  //     }
  //   `
  // )

  // const metaDescription = description || wp.generalSettings?.description
  // const defaultTitle = wp.generalSettings?.title
  const metaDescription = description
  const defaultTitle = 'Agnieszka Gziut-Gasztka'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: wpUser?.twitter || ``,
        // },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pl`,
  meta: [],
  description: `Kancelaria adwokacka, adwokat Agnieszka Gziut-Gasztka, Szczecin`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
