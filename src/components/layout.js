/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <center>
                <div style={{ margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem`, }}>
                    <main>{children}</main>
                    <br/>
                    <footer>
                        &copy; {new Date().getFullYear()}, Built with {` `}
                        <a target="_blank" href="https://www.gatsbyjs.org/">Gatsby</a>
                        &nbsp;-&nbsp;
                        <a target="_blank" href="https://github.com/edgarMejia/edgarmejia.github.io">Page repo</a>
                    </footer>
                </div>
            </center>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
