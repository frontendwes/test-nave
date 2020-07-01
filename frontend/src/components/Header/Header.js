import React, { useContext } from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import { Context } from "../../Context/AuthContext";

const HeaderComponent = () => {
  const { handleLogout } = useContext(Context);
  return (
    <Header>
      <Logo />
      <Logout onClick={handleLogout}>Sair</Logout>
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

const Logout = styled.div`
  cursor: pointer;
`;

export default HeaderComponent;
