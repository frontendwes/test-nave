import React from "react";

import { Header, Background, Button, Card } from "../../components";
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
        <Card />
        <Card />
        <Card />
        <Card />
      </NaversList>
    </Section>
  </Background>
);

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
`;

const HeaderList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0px 10px 0px;
`;

const Title = styled.h1`
  margin-left: 32px;
`;

const NaversList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-self: center;
  justify-content: space-between;
  margin: 0 31px;
`;

export default Home;
