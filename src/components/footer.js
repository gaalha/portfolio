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
              link="/source"
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
  min-height: 100px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;

  .dark & {
    background: linear-gradient(#fff0,#54233b26,#54233b85);
  }
`

const FooterContent = styled.div`
  margin: 0 auto;
  
`

const Item = styled.span`
  color: var(--dark-color-secondary);

  &:not(:first-of-type) {
    @media (min-width: 576px) {
      border-left: 1px solid;
      margin-left: 20px;
      padding-left: 20px;
    }

    @media (max-width: 576px) {
      display: block;
      text-align: center;
    }
  }
`
