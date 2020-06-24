import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Card from '../components/card'

const Index = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
    const {
        allMarkdownRemark: { edges: posts },
    } = data

    return (
        <>
            <SEO />
            <Layout>
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
                                subtitle={`${date} — by ${author}`}
                            />
                        </div>
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

Index.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.shape({
        nextPagePath: PropTypes.string,
        previousPagePath: PropTypes.string,
    }),
}

export const postsQuery = graphql`
    query($limit: Int!, $skip: Int!) {
        allMarkdownRemark(
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
                        date(formatString: "DD MMMM YYYY")
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
    }
`

export default Index
