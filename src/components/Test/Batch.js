import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Icon } from 'antd';
import Question from './Question';

const ButtonContainer = styled.div`
  text-align: right;
`;

class Batch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBatchIndex: 0,
    };
    this.handleButtonNextClick = this.handleButtonNextClick.bind(this);
  }

  handleButtonNextClick() {
    const { currentBatchIndex } = this.state;
    const {
      progressIncrement,
      progressPercent,
      questionsBatchCount,
      setProgressPercent,
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
    const { currentBatchIndex } = this.state;
    const {
      slicedQuestions, answersData, questionsBatchCount, handleAnswerClick,
    } = this.props;

    return (
      <React.Fragment>
        {slicedQuestions[currentBatchIndex].map(question => (
          <Question
            answersData={answersData}
            handleAnswerClick={handleAnswerClick}
            key={question.id}
            questionId={question.id}
            questionTarget={question.target}
            questionText={question.text}
          />
        ))}

        {questionsBatchCount - currentBatchIndex > 1 && (
          <ButtonContainer>
            <Button onClick={this.handleButtonNextClick}>
              Дальше <Icon type="right" />
            </Button>
          </ButtonContainer>
        )}
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
  questionsBatchCount: PropTypes.number.isRequired,
  setProgressPercent: PropTypes.func.isRequired,
  slicedQuestions: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        target: PropTypes.arrayOf(PropTypes.number).isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  ).isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
};

export default Batch;
