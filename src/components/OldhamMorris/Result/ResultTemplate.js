import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  padding: 20px;
  max-width: 960px;
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 32px;
  line-height: 1.125;
  font-weight: 600;
  color: #111;

  @media (min-width: 550px) {
    font-size: 48px;
    line-height: 1.08365;
    font-weight: 600;
  }
`;

const ResultTemplate = ({ title, children }) => (
  <React.Fragment>
    <Helmet>
      <title> myneurons | {title} тип личности</title>
    </Helmet>

    <Container>
      <Section>
        <Title>{title}</Title>
        {children}
      </Section>
    </Container>
  </React.Fragment>
);

ResultTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResultTemplate;
