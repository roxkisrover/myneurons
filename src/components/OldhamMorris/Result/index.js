import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Section = styled.section`
  display: flex;
  height: 40px;
  margin-bottom: 30px;
`;

const StatusImage = styled.div`
  border-right: 1px solid #eaeaea;
  padding: 0 20px 0 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
`;

const Description = styled.p`
  margin: 0;
  padding: 0 0 0 20px;
  line-height: 40px;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
`;

const Error = () => (
  <Container>
    <Section>
      <StatusImage>
        <span role="img" aria-label="Poll">
          📝
        </span>
      </StatusImage>
      <Description>Нужно ответить на все вопросы, чтобы получить результат</Description>
    </Section>
    <StyledLink to="/oldham-morris">Перейти к тесту</StyledLink>
  </Container>
);

export default Error;
