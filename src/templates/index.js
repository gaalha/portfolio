import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FaStackOverflow } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoTwitter, IoIosMail } from 'react-icons/io'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Card from '../components/card'
import ExternalLink from '../components/external'

const Index = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const {
    post: { edges: posts }, avatar } = data

  return (
    <>
      <SEO />
      <Layout className>
        <div className="col">
          <div style={{textAlign: 'center'}}>
            <Img fixed={avatar.childImageSharp.fixed} />
            <p>
              <ExternalLink />
              <a
                style={{ fontSize: '25px' }}
                href="mailto:contact@edgarmejia.com"
              >
                <IoIosMail />&nbsp;
              </a>
              <a
                style={{ fontSize: '25px' }}
                href="https://twitter.com/edgar_mmejia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoTwitter />
              </a>
              <a
                style={{ fontSize: '25px' }}
                href="https://stackoverflow.com/users/9200447"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaStackOverflow />&nbsp;
              </a>
              <a
                style={{ fontSize: '25px' }}
                href="https://github.com/edgarMejia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </p>
            <p>
              Hi there! <span role="img" aria-label="Hi">👋🏼</span>
              <br />I'm Edgar Mejía a full-stack developer from El Salvador.
              <br />Currently I'm working in a Chatbot made with Python
              <span role="img" aria-label="Hi"> 🐍</span> + Flask
              <span role="img" aria-label="Hi"> 🌶</span>
              <br /> This site is make to show my frontend experience.
              <br />
            </p>
          </div>
        </div>

        <div className="row">
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

Index.propTypes = {
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
          excerpt
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            path
            author
            excerpt
            tags
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
    avatar: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Index
