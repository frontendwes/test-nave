import React from "react";
import styled from "styled-components";

const InputComponent = ({ label, name, placeholder, ...props }) => {
  return <Input label={label} placeholder={placeholder} name={name} />;
};

const Input = styled.input`
  height: 45px;
  width: 30vw;
  border-radius: 6px;
  background-color: #f2f2f2;
  color: #353535;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 23px;
  text-align: center;
  border-radius: 6px;
  margin-top: 10px;
  border: none;

  ::placeholder {
    color: #bdbaba;
    opacity: 1;
  }
`;

export default InputComponent;
