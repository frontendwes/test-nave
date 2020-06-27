import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const LogoComponent = ({
  heightSize = "37px",
  widthSize = "145px",
  ...props
}) => {
  return (
    <Logo src={logo} heightSize={heightSize} widthSize={widthSize} {...props} />
  );
};

const Logo = styled.img`
  height: ${(props) => props.heightSize};
  width: ${(props) => props.widthSize};
  margin: ${(props) => props.marginSize};
`;

export default LogoComponent;
