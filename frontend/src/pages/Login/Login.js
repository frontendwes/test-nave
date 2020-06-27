import React from "react";
import { Logo, Button } from "../../components";
import styled from "styled-components";

const Login = () => (
  <LoginBackground>
    <LoginForm>
      <Logo widthSize="235px" heightSize="60px" marginSize="auto" />
      <Button primary widthSize="100%">
        Entrar
      </Button>
      <Button primary widthSize="100%">
        Entrar
      </Button>
      <Button primary widthSize="100%">
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
`;
export default Login;
