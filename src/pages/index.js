import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoTwitter, IoIosMail } from 'react-icons/io'
import { BsBookmarkFill } from 'react-icons/bs'
import * as CONST from '../utils/constants'

const Index = ({ data }) => {
  const { avatar } = data

  return (
    <>
      <SEO />
      <Layout>
        <div className='row'>
          <div className="col-6">
            <Img fluid={avatar.childImageSharp.fluid} />
          </div>
          <div className="col-6">
            <DescriptionContainer>
              <h1>Hi there! <span role="img" aria-label="Hi">👋🏼</span>
              <br/><br/>I'm <MyName>Edgar Mejía</MyName>, a full-stack developer from El Salvador <span role="img" aria-label="Flag"> 🇸🇻</span>.</h1>
            </DescriptionContainer>

            <br/>

            <SocialIconsContainer>
              <SocialIcon href={`mailto:${CONST.MY_EMAIL}`}>
                <IoIosMail />&nbsp;
              </SocialIcon>

              <SocialIcon href={CONST.URL_TWITTER} target="_blank" rel="noopener noreferrer">
                <IoLogoTwitter />
              </SocialIcon>

              <SocialIcon href={CONST.URL_STACKOVERFLOW} target="_blank" rel="noopener noreferrer">
                <FaStackOverflow />&nbsp;
              </SocialIcon>

              <SocialIcon href={CONST.URL_GITHUB} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />&nbsp;
              </SocialIcon>

              <SocialIcon href={CONST.URL_LINKEDIN} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />&nbsp;
              </SocialIcon>

              <SocialIcon href={CONST.URL_MAL} target="_blank" rel="noopener noreferrer" title="MyAnimeList">
                <BsBookmarkFill />&nbsp;
              </SocialIcon>
            </SocialIconsContainer>
          </div>
        </div>
      </Layout>
    </>
  )
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export const postsQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "front.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index

const SocialIcon = styled.a`
  font-size: 35px;

  &:hover {
    color: #BCA1F7;
  }
`

const DescriptionContainer = styled.div`
  text-align: justify;
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