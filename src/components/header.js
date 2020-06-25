import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Menu from './menu'
import style from '../styles/header.module.css'

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
            <header className={style.header}>
                <div className={style.inner}>
                    <Link to="/">
                        <div className={style.logo}>
                            {siteLogo.src ? (
                                <img src={siteLogo.src} alt={siteLogo.alt} />
                            ) : (
                                    <>
                                        <span className={style.mark}>&#62;</span>
                                        <span className={style.text}>{logoText}</span>
                                        &nbsp;
                                        <img
                                            src={require('../../static/octocat.png')}
                                            style={{width: '25px', height: '25px'}}
                                        />
                                    </>
                                )}
                        </div>
                    </Link>
                    <span className={style.right}>
                        <Menu
                            mainMenu={mainMenu}
                            mainMenuItems={mainMenuItems}
                            isMobileMenuVisible={isMobileMenuVisible}
                            isSubMenuVisible={isSubMenuVisible}
                            menuMoreText={menuMoreText}
                            onToggleMobileMenu={onToggleMobileMenu}
                            onToggleSubMenu={onToggleSubMenu}
                        />
                    </span>
                </div>
            </header>
        </>
    )
}

Header.propTypes = {
    siteLogo: PropTypes.object,
    logoText: PropTypes.string,
    defaultTheme: PropTypes.string,
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
