import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 24px;
  padding: 0 30px;
  color: ${props => (props.isActive ? '#fff' : '#555')};
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: ${props => (props.isActive ? '#33c3f0' : 'transparent')};
  border-radius: 4px;
  border: ${props => (props.isActive ? '1px solid #33c3f0' : '1px solid #bbb')};
  cursor: pointer;
  :not(:disabled):hover {
    color: ${props => (props.isActive ? '#fff' : '#333')};
    border-color: ${props => (props.isActive ? '#1eaedb' : '#888')};
    background-color: ${props => (props.isActive ? '#1eaedb' : 'transparent')};
  }
  :focus {
    outline: 0;
  }
  :disabled {
    color: ${props => (props.isActive ? '#eee' : '#999')};
  }
`;

const AnswerButton = ({
  answerIndex,
  answerText,
  answerValue,
  handleActiveIndexChange,
  handleAnswerClick,
  isActive,
  questionId,
  questionTarget,
}) => (
  <Button
    isActive={isActive}
    onClick={() => {
      handleAnswerClick(questionId, questionTarget, answerValue);
      handleActiveIndexChange(answerIndex);
    }}
    type="button"
  >
    {answerText}
  </Button>
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
};

export default AnswerButton;
