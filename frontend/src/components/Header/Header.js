import React, { useContext } from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import { Context } from "../../Context/AuthContext";

const HeaderComponent = () => {
  const { handleLogout } = useContext(Context);
  return (
    <Header>
      <HeaderContent>
        <Logo />
        <Logout onClick={handleLogout}>Sair</Logout>
      </HeaderContent>
    </Header>
  );
};

const Header = styled.div`
  margin: 2vw;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logout = styled.div`
  cursor: pointer;
`;

export default HeaderComponent;
