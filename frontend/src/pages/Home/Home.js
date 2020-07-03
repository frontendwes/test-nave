import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Background, Button, Card } from "../../components";
import styled from "styled-components";
import api from "../../services/api";

const Home = () => {
  const [navers, setNavers] = useState([]);

  useEffect(() => {
    async function fetchNavers() {
      try {
        const { data } = await api.get("/navers");
        setNavers(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchNavers();
  }, [navers]);

  return (
    <Background>
      <Header />
      <Section>
        <HeaderList>
          <Title>Navers</Title>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <Button primary>Adicionar Naver</Button>
          </Link>
        </HeaderList>
        <NaversList>
          {navers.map((naver) => (
            <Card naver={naver} key={naver.id} />
          ))}
        </NaversList>
      </Section>
    </Background>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vw;
`;

const HeaderList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;

const NaversList = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: left;
  justify-content: space-between;
`;

export default Home;
