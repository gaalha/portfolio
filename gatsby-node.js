const { paginate } = require('gatsby-awesome-pagination')
const { forEach, uniq, filter, not, isNil, chain } = require('rambdax')
const path = require('path')
const { toKebabCase } = require('./src/helpers')

const pageTypeRegex = /src\/(.*?)\//
const getType = node => node.fileAbsolutePath.match(pageTypeRegex)[1]

const pageTemplate = path.resolve(`./src/templates/page.js`)
const tagsTemplate = path.resolve(`./src/templates/tags.js`)

exports.createPages = ({ actions, graphql, getNodes }) => {
  const { createPage, createRedirect } = actions
  const allNodes = getNodes()

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              tags
            }
            fileAbsolutePath
          }
        }
      }
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const { allMarkdownRemark: { edges: markdownPages }, site: { siteMetadata }, } = result.data

    const posts = allNodes.filter(
      ({ internal, fileAbsolutePath }) =>
        internal.type === 'MarkdownRemark' &&
        fileAbsolutePath.indexOf('/posts/') !== -1,
    )

    createRedirect({fromPath: `/home`, toPath: `/`})
    createRedirect({fromPath: `/index`, toPath: `/`})

    // Create each markdown page and post
    forEach(({ node }, index) => {
      createPage({
          path: node.frontmatter.path,
          component: pageTemplate,
          context: {
            type: getType(node)
          },
      })
    }, markdownPages)

    // Create tag pages
    const tags = filter(
      tag => not(isNil(tag)),
      uniq(chain(post => post.frontmatter.tags, posts)),
    )

    forEach(tag => {
      const postsWithTag = posts.filter(
        post => post.frontmatter.tags && post.frontmatter.tags.indexOf(tag) !== -1,
      )

      paginate({
        createPage,
        items: postsWithTag,
        component: tagsTemplate,
        itemsPerPage: siteMetadata.postsPerPage,
        pathPrefix: `/tag/${toKebabCase(tag)}`,
        context: {
            tag,
        },
      })
    }, tags)

    return {
      markdownPages,
      tags,
    }
  })
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      title: String!
      author: String
      date: Date! @dateformat
      path: String!
      tags: [String!]
      excerpt: String
      coverImage: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}
