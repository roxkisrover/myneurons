import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'antd';
import { connect } from 'react-redux';

const ButtonWrapper = styled.span`
  margin-right: 8px;
  margin-bottom: 12px;
`;

const AnswerButton = ({
  answerIndex,
  answerText,
  answerValue,
  handleActiveIndexChange,
  handleAnswerClick,
  isActive,
  isTestComplete,
  questionId,
  questionTarget,
}) => (
  <ButtonWrapper>
    <Button
      disabled={isTestComplete}
      type={isActive ? 'primary' : 'default'}
      size="small"
      onClick={() => {
        handleAnswerClick(questionId, questionTarget, answerValue);
        handleActiveIndexChange(answerIndex);
      }}
    >
      {answerText}
    </Button>
  </ButtonWrapper>
);

AnswerButton.propTypes = {
  answerIndex: PropTypes.number.isRequired,
  answerText: PropTypes.string.isRequired,
  answerValue: PropTypes.number.isRequired,
  handleActiveIndexChange: PropTypes.func.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTarget: PropTypes.arrayOf(PropTypes.number).isRequired,
  isTestComplete: PropTypes.bool,
};

AnswerButton.defaultProps = {
  isTestComplete: false,
};

const mapStateToProps = state => ({
  isTestComplete: state.isTestComplete,
});

export default connect(mapStateToProps)(AnswerButton);
