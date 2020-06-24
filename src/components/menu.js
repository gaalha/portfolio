import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Icon from './icon'
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import style from '../styles/menu.module.css'


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
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
                className={style.subMenuOverlay}
                role="button"
                tabIndex={0}
                onClick={onToggleSubMenu}
            />
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
    onChangeTheme,
    userTheme,
    defaultTheme
}) => {
    const isSubMenu = !(mainMenuItems >= mainMenu.length) && mainMenuItems > 0

    const THEME_TOGGLE = (userTheme || defaultTheme) === 'light'
        ? <FaMoon size="18" style={{ cursor: 'pointer' }} />
        : <FiSun size="18" style={{ cursor: 'pointer' }} />

    return (
        <>
            <div className={style.mobileMenuContainer}>
                <>
                    {isMobileMenuVisible ? (
                        <>
                            {/* eslint-enable */}
                            <ul className={style.mobileMenu}>
                                <MainMenu mainMenu={mainMenu} isMobileMenu />
                            </ul>
                            {/* eslint-disable */}
                            <div
                                onClick={onToggleMobileMenu}
                                className={style.mobileMenuOverlay}
                            />
                        </>
                    ) : null}
                    <button
                        className={style.menuTrigger}
                        style={{ color: 'inherit' }}
                        onClick={onToggleMobileMenu}
                        type="button"
                        aria-label="Menu"
                    >
                        <Icon style={{ cursor: 'pointer' }} size={24} d={menuIcon} />
                    </button>
                </>
            </div>
            <div className={style.desktopMenuContainer}>
                <ul className={style.menu}>
                    <MainMenu mainMenu={mainMenu} mainMenuItems={mainMenuItems} />
                    {isSubMenu ? (
                        <>
                            <button
                                className={style.subMenuTrigger}
                                onClick={onToggleSubMenu}
                                type="button"
                                aria-label="Menu"
                            >
                                {menuMoreText || 'Menu'}{' '}
                                <span className={style.menuArrow}>&#62;</span>
                            </button>
                            {isSubMenuVisible ? (
                                <ul className={style.subMenu}>
                                    <SubMenu
                                        mainMenu={mainMenu}
                                        mainMenuItems={mainMenuItems}
                                        onToggleSubMenu={onToggleSubMenu}
                                    />
                                </ul>
                            ) : null}
                        </>
                    ) : null}
                </ul>
            </div>
            <button
                className={style.themeToggle}
                onClick={onChangeTheme}
                type="button"
                aria-label="Theme toggle"
            >
                {THEME_TOGGLE}
            </button>
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
    onChangeTheme: PropTypes.func,
    userTheme: PropTypes.string,
    defaultTheme: PropTypes.string,
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
