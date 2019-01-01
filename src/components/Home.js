import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import {
  Row, Col, Divider, Button, Tag,
} from 'antd';
import Container from './Container';
import { omQuestionsMeta } from '../data/oldhamMorris/questions';

const Title = styled.h1`
  color: #ff6101;
`;

const Scroll = styled.div`
  @media (min-width: 768px) {
    padding-right: 12px;
    max-height: 70vh;
    overflow-y: auto;
  }
`;

const TagGroup = styled.div`
  margin-bottom: 1em;
`;

const Home = () => (
  <React.Fragment>
    <Helmet>
      <title>myneurons | Главная</title>
    </Helmet>

    <Container isVerticallyCentered bgColored>
      <Row gutter={24}>
        <Col md={{ span: 12 }}>
          <Title>myneurons</Title>
          <h2>Сборник научно обоснованных психологических тестов</h2>
          <p>
            Это некоммерческий проект, в котором собраны диагностические и экспериментальные методы
            и методики, необходимые в работе как практических психологов, так и
            психологов-исследователей.
          </p>
          <p>
            Все тесты подробно и полно описаны профессиональными психологами с использованием
            профильной литературы.
          </p>
          <p>
            Данный ресурс будет полезен практикующим психологам, исследователям, преподавателям
            психологии, студентам, аспирантам, а также всем интересующимся вопросами
            психодиагностики и передовыми психологическими тестами.
          </p>
        </Col>

        <Col md={{ span: 12 }}>
          <Scroll>
            <h3>Тест Олдхэма-Морриса</h3>
            <TagGroup>
              <Tag>{`${omQuestionsMeta.questionsCount} вопросов`}</Tag>
              <Tag>{`~${omQuestionsMeta.estimatedTime} минут`}</Tag>
            </TagGroup>
            <p>
              Личностный самоопросник, разработанный Дж.&nbsp;Олдхэмом и Л.&nbsp;Моррисом на
              основании критериев DSM-IV и (частично) DSM-III-R.
            </p>
            <Button type="primary" size="small" href="/oldham-morris">
              Начать тестирование
            </Button>

            <Divider dashed />

            <h3>Пятифакторный опросник личности TIPI-RU</h3>
            <TagGroup>
              <Tag>10 вопросов</Tag>
              <Tag>~2 минуты</Tag>
            </TagGroup>
            <p>
              Оценка конвергентной валидности, внутренней согласованности и тест-ретестовой
              надёжности.
            </p>
            <Button type="primary" size="small" href="/" disabled>
              Начать тестирование
            </Button>
          </Scroll>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Home;
