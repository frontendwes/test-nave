import React from 'react'
import styled from 'styled-components'

import { CloseIcon, Text } from '../../components'

const AlertComponent = ({ title, message, changeAlert }) => {
  return (
    <Alert>
      <CloseIcon size='24' onClick={changeAlert} />
      <Text fontSize='large' fontWeight='large' marginBottom='32px'>
        {title}
      </Text>
      <Text fontWeight='small'>{message}</Text>
    </Alert>
  )
}

const Alert = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  flex-direction: column;
  width: 40%;
  background-color: #fff;
  padding: 32px;
  justify-content: space-between;
`

export default AlertComponent
