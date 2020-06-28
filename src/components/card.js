import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Card = ({
  title,
  subtitle,
  path,
  coverImage,
  author,
}) => (
  <Link to={path}>
    <Container className="mx-auto">
      <Image fluid={coverImage.childImageSharp.fluid} />

      <Content>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle} {author && <>— Written by {author}</>}
        </Subtitle>
      </Content>
    </Container>
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

const Image = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: blur(1.5px);
`

const Container = styled.div`
  width: 315px;
  height: 280px;
  border-radius: 14px;
  overflow: hidden;
  margin: 20px 10px;
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, .25), 0px 0px 29px 0px rgba(0, 0, 0, .22);
  cursor: pointer;
  transform-origin: center;
  transition: filter 200ms linear, transform 200ms linear;
  position: relative;

  &:hover {
    transform: scale(1.05) translateZ(0);
    transform-origin: center;
    transition: filter 200ms linear, transform 200ms linear;
    ${Image} {filter: blur(0px);}
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  padding: 30px 24px;
  background-color: #08070738;
`

const Title = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0 0 20px;
  width: 200px;
  text-shadow: 0 0 18px #0000005c, 0 0 10px #0000005c;
`

const Subtitle = styled.p`
  color: white;
  margin: 0 0 0 20px;
`
