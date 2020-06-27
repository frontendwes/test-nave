import React from "react";
import { Logo, Button, Input } from "../../components";
import styled from "styled-components";

const Login = () => (
  <LoginBackground>
    <LoginForm>
      <Logo widthSize="235px" heightSize="60px" marginSize="auto" />
      <Input name="email" placeholder="E-mail" widthSize inputTitle="E-mail" />
      <Input name="senha" placeholder="Senha" widthSize inputTitle="Senha" />
      <Button primary widthSize="100%" marginSize="32px 0px 0px 0px">
        Entrar
      </Button>
    </LoginForm>
  </LoginBackground>
);

const LoginBackground = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

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
`;
export default Login;
