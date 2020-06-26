import React from "react";

import { Header, Background } from "../../components";
import styled from "styled-components";

const Home = () => (
  <Background>
    <Header />
    <Section>
      <HeaderList>
        <h1>Navers</h1>
        <button>Adcionar novo</button>
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
  min-height: 100%;
  max-width: 100%;
  flex-grow: 1;
  width: 281px;
  height: 420px;
  margin-top: 5px;
  background-image: url("https://fotografiamais.com.br/wp-content/uploads/2019/04/camera-profissional-para-iniciantes-730x506.jpg");
`;
export default Home;
