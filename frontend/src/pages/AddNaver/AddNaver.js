import React from "react";
import styled from "styled-components";

import { Background, Header, Fonts, Input, Button } from "../../components";

const AddNaver = () => (
  <Background>
    <Header />
    <Section>
      <Form>
        <FormHeader>
          <Fonts fontSize="large" fontWeight="large" lineHeight="large">
            Adicionar Naver
          </Fonts>
        </FormHeader>
        <FormInputs>
          <Label>
            <Input placeholder="Nome" name="nome" inputTitle="Nome" />
          </Label>
          <Label>
            <Input placeholder="Cargo" name="nargo" inputTitle="Cargo" />
          </Label>
          <Label>
            <Input placeholder="Idade" name="idade" inputTitle="Idade" />
          </Label>
          <Label>
            <Input
              placeholder="Tempo de empresa"
              name="tempoDeEmpresa"
              inputTitle="Tempo de empresa"
            />
          </Label>
          <Label>
            <Input
              placeholder="Projetos que participou"
              name="projetos"
              inputTitle="Projetos que participou"
            />
          </Label>
          <Label>
            <Input
              placeholder="URL da foto do Naver"
              name="foto"
              inputTitle="URL da foto do Naver"
            />
          </Label>
        </FormInputs>
        <FormFooter>
          <Button primary marginSize="32px 0px 0px 0px">
            Salvar
          </Button>
        </FormFooter>
      </Form>
    </Section>
  </Background>
);

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  margin-top: 64px;
`;
const FormHeader = styled.div`
  align-self: flex-start;
`;

const FormInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FormFooter = styled.div`
  align-self: flex-end;
`;

const Label = styled.label``;

export default AddNaver;
