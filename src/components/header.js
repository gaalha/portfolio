import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Menu from './menu'
import octocat from '../../static/octocat.png'

const Header = ({logoText, mainMenu, mainMenuItems, menuMoreText,}) => {
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false)
  const [isSubMenuVisible, toggleSubMenu] = useState(false)
  const onToggleMobileMenu = () => toggleMobileMenu(!isMobileMenuVisible)
  const onToggleSubMenu = () => toggleSubMenu(!isSubMenuVisible)

  return (
    <>
      <HeaderContainer>
        <div className='container'>
          <Inner>
            <LogoContainer className='logo-container'>
              <Link to="/" className='home-link' activeClassName="active">
                <LogoImg src={octocat} alt="Hi 👋🏼" className='logo' />
                <LogoText className='logo-text'>{logoText}</LogoText>
              </Link>
            </LogoContainer>

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
        </div>
      </HeaderContainer>
    </>
  )
}

Header.propTypes = {
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
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  width: 100%;
  height: 4rem;
  z-index: 2;

  backdrop-filter: var(--header-blur-chrome);
  -webkit-backdrop-filter: var(--header-blur-webkit);
  transition: background-color 0.2s, color 0.2s;

  @-moz-document url-prefix() {
    background-color: var(--light-header-background-moz);

    .dark & {
      background-color: var(--dark-header-background-moz);
    }
  }
`

const Inner = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;

  & a.active {
    color: inherit;
  }

  &:hover .logo, .active .logo {
    transform: translate(-10px, 0);
  }

  &:hover .logo-text, .active .logo-text {
    opacity: 1;
    transform: translate(-35px, 0);
  }
`

const LogoText = styled.span`
  font-size: 25px;
  opacity: 0;
  user-select: none;
  pointer-events: none;
  cursor: default;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:active {
    transform: translate(0px, 10px);
  }
`

const LogoImg = styled.img`
  display: inline;
  height: 25px;
  transform: translate(0, 0);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const Right = styled.span`
  display: flex;
  position: relative;
`