import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, lang, meta, keywords, title, coverImage, url, date }) => {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
          siteMetadata {
              title
              description
              author
              defaultImg
              url
          }
      }
    }
  `)

  const {
    title: siteTitle,
    description: siteDescription,
    author,
    defaultImg,
    baseUrl,
  } = data.site.siteMetadata
  const metaTitle = title || siteTitle
  const metaDescription = description || siteDescription
  const pageImage = `${baseUrl}/${coverImage?.childImageSharp?.fluid?.src || defaultImg}`
  const postUrl = `${baseUrl}/${url}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={title ? `${title} :: ${siteTitle}` : siteTitle}
      meta={[
        {
          property: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {/*
          property: `image`,
          content: pageImage,
        */},
        {
          property: `url`,
          content: postUrl,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:site_name`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: pageImage,
        },
        {
          property: `og:image:width`,
          content: `600`,
        },
        {
          property: `og:image:height`,
          content: `300`,
        },
        {
          property: `og:image:alt`,
          content: metaTitle,
        },
        {
          property: `og:type`,
          content: `article`,
        },
        {
          property: `og:url`,
          content: postUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: pageImage,
        },
        {
          name: `twitter:image:alt`,
          content: metaTitle,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `article:published_time`,
          content: date,
        },
        {
          name: `article:author`,
          content: author,
        },
        {
          name: `article:tag`,
          content: `IYF!`,
        },
        {
          name: `article:section`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0 ?
            {
              name: `keywords`,
              content: keywords.join(`, `),
            } :
            [],
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [
    'gatsby',
    'minimal',
    'starter',
    'blog',
    'theme',
    'dark',
    'light',
    'personal site',
  ],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  coverImage: PropTypes.object,
  url: PropTypes.string,
  date: PropTypes.string,
}

export default SEO
