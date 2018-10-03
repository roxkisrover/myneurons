import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

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

const ResultTemplate = ({ title, children }) => (
  <React.Fragment>
    <Helmet>
      <title> myneurons | {title} тип личности</title>
    </Helmet>

    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  </React.Fragment>
);

ResultTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResultTemplate;
