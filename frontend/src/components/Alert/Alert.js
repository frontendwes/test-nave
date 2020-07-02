import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";

import { CloseIcon, Text } from "../../components";

const AlertComponent = ({ title, message }) => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <Alert>
      <CloseIcon size="24" onClick={handleClick} />
      <Text fontSize="large" fontWeight="large" marginBottom="32px">
        {title}
      </Text>
      <Text fontWeight="small">{message}</Text>
    </Alert>
  );
};

const Alert = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  flex-direction: column;
  width: 40%;
  background-color: #fff;
  padding: 32px;
  justify-content: space-between;
`;

export default AlertComponent;
