import React from 'react';
// import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import {
  Row, Col, Divider, Button, Tag,
} from 'antd';
import Container from './Container';

const FrontPage = () => (
  <React.Fragment>
    <Helmet>
      <title>myneurons | Главная</title>
    </Helmet>

    <Container>
      <Row gutter={24}>
        <Col md={{ span: 12 }}>
          <h1>myneurons</h1>
          <h2>Сборник научно обоснованных психологических тестов</h2>
          <p>
            Это некоммерческий проект, в котором собраны диагностические и экспериментальные методы
            и методики, необходимые в работе как практических психологов, так и
            психологов-исследователей, биографии известных психологов, психологические статьи.
          </p>
          <p>
            Все тесты подробно и полно описаны профессиональными психологами с использованием
            психологической литературы.
          </p>
          <p>
            Данный ресурс будет полезен практикующим психологам, исследователям, преподавателям
            психологии, студентам, аспирантам, а также всем интересующимся вопросами
            психодиагностики и передовыми психологическими тестами.
          </p>
        </Col>

        <Col md={{ span: 12 }}>
          <h3>Тест Олдхэма-Морриса</h3>
          <Tag>107 вопросов</Tag>
          <Tag>~20 минут</Tag>
          <p>
            Методика представляет собой личностный самоопросник, разработанный на основании
            критериев DSM-IV и (частично) на основе DSM-III-R Дж. Олдхэмом и Л. Моррисом.
          </p>
          <Button type="primary" size="small" href="/oldham-morris">
            Начать тестирование
          </Button>
          <Divider dashed />
          <h3>Тест 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut blanditiis repellat ullam.
          </p>
          <Button type="primary" size="small" href="/" disabled>
            Начать тестирование
          </Button>
          <Divider dashed />
          <h3>Тест 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quibusdam?
            Distinctio, facilis.
          </p>
          <Button type="primary" size="small" href="/" disabled>
            Начать тестирование
          </Button>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default FrontPage;
