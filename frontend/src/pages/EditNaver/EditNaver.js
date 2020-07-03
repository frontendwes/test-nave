import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

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

const EditNaver = ({ match: { params } }) => {
  const history = useHistory();

  const [alert, setAlert] = useState(false);
  const [naver, setNaver] = useState({});

  useEffect(() => {
    const fetchNavers = async () => {
      try {
        const { data } = await api.get(`/navers/${params.id}`);
        setNaver(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNavers();
  }, [params.id]);

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

    try {
      await api.put(`/navers/${naver.id}`, data);
      setAlert(true);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Background>
      <Header />
      <Section>
        <Form onSubmit={handleSubmit}>
          <FormHeader>
            <Text fontSize="large" fontWeight="large" lineHeight="large">
              <BackIcon size="23" onClick={() => history.push("/")} />
              Editar Naver
            </Text>
          </FormHeader>
          <FormInputs>
            <Label>
              <Input
                placeholder={naver && naver.name}
                name="name"
                inputTitle="Nome"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                placeholder={naver && naver.job_role}
                name="job_role"
                inputTitle="Cargo"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                placeholder={naver && naver.birthdate}
                name="birthdate"
                inputTitle="Idade"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                placeholder={naver && naver.admission_date}
                name="admission_date"
                inputTitle="Tempo de empresa"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                placeholder={naver && naver.project}
                name="project"
                inputTitle="Projetos que participou"
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                placeholder={naver && naver.url}
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
      {alert && (
        <Modal>
          <Alert
            title="Naver Atualizado"
            message="Naver atualizado com sucesso"
            changeAlert={() => {
              setAlert(false);
              history.push("/");
            }}
          />
        </Modal>
      )}
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
  background-color: #fff;
  padding: 32px;
  max-width: 650px;
  min-width: 300px;
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

export default EditNaver;
