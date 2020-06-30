import React from "react";
import styled from "styled-components";
import { Fonts, DeleteIcon, EditIcon } from "../../components";

const CardInfoComponent = () => (
  <CardContent>
    <Picture />
    <Details>
      <Fonts
        fontSize="large"
        fontWeight="large"
        lineHeight="36px"
        marginBottom="10px"
      >
        Juliano Reis
      </Fonts>
      <Fonts fontWeight="small" lineHeight="24px" marginBottom="24px">
        Front-End Developer
      </Fonts>
      <Fonts fontWeight="large" lineHeight="24px" marginBottom="10px">
        Juliano Reis
      </Fonts>
      <Fonts fontWeight="small" lineHeight="24px" marginBottom="24px">
        Front-End Developer
      </Fonts>
      <Fonts fontWeight="large" lineHeight="24px" marginBottom="10px">
        Juliano Reis
      </Fonts>
      <Fonts fontWeight="small" lineHeight="24px" marginBottom="24px">
        Front-End Developer
      </Fonts>
      <Fonts fontWeight="large" lineHeight="24px" marginBottom="10px">
        Juliano Reis
      </Fonts>
      <Fonts fontWeight="small" lineHeight="24px">
        Front-End Developer
      </Fonts>
      <Icons>
        <DeleteIcon size="24" />
        <EditIcon size="24" />
      </Icons>
    </Details>
  </CardContent>
);

const CardContent = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  background-color: #fff;
  justify-content: center;
`;
const Picture = styled.div`
  align-self: center;
  width: 503px;
  height: 503px;
  background-image: url("https://fotografiamais.com.br/wp-content/uploads/2019/04/camera-profissional-para-iniciantes-730x506.jpg");
  background-position: center;
  background-repeat: no-repeat;
`;
const Details = styled.div`
  display: flex;
  width: 100%;
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
