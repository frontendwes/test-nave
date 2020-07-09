import React from 'react'
import styled from 'styled-components'

const LARGE = 'large'
const MEDIUM = 'medium'
const SMALL = 'small'

const TextComponent = ({ ...props }) => {
  return <Text {...props}></Text>
}

const Text = styled.p`
  display: flex;
  align-items: center;
  color: black;
  line-height: ${(props) => props.lineHeight};
  margin-bottom: ${(props) => props.marginBottom};

  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case LARGE:
        return '24px'
      case MEDIUM:
        return '16px'
      case SMALL:
        return '14px'
      default:
    }
  }};

  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case LARGE:
        return '600'
      case MEDIUM:
        return '400'
      case SMALL:
        return '300'
      default:
    }
  }};
`

export default TextComponent
