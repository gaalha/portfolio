import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
          &copy; {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
        </Item>
        <Item>
          Made by <a href="https://github.com/edgarMejia" target="_blank" rel="noopener noreferrer">Edgar Mejía</a>
        </Item>
        <Item>
          <SubItem href="https://twitter.com/edgar_mmejia" target="_blank" rel="noopener noreferrer">Twitter</SubItem>
          <SubItem href="https://github.com/edgarMejia" target="_blank" rel="noopener noreferrer">GitHub</SubItem>
          <SubItem href="https://stackoverflow.com/users/9200447" target="_blank" rel="noopener noreferrer">StackOverflow</SubItem>
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

const SubItem = styled.a`
  &:not(:last-child):after {
    content: ' • '
  }
`
