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
          &copy; {new Date().getFullYear()}, Built with
          <ExternalLink link="https://www.gatsbyjs.org" text="Gatsby" />
        </Item>
        <Item>
          Made by&nbsp;
          <ExternalLink link="https://github.com/edgarMejia" text="Edgar Mejía" />
        </Item>
        <Item>
          <ExternalLink link="https://twitter.com/edgar_mmejia" text="Twitter" />
          <span> • </span>
          <ExternalLink link="https://github.com/edgarMejia" text="GitHub" />
          <span> • </span>
          <ExternalLink link="https://stackoverflow.com/users/9200447" text="StackOverflow" />
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
