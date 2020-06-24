import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
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
        <BackgroundImage
            fluid={coverImage.childImageSharp.fluid}
            className="sexy-card"
            style={{
                elevation: `10`,
                width: `315px`,
                height: `280px`,
                borderRadius: `14px`,
                overflow: `hidden`,
                margin: `20px 10px`,
                boxShadow: `5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)`,
                cursor: `pointer`,
                transformOrigin: `center`,
                transition: `filter 200ms linear, transform 200ms linear`,
                position: `relative`,
            }}
        >
            <Content>
                <Title>{title}</Title>
                <Subtitle>
                    {subtitle} {author && <>— Written by {author}</>}
                </Subtitle>
            </Content>
        </BackgroundImage>
    </Link>
);

Card.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    path: PropTypes.string,
    coverImage: PropTypes.object,
    author: PropTypes.string,
}

export default Card;

const Content = styled.div`
    left: 0;
    position: absolute;
    top: 0;
    padding: 24px;
`;

const Logo = styled.img`
    width: 44px;
    height: 44px;
`;

const Caption = styled.label`
    color: #3c4560;
    font-size: 20px;
    font-weight: 600;
`;

const Subtitle = styled.p`
    color: white;
    text-shadow: 2px 2px 2px #000;
    margin-left: 20px;
`;

const Wrapper = styled.div`
    margin-top: 10px;
`;

const Container = styled.div`
    background: white;
    width: 315px;
    height: 280px;
    border-radius: 14px;
    margin: 20px 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    cursor: pointer;
`;

const Cover = styled.div`
    width: 100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
    transform-origin: center;
    trsnsform: scale(1) translateZ(0);
    transition:
    filter 200ms linear,
    transform 200ms linear;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    z-index: -1;
`;

const Title = styled.h1`
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-left: 20px;
    width: 200px;
    text-shadow: 2px 2px 2px #000;
`;
