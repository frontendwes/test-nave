import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const HeaderComponent = () => {
  return (
    <Header>
      <Logo src={logo} />
      <Logout>Sair</Logout>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  margin: 0px 32px;
`;

const Logo = styled.img`
  height: 35px;
`;

const Logout = styled.div`
  cursor: pointer;
`;

export default HeaderComponent;
