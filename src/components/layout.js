import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import '../styles/layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          logo {
            src
            alt
          }
          logoText
          defaultTheme
          copyrights
          mainMenu {
            title
            path
          }
          showMenuItems
          menuMoreText
        }
      }
    }
  `)

  const {
    title,
    logo,
    logoText,
    defaultTheme,
    mainMenu,
    showMenuItems,
    menuMoreText,
    copyrights,
  } = data.site.siteMetadata

  return (
    <>
      <LayoutContainer>
        <Header
          siteTitle={title}
          siteLogo={logo}
          logoText={logoText}
          defaultTheme={defaultTheme}
          mainMenu={mainMenu}
          mainMenuItems={showMenuItems}
          menuMoreText={menuMoreText}
        />
        <Content className="mx-auto mt-4">
          {children}
        </Content>
        <Footer copyrights={copyrights} />
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  flex-grow: 1;
  padding: 20px;
`
