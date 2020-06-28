import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled from 'styled-components'
import Icon from './icon'

const MainMenu = ({ mainMenu, mainMenuItems, isMobileMenu }) => {
  const menu = mainMenu.slice(0)
  !isMobileMenu && menu.splice(mainMenuItems)

  return menu.map((menuItem, index) => (
    <li key={index}>
      <Link to={menuItem.path}>{menuItem.title}</Link>
    </li>
  ))
}

const SubMenu = ({ mainMenu, mainMenuItems, onToggleSubMenu }) => {
  const menu = mainMenu.slice(0)
  menu.splice(0, mainMenuItems)

  const items = menu.map((menuItem, index) => (
    <li key={index}>
      <Link to={menuItem.path}>{menuItem.title}</Link>
    </li>
  ))

  return (
    <>
      {items}
      <SubMenuOverlay role="button" tabIndex={0} onClick={onToggleSubMenu} />
    </>
  )
}

const menuIcon = `M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z`

const Menu = ({
  mainMenu,
  mainMenuItems,
  menuMoreText,
  isMobileMenuVisible,
  isSubMenuVisible,
  onToggleMobileMenu,
  onToggleSubMenu,
}) => {
  const isSubMenu = !(mainMenuItems >= mainMenu.length) && mainMenuItems > 0

  return (
    <>
      <MobileMenuContainer>
        <>
          {isMobileMenuVisible ? (
            <>
              <MobileMenu>
                <MainMenu mainMenu={mainMenu} isMobileMenu />
              </MobileMenu>
              <SubMenuOverlay onClick={onToggleMobileMenu} />
            </>
          ) : null}
          <SubMenuTrigger onClick={onToggleMobileMenu} type="button" aria-label="Menu">
            <Icon style={{ cursor: 'pointer' }} size={24} d={menuIcon} />
          </SubMenuTrigger>
        </>
      </MobileMenuContainer>

      <DesktopMenuContainer>
        <DesktopMenu>
          <MainMenu mainMenu={mainMenu} mainMenuItems={mainMenuItems} />
          {isSubMenu ? (
            <>
              <SubMenuTrigger
                onClick={onToggleSubMenu}
                type="button"
                aria-label="Menu"
              >
                {menuMoreText || 'Menu'}{' '}
                <MenuArrow>&#62;</MenuArrow>
              </SubMenuTrigger>

              {isSubMenuVisible ? (
                <SubMenuContainer>
                  <SubMenu
                    mainMenu={mainMenu}
                    mainMenuItems={mainMenuItems}
                    onToggleSubMenu={onToggleSubMenu}
                  />
                </SubMenuContainer>
              ) : null}
            </>
          ) : null}
        </DesktopMenu>
      </DesktopMenuContainer>

      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <Toggler onClick={() => toggleTheme((theme === 'light') ? 'dark' : 'light')}>
            {theme === 'dark' ? (<Emoji isDark={true} />) : (<Emoji isDark={false} />)}
          </Toggler>
        )}
      </ThemeToggler>
    </>
  )
}

Menu.propTypes = {
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
  mainMenuItems: PropTypes.number,
  menuMoreText: PropTypes.string,
  isMobileMenuVisible: PropTypes.bool,
  isSubMenuVisible: PropTypes.bool,
  onToggleMobileMenu: PropTypes.func,
  onToggleSubMenu: PropTypes.func,
}

SubMenu.propTypes = {
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
  mainMenuItems: PropTypes.number,
  onToggleSubMenu: PropTypes.func,
}

export default Menu

export const MobileMenuContainer = styled.div`
  display: none;
  @media (max-width: 684px) {
    display: flex;
  }
`

export const DesktopMenuContainer = styled.div`
  display: block;
  @media (max-width: 684px) {
    display: none;
  }
`

export const MobileMenu = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  align-items: flex-start;
  background: #fafafa;
  margin: 0;
  padding: 0;
  text-align: left;
  list-style: none;
  border-radius: 5px;
  overflow: hidden;
  z-index: 99;

  .dark & {
    background: #191919;
  }

  & {
    li {
      margin: 0;
      white-space: nowrap;

      a {
        display: block;
        padding: 10px 15px;
      }
    }
  }
`

export const DesktopMenu = styled.ul`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  list-style: none;
  margin-right: 18px;

  li {
    margin: 0 12px;
  }

  &Trigger {
    margin-right: 10px;
    padding: 0;
    line-height: 0;
    background : none;
    color: inherit;
    border: none;
    box-shadow: none;
    outline: none;
    appearance: none;
    cursor: pointer;
  }

  a {
    display: inline-block;
    margin-right: 15px;
    text-decoration: none;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

export const SubMenuTrigger = styled.button`
  background: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: none;
  box-shadow: none;
  margin: 0 12px;
  padding: 0;
  cursor: pointer;
  outline: none;
  appearance: none;
`

export const SubMenuContainer = styled.ul`
  position: absolute;
  max-width: 300px;
  background: #fafafa;
  box-shadow: 0 8px 20px rgba(0, 0, 0, .12);
  margin: 0;
  padding: 5px;
  list-style: none;
  border-radius: 5px;
  top: 35px;
  right: 70px;
  overflow: hidden;
  z-index: 99;

  .dark & {
    // background: var(--dark-background-secondary);
    background: #191919;
  }

  li {
    text-align: left;
    margin: 0;
    white-space: nowrap;

    a {
      padding: 10px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 3px;
      cursor: pointer;

      :global .dark :local & {
        background: rgba(0, 0, 0, 0.15);
      }
    }
  }
`

export const MenuArrow = styled.span`
  display: inline-block;
  font-family: 'Inter UI';
  margin-left: 5px;
  transform: rotate(90deg);
`

export const SubMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`

export const Toggler = styled.div`
  margin: 3px 4px 0 4px;
  cursor: pointer;
`

export const Emoji = styled.h2`
  padding: 0;
  margin: -5px 0 2px 0;
  text-shadow: ${props => (
    props.isDark ? `rgba(253, 252, 252, 0.51) 0px 0px 3px;` :
      `rgba(0, 0, 0, 0.51) 0px 0px 9px;`
  )}
  &:before {
    content: ${props => (props.isDark ? `'🌞';` : `'🌚';`)};
  }
`
