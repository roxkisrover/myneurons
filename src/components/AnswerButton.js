import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const isActive = props => props.answerIndex === props.activeAnswerIndex;

const Button = styled.button`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 28px;
  padding: 0 30px;
  color: ${isActive ? '#fff' : '#555'};
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: ${isActive ? '#33c3f0' : 'transparent'};
  border-radius: 4px;
  border: ${isActive ? '1px solid #33c3f0' : '1px solid #bbb'};
  cursor: pointer;
  box-sizing: border-box;

  :hover,
  :focus {
    color: ${isActive ? '#fff' : '#333'};
    border-color: ${isActive ? '#1eaedb' : '#888'};
    background-color: ${isActive ? '#1eaedb' : 'transparent'};
    outline: 0;
  }
`;

const AnswerButton = ({
  // activeAnswerIndex,
  answerIndex,
  answerText,
  answerValue,
  handleActiveIndexChange,
  handleAnswerClick,
  questionId,
  questionTarget,
}) => (
  <Button
    type="button"
    onClick={() => {
      handleAnswerClick(questionId, questionTarget, answerValue);
      handleActiveIndexChange(answerIndex);
    }}
  >
    {answerText}
  </Button>
);

AnswerButton.propTypes = {
  // activeAnswerIndex: PropTypes.number,
  answerIndex: PropTypes.number.isRequired,
  answerText: PropTypes.string.isRequired,
  answerValue: PropTypes.number.isRequired,
  handleActiveIndexChange: PropTypes.func.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTarget: PropTypes.arrayOf(PropTypes.number).isRequired,
};

AnswerButton.defaultProps = {
  // activeAnswerIndex: null,
};

export default AnswerButton;
