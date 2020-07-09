import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Context } from '../../Context/AuthContext'

import { Logo, Button, Input } from '../../components'

const Login = () => {
  const { handleLogin } = useContext(Context)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <LoginBackground>
      <LoginForm>
        <Logo widthSize='235px' heightSize='60px' marginSize='auto' />
        <Input
          name='email'
          type='email'
          placeholder='E-mail'
          widthSize
          inputTitle='E-mail'
          onChange={handleInputChange}
        />
        <Input
          name='password'
          type='password'
          placeholder='Senha'
          widthSize
          inputTitle='Senha'
          onChange={handleInputChange}
        />
        <Button
          primary
          widthSize='100%'
          marginSize='32px 0px 0px 0px'
          onClick={() => handleLogin(formData)}
        >
          Entrar
        </Button>
      </LoginForm>
    </LoginBackground>
  )
}

const LoginBackground = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 448px;
  height: 408px;
  border: 1px solid #212121;
  box-sizing: border-box;
  padding: 40px 32px;
  margin: 32px;
`

export default Login
