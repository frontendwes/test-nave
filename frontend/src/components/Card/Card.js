import styled from "styled-components";
import React from "react";

import { Text, DeleteIcon, EditIcon } from "../../components";

const cardComponent = () => (
  <Card>
    <Image />
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
      <EditIcon size="24" />
    </Icons>
  </Card>
);

const Image = styled.div`
  flex-grow: 1;
  width: 281px;
  height: 281px;
  min-width: 281px;
  min-height: 281px;
  background-image: url("https://fotografiamais.com.br/wp-content/uploads/2019/04/camera-profissional-para-iniciantes-730x506.jpg");
  background-position: center;
  background-repeat: no-repeat;
`;

const Card = styled.div`
  display: flex;
  width: 281px;
  flex-direction: column;
  padding: 20px 0px;
`;

const Icons = styled.span`
  justify-content: flex-start;
`;

const Description = styled.span`
  margin-top: 16px;
`;
export default cardComponent;
