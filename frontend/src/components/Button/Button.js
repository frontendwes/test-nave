import React from "react";
import styled from "styled-components";

const ButtonComponent = ({ type = "submit", ...props }) => {
  return <Button type={type} {...props}></Button>;
};

const Button = styled.button`
  background: ${(props) => (props.primary ? "#212121" : "none")};
  border: ${(props) => (props.primary ? "none" : "1px solid #212121")};
  color: ${(props) => (props.primary ? "#FFF" : "#212121")};
  box-sizing: border-box;
  text-align: center;
  width: 176px;
  height: 40px;

  &:hover {
    cursor: pointer;
    background: ${(props) => (props.primary ? "#313030" : "none")};
  }
`;
export default ButtonComponent;
