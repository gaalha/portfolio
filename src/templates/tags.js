import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Post from '../components/post'
import Navigation from '../components/navigation'

const Tags = ({
  data,
  pageContext: { nextPagePath, previousPagePath, tag },
}) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data

  return (
    <>
      <SEO />
      <Layout>
        <InfoBanner>
          Posts with tag: <span>#{tag}</span>
        </InfoBanner>

        {posts.map(({ node }) => {
          const {
            id,
            excerpt: autoExcerpt,
            frontmatter: {
              title,
              date,
              path,
              author,
              coverImage,
              excerpt,
              tags,
            },
          } = node

          return (
            <Post
              key={id}
              title={title}
              date={date}
              path={path}
              author={author}
              tags={tags}
              coverImage={coverImage}
              excerpt={excerpt || autoExcerpt}
            />
          )
        })}

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

Tags.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
    tag: PropTypes.string,
  }),
}

const InfoBanner = styled.div`
  text-align: left;
  margin: 20px 0 40px;
  padding: 10px 20px;
  border-radius: 10px;
  width: calc(100% - 40px);
  background: #eaeaea;

  .dark & {
    background: #3b3d42;
  }

  span {
    font-weight: bold;
  }
`

export const postsQuery = graphql`query ($limit: Int!, $skip: Int!, $tag: String!) {
  allMarkdownRemark(
    filter: {frontmatter: {tags: {in: [$tag]}}}
    sort: {fields: [frontmatter___date], order: DESC}
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY")
          path
          author
          excerpt
          tags
          coverImage {
            childImageSharp {
              gatsbyImageData(width: 800, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`

export default Tags
