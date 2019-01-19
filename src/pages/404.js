import React from 'react';
import { Link } from 'gatsby';
import { Alert, Divider } from 'antd';
import Container from '../components/Container';
import SEO from '../components/SEO';

const Error = () => (
  <React.Fragment>
    <SEO title="404: Страница не найдена" />

    <Container bgColored isVerticallyCentered>
      <Alert
        message="Код 404"
        description="Запрашиваемая страница не найдена."
        type="error"
        showIcon
      />
      <Divider dashed />
      <div style={{ textAlign: 'center' }}>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </Container>
  </React.Fragment>
);

export default Error;
