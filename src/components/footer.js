import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ExternalLink from './external'

const Footer = ({ copyrights }) => (
  <FooterContainer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <FooterContent>
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
        </FooterContent>
      </>
    )}
  </FooterContainer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer

const FooterContainer = styled.footer`
  font-size: 1rem;
  background-image: linear-gradient(#fff0,#fd9dcc2b,#fd9dcc85);
  height: 70px;
  padding-top: 30px;
  display: flex;

  .dark & {
    background: linear-gradient(#fff0,#54233b26,#54233b85);
  }
`

const FooterContent = styled.div`
  margin: 0 auto;
`

const Item = styled.span`
  &:not(:first-of-type) {
    margin-left: 20px;
    padding-left: 20px;
    @media (min-width: 576px) {
      border-left: 1px solid;
    }
  }
`
