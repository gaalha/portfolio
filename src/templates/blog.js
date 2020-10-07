import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Card from '../components/card'

const Blog = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const { post: { edges: posts } } = data

  return (
    <>
      <SEO />
      <Layout>
        <div className="row">
          {posts.map(({ node }) => {
            const {
              id,
              frontmatter: {
                title,
                date,
                path,
                author,
                coverImage,
              },
            } = node

            return (
              <div key={id} className="col-xs-12 col-md-6 col-lg-4">
                <Card
                  path={path}
                  title={title}
                  coverImage={coverImage}
                  caption={title}
                  subtitle={`${date}, by ${author}`}
                />
              </div>
            )
          })}
        </div>

        <Navigation
          previousPath={previousPagePath}
          previousLabel="Newer posts"
          nextPath={nextPagePath}
          nextLabel="Older posts"
        />
      </Layout>
    </>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
}

export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    post: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            path
            author
            coverImage {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
