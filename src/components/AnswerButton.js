import React from 'react';
import PropTypes from 'prop-types';

const AnswerButton = ({
  activeAnswerIndex,
  answerIndex,
  answerText,
  answerValue,
  handleActiveIndexChange,
  handleAnswerClick,
  questionId,
  questionTarget,
}) => (
  <button
    type="button"
    onClick={() => {
      handleAnswerClick(questionId, questionTarget, answerValue);
      handleActiveIndexChange(answerIndex);
    }}
  >
    {answerText}
  </button>
);

AnswerButton.propTypes = {
  activeAnswerIndex: PropTypes.number,
  answerIndex: PropTypes.number.isRequired,
  answerText: PropTypes.string.isRequired,
  answerValue: PropTypes.number.isRequired,
  handleActiveIndexChange: PropTypes.func.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTarget: PropTypes.arrayOf(PropTypes.number).isRequired,
};

AnswerButton.defaultProps = {
  activeAnswerIndex: null,
};

export default AnswerButton;
