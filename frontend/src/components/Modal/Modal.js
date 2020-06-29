import React from "react";
import styled from "styled-components";

const ModalComponent = ({ children }) => {
  return <Modal>{children}</Modal>;
};

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  transition: 0.5s;
`;

export default ModalComponent;
