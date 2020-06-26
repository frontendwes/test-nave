import React from "react";
import styled from "styled-components";

const BackgroundComponent = ({ children }) => {
  return <Background>{children}</Background>;
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export default BackgroundComponent;
