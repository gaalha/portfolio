import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Navigation = ({ nextPath, previousPath, nextLabel, previousLabel }) =>
  previousPath || nextPath ? (
    <NavigationContainer>
      {previousPath && (
        <Button>
          <Link to={previousPath}>
            <IconPrev />
            <ButtonText>{previousLabel}</ButtonText>
          </Link>
        </Button>
      )}
      {nextPath && (
        <Button>
          <Link to={nextPath}>
            <ButtonText>{nextLabel}</ButtonText>
            <IconNext />
          </Link>
        </Button>
      )}
    </NavigationContainer>
  ) : null

Navigation.propTypes = {
  nextPath: PropTypes.string,
  previousPath: PropTypes.string,
  nextLabel: PropTypes.string,
  previousLabel: PropTypes.string,
}

export default Navigation

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1024px;
  max-width: 100%;
  margin: 80px 0 40px;
`

const Button = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  // background: var(--light-background-secondary);
  background: #eaeaea;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  max-width: 40%;
  cursor: pointer;
  appearance: none;

  .dark & {
    background: #3b3d42; // var(--dark-background-secondary);
  }

  & + & {
    margin-left: 10px;
  }

  a {
    display: flex;
    padding: 8px 16px;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

const ButtonText = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const IconPrev = styled.span`
  margin-right: 8px;
  &:before {content: '←';}
`

const IconNext = styled.span`
  margin-left: 8px;
  &:before {content: '→';}
`

