import React from "react";
import styled from "styled-components";

const ButtonComponent = ({
  widthSize = "176px",
  type = "submit",
  ...props
}) => {
  return <Button type={type} widthSize={widthSize} {...props}></Button>;
};

const Button = styled.button`
  background: ${(props) => (props.primary ? "#212121" : "none")};
  border: ${(props) => (props.primary ? "none" : "1px solid #212121")};
  color: ${(props) => (props.primary ? "#FFF" : "#212121")};
  box-sizing: border-box;
  text-align: center;
  width: ${(props) => props.widthSize};
  height: 40px;
  margin: ${(props) => props.marginSize};

  &:hover {
    cursor: pointer;
    background: ${(props) => (props.primary ? "#313030" : "none")};
  }
`;
export default ButtonComponent;
