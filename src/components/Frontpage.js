import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const StyledLink = styled(Link)`
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #555;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;

  :hover,
  :focus {
    color: #333;
    border-color: #888;
    outline: 0;
  }
`;

const Frontpage = () => (
  <Container>
    <Title>Методика определения типа личности Олдхэма-Морриса</Title>
    <Paragraph>
      Тест содержит 107 вопросов, на которые нужно ответить, хорошенько обдумывая каждый.
      Постарайтесь сделать это максимально точно и честно. Ваш автопортрет будет настолько же
      точным, насколько точными будут ответы. Даже если вы считаете, что вопрос не касается вас или
      вашей личной жизни, отвечайте так, как если бы он имел к вам отношение.
    </Paragraph>
    <Paragraph>
      Некоторые вопросы могут показаться слишком личными, – помните, что ответы на каждый отдельный
      вопрос нигде не сохраняются, и никто (даже вы сами) не сможет их увидеть по окончании теста.
    </Paragraph>
    <Paragraph>
      Отвечайте «Да, я согласен», если утверждение совершенно верно для вас в большинстве случаев
      Отвечайте «Может быть, я согласен», если утверждение иногда, в каких-то случаях верно для вас.
      Также используйте этот ответ для утверждений, состоящих из нескольких частей, если вы согласны
      с одной частью, но не согласны с другой. Отвечайте «Нет, я не согласен», если утверждение
      совершенно ложно для вас.
    </Paragraph>
    <StyledLink to="/oldham-morris">Начать тестирование</StyledLink>
  </Container>
);

export default Frontpage;
