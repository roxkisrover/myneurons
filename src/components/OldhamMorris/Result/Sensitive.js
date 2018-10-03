import React from 'react';
import styled from 'styled-components';
import { typesData } from '../../../data/oldhamMorris';

const Container = styled.div`
  position: relative;
  margin: 30px auto;
  padding: 0 20px;
  width: 100%;
  max-width: 960px;
  box-sizing: border-box;

  @media (min-width: 400px) {
    width: 85%;
    padding: 0;
  }
  @media (min-width: 550px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -1px;

  @media (min-width: 550px) {
    font-size: 50px;
  }
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 25px;
`;

const Sensitive = () => {
  const { title } = typesData[7];
  return (
    <Container>
      <Title>{title}</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, deserunt autem alias
        harum commodi dicta! Magni a assumenda, quos veritatis molestiae, facilis in, quae
        voluptates eligendi perferendis excepturi iusto perspiciatis.
      </Paragraph>
    </Container>
  );
};

export default Sensitive;
