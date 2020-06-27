import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Card = ({
  title,
  subtitle,
  path,
  coverImage,
  author
}) => (
  <Link to={path}>
    <BackgroundImage fluid={coverImage.childImageSharp.fluid} className="sexy-card mx-auto">
      <Content>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle} {author && <>— Written by {author}</>}
        </Subtitle>
      </Content>
    </BackgroundImage>
  </Link>
)

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  author: PropTypes.string,
}

export default Card

const Content = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  padding: 24px;
`

const Title = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-left: 20px;
  width: 200px;
  text-shadow: 2px 2px 2px #000;
`

const Subtitle = styled.p`
  color: white;
  text-shadow: 2px 2px 2px #000;
  margin-left: 20px;
`

