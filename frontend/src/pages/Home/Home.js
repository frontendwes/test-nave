import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Background, Button, Card } from "../../components";
import styled from "styled-components";
import api from "../../services/api";

const Home = () => {
  const [navers, setNavers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/navers");
      setNavers(data);
    })();
  }, []);

  return (
    <Background>
      <Header />
      <Section>
        <HeaderList>
          <Title>Navers</Title>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <Button primary marginSize="0px 32px">
              Adcionar Naver
            </Button>
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
  margin-right: 32px;
`;

export default Home;
