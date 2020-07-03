import React, { useState } from "react";
import styled from "styled-components";
import { Text, DeleteIcon, EditIcon, ExpandedCard, Modal } from "../";
import { useHistory } from "react-router-dom";

const CardComponent = ({ naver }) => {
  const history = useHistory();

  const [isExpandedCard, setExpandedCard] = useState(null);
  const [naverId, setNaverId] = useState("");

  function handleExpandedCard(id) {
    setExpandedCard(id);
    setNaverId(id);
  }

  return (
    <Card>
      <Picture src={naver.url} onClick={() => handleExpandedCard(naver.id)} />
      <Description>
        <Text fontSize="medium" fontWeight="large" lineHeight="16px">
          {naver.name}
        </Text>
        <Text fontWeight="small" lineHeight="40px">
          {naver.job_role}
        </Text>
      </Description>
      <Icons>
        <DeleteIcon size="24" naverId={naver.id} />
        <EditIcon size="24" onClick={() => history.push(`/edit/${naver.id}`)} />
      </Icons>
      {isExpandedCard && (
        <Modal>
          <ExpandedCard
            naverId={naverId}
            closeCard={() => {
              setExpandedCard(false);
              history.push("/");
            }}
          />
        </Modal>
      )}
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  min-width: 281px;
  min-height: 281px;
  max-width: 420px;
  max-height: 420px;
  flex-direction: column;
  margin-top: 32px;
`;

const Picture = styled.img`
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

const Description = styled.span`
  margin-top: 16px;
`;

const Icons = styled.span``;

export default CardComponent;
