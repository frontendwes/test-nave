import React from "react";

import { Header, Background, Button } from "../../components";
import styled from "styled-components";

const Home = () => (
  <Background>
    <Header />
    <Section>
      <HeaderList>
        <h1>Navers</h1>
        <Button primary marginSize="0px 0px 0px 40px">
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
  margin: 32px;
  height: 70%;
`;

const HeaderList = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const NaversList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const Navers = styled.img`
  margin: 5px 0px 5px 5px;
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
