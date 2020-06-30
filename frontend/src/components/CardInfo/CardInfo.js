import React from "react";
import styled from "styled-components";
import { Text, DeleteIcon, EditIcon, CloseIcon } from "../../components";
import { Link } from "react-router-dom";

const CardInfoComponent = () => (
  <CardInfo>
    <Picture />
    <Details>
      <CloseIcon size="24px" />
      <Text
        fontSize="large"
        fontWeight="large"
        lineHeight="36px"
        marginBottom="10px"
      >
        Juliano Reis
      </Text>
      <Text fontWeight="small" lineHeight="24px" marginBottom="24px">
        Front-End Developer
      </Text>
      <Text fontWeight="large" lineHeight="24px" marginBottom="10px">
        Juliano Reis
      </Text>
      <Text fontWeight="small" lineHeight="24px" marginBottom="24px">
        Front-End Developer
      </Text>
      <Text fontWeight="large" lineHeight="24px" marginBottom="10px">
        Juliano Reis
      </Text>
      <Text fontWeight="small" lineHeight="24px" marginBottom="24px">
        Front-End Developer
      </Text>
      <Text fontWeight="large" lineHeight="24px" marginBottom="10px">
        Juliano Reis
      </Text>
      <Text fontWeight="small" lineHeight="24px">
        Front-End Developer
      </Text>
      <Icons>
        <Link to="/add">
          <DeleteIcon size="24" />
        </Link>
        <Link to="/edit">
          <EditIcon size="24" />
        </Link>
      </Icons>
    </Details>
  </CardInfo>
);

const CardInfo = styled.div`
  position: absolute;
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  background-color: #fff;
`;
const Picture = styled.div`
  width: 100%;
  max-width: 503px;
  height: 503px;
  background-image: url("https://fotografiamais.com.br/wp-content/uploads/2019/04/camera-profissional-para-iniciantes-730x506.jpg");
  background-position: center;
  background-repeat: no-repeat;
`;
const Details = styled.div`
  display: flex;
  width: 100%;
  width: 503px;
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
export default CardInfoComponent;
