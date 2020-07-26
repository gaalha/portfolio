import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ExternalLink from './external'

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
        <Item>
          &copy; { new Date().getFullYear() }, Built with&nbsp;
          <ExternalLink link="https://www.gatsbyjs.org" text="Gatsby" />
        </Item>
        <Item>
          <ExternalLink
            link="https://github.com/edgarMejia/edgarmejia.com"
            text="Source of this page"
          />
        </Item>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer

const Item = styled.span`
  &:not(:first-of-type) {
    margin-left: 20px;
    padding-left: 20px;
    @media (min-width: 576px) {
      border-left: 1px solid;
    }
  }
`
