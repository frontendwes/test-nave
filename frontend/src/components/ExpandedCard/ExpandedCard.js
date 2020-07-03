import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text, DeleteIcon, EditIcon, CloseIcon } from "../../components";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

const ExpandedCardComponent = ({ naverId, closeCard }) => {
  const [naver, setNaver] = useState([]);

  useEffect(() => {
    async function fetchNavers() {
      try {
        const { data } = await api.get(`/navers/${naverId}`);
        setNaver(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchNavers();
  }, [naverId]);

  const history = useHistory();

  return (
    <ExpandedCard>
      <Picture src={naver.url} />
      <Details>
        <CloseIcon size="24px" onClick={() => closeCard()} />
        <Text
          fontSize="large"
          fontWeight="large"
          lineHeight="36px"
          marginBottom="10px"
        >
          {naver.name}
        </Text>
        <Text fontWeight="small" lineHeight="24px" marginBottom="24px">
          {naver.job_role}
        </Text>
        <Text fontWeight="large" lineHeight="24px" marginBottom="10px">
          Idade
        </Text>
        <Text fontWeight="small" lineHeight="24px" marginBottom="24px">
          {naver.birthdate}
        </Text>
        <Text fontWeight="large" lineHeight="24px" marginBottom="10px">
          Tempo de Empresa
        </Text>
        <Text fontWeight="small" lineHeight="24px" marginBottom="24px">
          {naver.admission_date}
        </Text>
        <Text fontWeight="large" lineHeight="24px" marginBottom="10px">
          Projetos que participou
        </Text>
        <Text fontWeight="small" lineHeight="24px">
          {naver.project}
        </Text>
        <Icons>
          <DeleteIcon size="24" naverId={naverId} />
          <EditIcon
            size="24"
            onClick={() => history.push(`/edit/${naverId}`)}
          />
        </Icons>
      </Details>
    </ExpandedCard>
  );
};

const ExpandedCard = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  max-width: 1200px;
  flex-wrap: wrap;
  background-color: #fff;
  margin: 32px 0;
`;
const Picture = styled.img`
  display: flex;
  max-width: 503px;
  height: 503px;
  background-position: center;
  background-repeat: no-repeat;
`;
const Details = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 503px;
  flex-direction: column;
  padding: 30px 30px 0px 30px;
`;
const Icons = styled.span`
  display: flex;
  height: 100%;
  align-items: end;
  margin-top: 30px;
  margin-bottom: 25px;
`;
export default ExpandedCardComponent;
