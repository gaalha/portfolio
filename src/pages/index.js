import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoTwitter, IoIosMail } from 'react-icons/io'
import { BsBookmarkFill } from 'react-icons/bs'
import * as CONST from '../utils/constants'

const Index = ({ data }) => {
  const { frontSmall, frontLarge } = data
  const SOCIAL = [
    { url: `mailto:${CONST.MY_EMAIL}`, icon: IoIosMail, title: 'Send me an email' },
    { url: CONST.URL_TWITTER, icon: IoLogoTwitter, title: 'Twitter' },
    { url: CONST.URL_STACKOVERFLOW, icon: FaStackOverflow, title: 'Stackoverflow' },
    { url: CONST.URL_GITHUB, icon: AiFillGithub, title: 'Github' },
    { url: CONST.URL_LINKEDIN, icon: FaLinkedin, title: 'LinkedIn' },
    // { url: CONST.URL_MAL, icon: BsBookmarkFill, title: 'MyAnimeList' },
  ]

  return <>
    <SEO />
    <Layout>
      <div className='row align-items-center mt-4'>
        <div className="col-xs-12 col-md-6">
          <GatsbyImage
            image={frontLarge.childImageSharp.gatsbyImageData}
            alt="Hi!"
            className="d-none d-lg-block center-this" />
          <GatsbyImage
            image={frontSmall.childImageSharp.gatsbyImageData}
            alt="Hi!"
            className="d-block d-lg-none center-this" />
        </div>

        <DescriptionSection className="col-xs-12 col-md-6">
          <DescriptionContainer>
            <h1>Hi there! <span role="img" aria-label="Hi">👋🏼</span>
              <br />I'm <MyName>Edgar Mejía</MyName>, a <del>full-stack</del> mobile developer from El Salvador <span role="img" aria-label="Flag"> 🇸🇻</span>.</h1>
          </DescriptionContainer>

          <br />

          <SocialIconsContainer>
            {SOCIAL.map((social, _) => (
              <SocialIcon target="_blank" href={social.url} rel="noopener noreferrer">
                <social.icon />&nbsp;
              </SocialIcon>
            ))}
          </SocialIconsContainer>
        </DescriptionSection>
      </div>
    </Layout>
  </>
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export const postsQuery = graphql`{
  frontLarge: file(relativePath: {eq: "front.jpeg"}) {
    childImageSharp {
      gatsbyImageData(height: 600, layout: CONSTRAINED)
    }
  }
  frontSmall: file(relativePath: {eq: "front.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
}
`

export default Index

const SocialIcon = styled.a`
  font-size: 35px;
  color: var(--dark-color-secondary);

  &:hover {
    color: #BCA1F7;
  }
`

const DescriptionContainer = styled.div`
  text-align: left;
`

const SocialIconsContainer = styled.div`
  text-align: center;
`
const MyName = styled.span`
  font-weight: bold;
  background: linear-gradient(92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`

const DescriptionSection = styled.div``