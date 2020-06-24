import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Card = ({
    title,
    subtitle,
    path,
    coverImage,
    author
}) => (
    <Link to={path}>
        <Container className="sexy-card" style={{ elevation: 10 }}>
            <Cover>
                {coverImage && (
                    <Img
                        fluid={coverImage.childImageSharp.fluid}
                    />
                )}
                {/*<Title>{title}</Title>*/}
            </Cover>
            <Content>
                {/*<Logo src={props.logo} />*/}
                <Wrapper>
                    <Caption>{title}</Caption>
                    <Subtitle>
                        {subtitle} {author && <>— Written by {author}</>}
                    </Subtitle>
                </Wrapper>
            </Content>
        </Container>
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
    padding-left: 20px;
    flex-direction: row;
    align-items: center;
    height: 80px;
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
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    margin-top: 4px;
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

const Title = styled.p`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px;
    z-index: 5;
`;
