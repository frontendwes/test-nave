import styled from "styled-components";
import React from "react";

import { CloseIcon, Text } from "../../components";

const AlertComponent = () => (
  <Alert>
    <CloseIcon size="24" />
    <Text fontSize="large" fontWeight="large" marginBottom="32px">
      Naver Criado
    </Text>
    <Text fontWeight="small">Naver Criado com sucesso!</Text>
  </Alert>
);

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
