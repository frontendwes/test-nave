import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

import api from '../../services/api'

import {
  Background,
  Header,
  Text,
  Input,
  Button,
  BackIcon,
  Modal,
  Alert,
} from '../../components'

const EditNaver = ({ match: { params } }) => {
  const history = useHistory()

  const [alert, setAlert] = useState(false)
  const [naver, setNaver] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    job_role: '',
    birthdate: '',
    admission_date: '',
    project: '',
    url: '',
  })

  useEffect(() => {
    const fetchNavers = async () => {
      try {
        const { data } = await api.get(`/navers/${params.id}`)
        setNaver(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchNavers()
  }, [params.id])

  useEffect(() => {
    setFormData({
      name: naver.name,
      job_role: naver.job_role,
      birthdate: moment(naver.birthdate).format('DD/MM/YYYY'),
      admission_date: moment(naver.admission_date).format('DD/MM/YYYY'),
      project: naver.project,
      url: naver.url,
    })
  }, [naver])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { name, job_role, birthdate, admission_date, project, url } = formData

    const data = {
      name,
      job_role,
      birthdate,
      admission_date,
      project,
      url,
    }

    try {
      console.log(data)
      await api.put(`/navers/${naver.id}`, data)
      setAlert(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Background>
      <Header />
      <Section>
        <Form onSubmit={handleSubmit}>
          <FormHeader>
            <Text fontSize='large' fontWeight='large' lineHeight='large'>
              <BackIcon size='23' onClick={() => history.push('/')} />
              Editar Naver
            </Text>
          </FormHeader>
          <FormInputs>
            <Label>
              <Input
                value={formData.name}
                name='name'
                inputTitle='Nome'
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                value={formData.job_role}
                name='job_role'
                inputTitle='Cargo'
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                value={formData.birthdate}
                name='birthdate'
                inputTitle='Data de nascimento'
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                value={formData.admission_date}
                name='admission_date'
                inputTitle='Data de admissão'
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                value={formData.project}
                name='project'
                inputTitle='Projetos que participou'
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              <Input
                value={formData.url}
                name='url'
                inputTitle='URL da foto do Naver'
                onChange={handleInputChange}
              />
            </Label>
          </FormInputs>
          <FormFooter>
            <Button primary marginSize='32px 0px 0px 0px'>
              Salvar
            </Button>
          </FormFooter>
        </Form>
      </Section>
      {alert && (
        <Modal>
          <Alert
            title='Naver Atualizado'
            message='Naver atualizado com sucesso'
            changeAlert={() => {
              setAlert(false)
              history.push('/')
            }}
          />
        </Modal>
      )}
    </Background>
  )
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: auto 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: #fff;
  max-width: 650px;
  min-width: 300px;
  margin-bottom: 100px;
`
const FormHeader = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
`

const FormInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const FormFooter = styled.div`
  align-self: flex-end;
`

const Label = styled.label``

export default EditNaver
