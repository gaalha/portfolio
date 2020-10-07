import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Menu from './menu'

const Header = props => {
  const {
    siteLogo,
    logoText,
    mainMenu,
    mainMenuItems,
    menuMoreText,
  } = props

  const [isMobileMenuVisible, toggleMobileMenu] = useState(false)
  const [isSubMenuVisible, toggleSubMenu] = useState(false)
  const onToggleMobileMenu = () => toggleMobileMenu(!isMobileMenuVisible)
  const onToggleSubMenu = () => toggleSubMenu(!isSubMenuVisible)

  return (
    <>
      <HeaderContainer>
        <Inner>
          <Link to="/">
            <Logo>
              {siteLogo.src ? (
                <img src={siteLogo.src} alt={siteLogo.alt} />
              ) : (
                <>
                  <img
                    src={require('../../static/octocat.png')}
                    style={{ width: '25px', height: '25px' }}
                    alt="Hi 👋🏼"
                  />
                  &nbsp;
                  <Text>{logoText}</Text>
                </>
              )}
            </Logo>
          </Link>

          <Right>
            <Menu
              mainMenu={mainMenu}
              mainMenuItems={mainMenuItems}
              isMobileMenuVisible={isMobileMenuVisible}
              isSubMenuVisible={isSubMenuVisible}
              menuMoreText={menuMoreText}
              onToggleMobileMenu={onToggleMobileMenu}
              onToggleSubMenu={onToggleSubMenu}
            />
          </Right>
        </Inner>
      </HeaderContainer>
    </>
  )
}

Header.propTypes = {
  siteLogo: PropTypes.object,
  logoText: PropTypes.string,
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
  mainMenuItems: PropTypes.number,
  menuMoreText: PropTypes.string,
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px;

  a {
    text-decoration: none;
  }
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 90%;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;

  & img {
    height: 44px;
  }
`

const Text = styled.span`
  font-size: 18px;
`

const Right = styled.span`
  display : flex;
  position: relative;
`
