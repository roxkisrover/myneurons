import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnswerButton from './AnswerButton';

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 25px;
`;

const Divider = styled.hr`
  margin-top: 30px;
  margin-bottom: 35px;
  border-width: 0;
  border-top: 1px solid #e1e1e1;
`;

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.handleActiveIndexChange = this.handleActiveIndexChange.bind(this);
    this.state = {
      activeAnswerIndex: null,
    };
  }

  handleActiveIndexChange(answerIndex) {
    this.setState({ activeAnswerIndex: answerIndex });
  }

  render() {
    const { activeAnswerIndex } = this.state;
    const {
      answersData, handleAnswerClick, questionId, questionTarget, questionText,
    } = this.props;
    return (
      <div>
        <Paragraph>
          {questionId}. {questionText}
        </Paragraph>
        {answersData.map((answer, index) => (
          <AnswerButton
            activeAnswerIndex={activeAnswerIndex}
            answerIndex={index}
            answerText={answer.text}
            answerValue={answer.value}
            handleActiveIndexChange={this.handleActiveIndexChange}
            handleAnswerClick={handleAnswerClick}
            key={answer.id}
            questionId={questionId}
            questionTarget={questionTarget}
          />
        ))}
        <Divider />
      </div>
    );
  }
}

Question.propTypes = {
  answersData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTarget: PropTypes.arrayOf(PropTypes.number).isRequired,
  questionText: PropTypes.string.isRequired,
};

export default Question;
