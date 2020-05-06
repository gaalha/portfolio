import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import { FiTerminal, FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ siteTitle }) => (
    <header style={{ background: `#00d6d6`, marginBottom: `1.45rem`, }}>
        <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, }}>
            <h1 style={{ margin: 0 }}>
                <Link to="/" style={{ color: `white`, textDecoration: `none`, textShadow: `2px 2px #098694` }}>
                    { siteTitle }
                </Link>
            </h1>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
