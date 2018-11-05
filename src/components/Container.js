import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

const Content = styled.div`
  padding: 16px;
  max-width: 960px;
`;

const Container = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
