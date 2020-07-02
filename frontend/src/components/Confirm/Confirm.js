import styled from "styled-components";
import React from "react";
import { Text, Button } from "../../components";
import api from "../../services/api";

const ConfirmComponent = ({ naverId }) => {
  async function handleConfirm() {
    try {
      await api.delete(`/navers/${naverId}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Confirm>
      <Text fontSize="large" fontWeight="large" marginBottom="24px">
        Excluir Naver
      </Text>
      <Text fontWeight="small" marginBottom="32px">
        Tem certeza que deseja excluir este Naver?
      </Text>
      <Buttons>
        <Button>Cancelar</Button>

        <Button marginSize="0 0 0 24px" primary onClick={handleConfirm}>
          Confirmar
        </Button>
      </Buttons>
    </Confirm>
  );
};

const Confirm = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  flex-direction: column;
  width: 40%;
  background-color: #fff;
  padding: 32px;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;
export default ConfirmComponent;
