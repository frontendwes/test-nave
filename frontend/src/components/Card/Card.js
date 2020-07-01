import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Text,
  DeleteIcon,
  EditIcon,
  ExpandedCard,
  Modal,
} from "../../components";

const CardComponent = ({ naver }) => {
  const [isExpandedCard, setExpandedCard] = useState(false);

  function handleExpandedCard(id) {
    console.log(id);
    setExpandedCard(true);
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
        <DeleteIcon size="24" />
        <Link to="/edit">
          <EditIcon size="24" />
        </Link>
      </Icons>
      {isExpandedCard ? (
        <Modal>
          <ExpandedCard />
        </Modal>
      ) : null}
    </Card>
  );
};

const Card = styled.div`
  flex-grow: 1;
  display: flex;
  min-width: 281px;
  flex-direction: column;
  padding: 20px 0px;
  margin-left: 32px;
`;

const Picture = styled.img`
  height: 281px;
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
