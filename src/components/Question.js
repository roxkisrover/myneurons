import React from 'react';
import PropTypes from 'prop-types';
import AnswerButton from './AnswerButton';

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
        <p>
          {questionId}. {questionText}
        </p>
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
        <hr />
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
