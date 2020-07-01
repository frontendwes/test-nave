import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import api from "../../services/api";

import {
  Background,
  Header,
  Text,
  Input,
  Button,
  BackIcon,
  Modal,
  Alert,
} from "../../components";

const AddNaver = () => {
  const [alert, setAlert] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    job_role: "",
    birthdate: "",
    admission_date: "",
    project: "",
    url: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const {
      name,
      job_role,
      birthdate,
      admission_date,
      project,
      url,
    } = formData;

    const data = {
      name,
      job_role,
      birthdate,
      admission_date,
      project,
      url,
    };

    await api.post("/navers", data).catch((e) => {
      console.log(e);
    });

    setAlert(true);
  }

  return (
    <Background>
      <Header />
      <Section>
        <Form onSubmit={handleSubmit}>
          <FormHeader>
            <Link to="/" style={{ textDecoration: "none" }}>
              <BackIcon size="23" />
            </Link>
            <Text fontSize="large" fontWeight="large" lineHeight="large">
              Adicionar Naver
            </Text>
          </FormHeader>
          <FormInputs>
            <Label>
              <Input
                placeholder="Nome"
                name="name"
                inputTitle="Nome"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                placeholder="Cargo"
                name="job_role"
                inputTitle="Cargo"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                placeholder="Idade"
                name="birthdate"
                inputTitle="Idade"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                placeholder="Tempo de empresa"
                name="admission_date"
                inputTitle="Tempo de empresa"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                placeholder="Projetos que participou"
                name="project"
                inputTitle="Projetos que participou"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                placeholder="URL da foto do Naver"
                name="url"
                inputTitle="URL da foto do Naver"
                onChange={handleInputChange}
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
      {alert ? (
        <Modal>
          <Alert />
        </Modal>
      ) : null}
    </Background>
  );
};

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
  display: flex;
  align-self: flex-start;
  align-items: center;
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
