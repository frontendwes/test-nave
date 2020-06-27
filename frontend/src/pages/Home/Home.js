import React from "react";

import { Header, Background, Button } from "../../components";
import styled from "styled-components";

const Home = () => (
  <Background>
    <Header />
    <Section>
      <HeaderList>
        <Title>Navers</Title>
        <Button primary marginSize="0px 32px">
          Adcionar Naver
        </Button>
      </HeaderList>
      <NaversList>
        <Navers></Navers>
        <Navers></Navers>
        <Navers></Navers>
        <Navers></Navers>
      </NaversList>
    </Section>
  </Background>
);

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px 25px 0px;
`;

const Title = styled.h1`
  margin-left: 32px;
`;

const NaversList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 16px;
`;

const Navers = styled.img`
  margin: 16px 16px 0px 16px;
  flex-grow: 1;
  width: 281px;
  height: 281px;
  min-width: 281px;
  min-height: 281px;
  background-image: url("https://fotografiamais.com.br/wp-content/uploads/2019/04/camera-profissional-para-iniciantes-730x506.jpg");
  background-position: center;
  background-repeat: no-repeat;
`;
export default Home;
