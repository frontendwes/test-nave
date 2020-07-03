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
        <EditIcon size="24" naver={naver} />
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
  flex-grow: 1;
  display: flex;
  min-width: 281px;
  max-width: 300px;
  flex-direction: column;
  padding: 20px 0px;
  margin-left: 32px;
`;

const Picture = styled.img`
  height: 281px;

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
