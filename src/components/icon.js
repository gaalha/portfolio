import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Icon = props => {
  const { d, size = '1em', label, style: styles } = props

  return (
    <IconContainer style={styles} role="figure">
      <svg
        version="1.1"
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <IconPath d={d} />
      </svg>
      {label && <Label>{label}</Label>}
    </IconContainer>
  )
}

Icon.propTypes = {
  d: PropTypes.string,
  size: PropTypes.number,
  label: PropTypes.string,
  style: PropTypes.object,
}

export default Icon

const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const IconPath = styled.path`
  fill: currentColor;
`

const Label = styled.label`
  position: relative;
  display: inline-block;
  margin-left: 4px;
  line-height: 1;
`
