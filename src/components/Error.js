import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Alert, Divider } from 'antd';
import Container from './Container';

const LinkWrapper = styled.div`
  text-align: center;
`;

const Error = () => (
  <React.Fragment>
    <Helmet>
      <title>myneurons | Страница не найдена</title>
    </Helmet>

    <Container>
      <Alert
        message="Код 404"
        description="Запрашиваемая страница не найдена."
        type="error"
        showIcon
      />
      <Divider dashed />
      <LinkWrapper>
        <Link to="/">Вернуться на главную</Link>
      </LinkWrapper>
    </Container>
  </React.Fragment>
);

export default Error;
