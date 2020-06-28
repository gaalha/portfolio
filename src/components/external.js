import React from 'react'
import PropTypes from 'prop-types'

const ExternalLink = ({text, link}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">{text}</a>
)

ExternalLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
}

export default ExternalLink
