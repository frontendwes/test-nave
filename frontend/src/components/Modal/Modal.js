import React from "react";
import styled from "styled-components";

const ModalComponent = ({ children }) => {
  return <Modal>{children}</Modal>;
};

const Modal = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  right: 0;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

export default ModalComponent;
