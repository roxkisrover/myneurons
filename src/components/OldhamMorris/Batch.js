import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonNext from './ButtonNext';
import Question from './Question';

const ButtonContainer = styled.div`
  text-align: right;
`;

class Batch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slicedQuestions: [],
      currentBatchIndex: 0,
    };
    this.handleButtonNextClick = this.handleButtonNextClick.bind(this);
  }

  // eslint-disable-next-line
  UNSAFE_componentWillMount() {
    const { questionsData, questionsBatchLength } = this.props;
    const slicedQuestions = [];

    for (let i = 0; i < questionsData.length; i += questionsBatchLength) {
      slicedQuestions.push(questionsData.slice(i, i + questionsBatchLength));
    }

    this.setState({ slicedQuestions });
  }

  handleButtonNextClick() {
    const { currentBatchIndex } = this.state;
    const {
      questionsBatchCount,
      setProgressPercent,
      progressPercent,
      progressIncrement,
    } = this.props;

    if (currentBatchIndex < questionsBatchCount) {
      this.setState({
        currentBatchIndex: currentBatchIndex + 1,
      });
      setProgressPercent(progressPercent + progressIncrement);
    }

    document.getElementById('progress').scrollIntoView();
  }

  render() {
    const { slicedQuestions, currentBatchIndex } = this.state;
    const {
      answersData, questionsBatchLength, questionsCount, handleAnswerClick,
    } = this.props;

    return (
      <React.Fragment>
        {slicedQuestions[currentBatchIndex].map(question => (
          <Question
            key={question.id}
            answersData={answersData}
            questionId={question.id}
            questionTarget={question.target}
            questionText={question.text}
            handleAnswerClick={handleAnswerClick}
          />
        ))}

        <ButtonContainer>
          <ButtonNext
            batchCount={Math.ceil(questionsCount / questionsBatchLength)}
            batchIndex={currentBatchIndex}
            handleButtonNextClick={this.handleButtonNextClick}
          />
        </ButtonContainer>
      </React.Fragment>
    );
  }
}

Batch.propTypes = {
  answersData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  progressPercent: PropTypes.number.isRequired,
  progressIncrement: PropTypes.number.isRequired,
  questionsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      target: PropTypes.arrayOf(PropTypes.number).isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  questionsBatchLength: PropTypes.number.isRequired,
  questionsCount: PropTypes.number.isRequired,
  questionsBatchCount: PropTypes.number.isRequired,
  setProgressPercent: PropTypes.func.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
};

export default Batch;
