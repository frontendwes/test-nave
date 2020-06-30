import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

import { Text, DeleteIcon, EditIcon } from "../../components";

const cardComponent = () => (
  <Card>
    <Picture />
    <Description>
      <Text fontSize="medium" fontWeight="large" lineHeight="16px">
        Juliano Reis
      </Text>
      <Text fontWeight="small" lineHeight="40px">
        Front-End Developer
      </Text>
    </Description>
    <Icons>
      <DeleteIcon size="24" />
      <Link to="/edit">
        <EditIcon size="24" />
      </Link>
    </Icons>
  </Card>
);

const Card = styled.div`
  flex-grow: 1;
  display: flex;
  min-width: 281px;
  flex-direction: column;
  padding: 20px 0px;
  margin-left: 32px;
`;

const Picture = styled.div`
  height: 281px;
  background-image: url("https://fotografiamais.com.br/wp-content/uploads/2019/04/camera-profissional-para-iniciantes-730x506.jpg");
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

export default cardComponent;
