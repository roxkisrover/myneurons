import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => (props.colored ? 'background-color: #fafafa;' : '')};

  @media (min-width: 768px) {
    ${props => (props.centered ? 'min-height: 100vh;' : '')};
  }
`;

const Content = styled.div`
  padding: 24px;
  max-width: 960px;
  border-radius: 10px;
  background-color: #fff;
  ${props => (props.centered
    ? 'box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)'
    : '')};
`;

const Container = ({ bgColored, children, isVerticallyCentered }) => (
  <Wrapper colored={bgColored} centered={isVerticallyCentered}>
    <Content centered={isVerticallyCentered}>{children}</Content>
  </Wrapper>
);

Container.propTypes = {
  bgColored: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isVerticallyCentered: PropTypes.bool,
};

Container.defaultProps = {
  bgColored: false,
  isVerticallyCentered: false,
};

export default Container;
