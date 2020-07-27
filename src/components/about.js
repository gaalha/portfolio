import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoTwitter, IoIosMail } from 'react-icons/io'
import * as CONST from '../utils/constants'

const AboutMe = ({avatar}) => (
  <Container>
    <Img fixed={avatar.childImageSharp.fixed} />

    <p>
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
        <FaLinkedin />
      </SocialIcon>
    </p>

    <p>
      Hi there! <span role="img" aria-label="Hi">👋🏼</span>
      <br />I'm Edgar Mejía a full-stack developer from El Salvador.
      <br />Currently I'm working in a Chatbot made with Python
      <span role="img" aria-label="Hi"> 🐍</span> + Flask
      <span role="img" aria-label="Hi"> 🌶</span>
      <br /> This site is make to show my frontend experience.
      <br />
    </p>
  </Container>
)

AboutMe.propTypes = {
  avatar: PropTypes.object,
}

export default AboutMe

const SocialIcon = styled.a`
  font-size: 25px;
`

const Container = styled.div`
  text-align: center;
`
