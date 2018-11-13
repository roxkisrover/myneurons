import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  @media (min-width: 768px) {
    ${props => (props.isVerticallyCentered ? 'min-height: 100vh;' : '')};
  }
`;

const Content = styled.div`
  padding: 24px;
  max-width: 960px;
  border-radius: 10px;
  background-color: #fff;
`;

const Container = ({ children, isVerticallyCentered }) => (
  <Wrapper isVerticallyCentered={isVerticallyCentered}>
    <Content>{children}</Content>
  </Wrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isVerticallyCentered: PropTypes.bool,
};

Container.defaultProps = {
  isVerticallyCentered: false,
};

export default Container;
