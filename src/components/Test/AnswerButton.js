import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'antd';

const ButtonWrapper = styled.span`
  margin-right: 8px;
  margin-bottom: 12px;
`;

const AnswerButton = ({
  answerIndex,
  answerText,
  answerValue,
  batchAnswersCount,
  handleActiveIndexChange,
  handleAnswerClick,
  isActive,
  questionId,
  questionTarget,
}) => (
  <ButtonWrapper>
    <Button
      size="small"
      type={isActive ? 'primary' : 'default'}
      onClick={() => {
        handleAnswerClick(questionId, questionTarget, answerValue);
        handleActiveIndexChange(answerIndex);
        batchAnswersCount(questionId);
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
  batchAnswersCount: PropTypes.func.isRequired,
  handleActiveIndexChange: PropTypes.func.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTarget: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default AnswerButton;
