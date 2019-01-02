import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import AnswerButton from './AnswerButton';

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeAnswerIndex: null,
    };
    this.handleActiveIndexChange = this.handleActiveIndexChange.bind(this);
  }

  handleActiveIndexChange(answerIndex) {
    this.setState({ activeAnswerIndex: answerIndex });
  }

  render() {
    const { activeAnswerIndex } = this.state;
    const {
      answersData,
      handleAnswerClick,
      questionId,
      questionTarget,
      questionText,
      batchAnswersCount,
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
            batchAnswersCount={batchAnswersCount}
            handleActiveIndexChange={this.handleActiveIndexChange}
            handleAnswerClick={handleAnswerClick}
            isActive={index === activeAnswerIndex}
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
  batchAnswersCount: PropTypes.func.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTarget: PropTypes.arrayOf(PropTypes.number).isRequired,
  questionText: PropTypes.string.isRequired,
};

export default Question;
