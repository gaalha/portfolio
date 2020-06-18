import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights }) => (
    <footer>
        {copyrights ? (
            <div
                dangerouslySetInnerHTML={{
                    __html: copyrights,
                }}
            />
        ) : (
                <>
                    <span className="footerCopyrights">
                        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
                    </span>
                    <span className="footerCopyrights">
                        Made by <a href="https://github.com/edgarMejia" target="_blank">Edgar Mejía</a>
                    </span>
                    <span className="footerCopyrights">
                    <a href="https://twitter.com/edgar_mmejia" target="_blank">Twitter</a>
                    &nbsp;•&nbsp;
                    <a href="https://github.com/edgarMejia" target="_blank">GitHub</a>
                    &nbsp;•&nbsp;
                    <a href="https://stackoverflow.com/users/9200447" target="_blank">StackOverflow</a>
                    </span>
                </>
            )}
    </footer>
)

Footer.propTypes = {
    copyrights: PropTypes.string,
}

export default Footer
