import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

const Section = styled.section`
  padding: 20px;
  max-width: 960px;
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 21px;
  line-height: 1.09524;
  color: #111;
  @media (min-width: 550px) {
    margin-bottom: 22px;
    font-size: 24px;
    line-height: 1.16667;
  }
`;

const Subtitle = styled.h2`
  margin-top: 0;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;
  color: #111;
  @media (min-width: 550px) {
    font-size: 56px;
    line-height: 1.07143;
  }
`;

const Text = styled.p`
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 1.38105;
  font-weight: 400;
  @media (min-width: 550px) {
    font-size: 18px;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.33341;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #ff365d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  :active {
    background-color: #eb3256;
  }
  :focus {
    box-shadow: 0 0 0 3px rgba(131, 192, 253, 0.5);
    outline: none;
  }
  :hover {
    background-color: #ff466a;
  }
`;

const Note = styled.p`
  margin: 24px 0;
  font-size: 12px;
  line-height: 1.4;
  font-weight: 400;
  color: #888;
  @media (min-width: 550px) {
    font-size: 13px;
  }
`;

const FrontPage = () => (
  <React.Fragment>
    <Helmet>
      <title>myneurons | Главная</title>
    </Helmet>

    <Container>
      <Section>
        <Title>Определение типа личности</Title>
        <Subtitle>Методика Олдхэма-Морриса</Subtitle>
        <Text>
          Тест содержит <strong>107 вопросов</strong>, на которые нужно ответить, хорошенько
          обдумывая каждый. Постарайтесь сделать это максимально точно и честно. Ваш автопортрет
          будет настолько же точным, насколько правдивыми будут ответы. Даже если вы считаете, что
          вопрос не касается вас или вашей личной жизни, отвечайте так, как если бы он имел к вам
          отношение.
        </Text>
        <Text>
          Некоторые вопросы могут показаться слишком личными, – помните, что ответы на каждый
          отдельный вопрос нигде не сохраняются, и никто (даже вы сами) не сможет их увидеть по
          окончании теста.
        </Text>
        <Text>
          Отвечайте <i>«Да, я согласен»</i>, если утверждение совершенно верно для вас в большинстве
          случаев.
        </Text>
        <Text>
          Отвечайте <i>«Может быть, я согласен»</i>, если утверждение иногда, в каких-то случаях
          верно для вас. Также используйте этот ответ для утверждений, состоящих из нескольких
          частей, если вы согласны с одной частью, но не согласны с другой.{' '}
        </Text>
        <Text>
          Отвечайте <i>«Нет, я не согласен»</i>, если утверждение совершенно ложно для вас.
        </Text>
        <StyledLink to="/oldham-morris">Начать тестирование</StyledLink>
        <Note>Это бесплатно и не требует регистрации.</Note>
      </Section>
    </Container>
  </React.Fragment>
);

export default FrontPage;
