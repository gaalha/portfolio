const postCssPresetEnv = require(`postcss-preset-env`)
const postCSSNested = require('postcss-nested')
const postCSSUrl = require('postcss-url')
const postCSSImports = require('postcss-import')
const cssnano = require('cssnano')
const postCSSMixins = require('postcss-mixins')

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

module.exports = {
  siteMetadata: {
    title: `EM!`,
    description: `This is my personal site.`,
    copyrights: '',
    author: `@edgarmejia`,
    defaultImg: '/default.JPG',
    baseUrl: 'https://edgarmejia.com',
    logo: {
      src: '',
      alt: '',
    },
    logoText: 'EM!',
    defaultTheme: '',
    postsPerPage: 6,
    showMenuItems: 3,
    menuMoreText: 'Show more',
    mainMenu: [
      // { title: 'Blog?', path: '/blog' },
      { title: 'Resources', path: '/resources' },
    ],
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          postCssPresetEnv({
            importFrom: 'src/styles/variables.css',
            stage: 1,
            preserve: true,
          }),
          cssnano({
            preset: 'default',
          }),
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: 'gatsby-remark-embed-video',
          options: {
            related: false,
            noIframeBorder: true,
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
            quality: 100,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: 'language-',
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `edgarmejia.com`,
        short_name: `edgarmejia`,
        start_url: `/`,
        background_color: `#343434`,
        theme_color: `#343434`,
        display: `minimal-ui`,
        icon: `src/images/avatar2.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
        minimum: 0.4,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-dark-mode`,
  ],
}
