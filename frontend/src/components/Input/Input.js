import React from "react";
import styled from "styled-components";

const InputComponent = ({
  widthSize = "280px",
  label,
  name,
  placeholder,
  inputTitle,
  onChange,
  ...props
}) => {
  return (
    <>
      <Title>{inputTitle}</Title>
      <Input
        label={label}
        placeholder={placeholder}
        widthSize={widthSize}
        name={name}
        inputTitle={inputTitle}
        onChange={onChange}
      />
    </>
  );
};

const Input = styled.input`
  height: 40px;
  width: ${(props) => props.widthSize};
  color: #353535;
  font-size: 16px;
  font-weight: 200;
  line-height: 24px;
  text-align: left;
  padding-left: 8px;
  margin-top: 5px;
  border: solid 1px #212121;

  ::placeholder {
    color: #9e9e9e;
    opacity: 1;
  }
`;

const Title = styled.p`
  margin-top: 32px;
  font-weight: normal;
  line-height: 14px;
  text-align: 18;
`;

export default InputComponent;
