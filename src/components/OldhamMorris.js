import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import findIndex from 'lodash/findIndex';
import update from 'immutability-helper';
import Question from './Question';
import { questionsData, answersData, typesData } from '../data/oldham-morris';

const Container = styled.div`
  position: relative;
  margin: 30px auto;
  padding: 0 20px;
  width: 100%;
  max-width: 960px;
  box-sizing: border-box;

  @media (min-width: 400px) {
    width: 85%;
    padding: 0;
  }
  @media (min-width: 550px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -1px;

  @media (min-width: 550px) {
    font-size: 50px;
  }
`;

class OldhamMorris extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.state = {
      answers: [],
      isTestComplete: false,
      result: new Array(14).fill(0),
      resultLink: '/',
      resultType: '',
    };
  }

  handleAnswerClick(questionId, questionTarget, answerValue) {
    const { answers } = this.state;
    const currentAnswerIndex = findIndex(answers, ['id', questionId]);
    if (currentAnswerIndex >= 0) {
      if (answerValue !== answers[currentAnswerIndex].value) {
        this.setState(state => update(state, {
          answers: { [currentAnswerIndex]: { value: { $set: answerValue } } },
        }));
      }
    } else {
      const newAnswer = { id: questionId, target: questionTarget, value: answerValue };
      this.setState(state => update(state, { answers: { $push: [newAnswer] } }));
    }
  }

  checkTestComplete() {
    const { answers } = this.state;
    if (answers.length === questionsData.length) {
      this.setState({ isTestComplete: true });
    }
  }

  calculateResult() {
    const { answers, result } = this.state;
    answers.forEach((answer) => {
      for (let i = 0; i < answer.target.length; i += 1) {
        result[answer.target[i]] += answer.value;
      }
    });
    this.setState({ result });
  }

  createResultLink() {
    const { result } = this.state;
    const max = result.reduce((a, b) => Math.max(a, b));
    const index = result.indexOf(max);
    this.setState({
      resultLink: `/oldham-morris${typesData[index].link}`,
      resultType: typesData[index].type,
    });
  }

  render() {
    const { isTestComplete, resultLink, resultType } = this.state;
    return (
      <Container>
        <Title>Тест Олдхэма-Морриса</Title>
        {questionsData.map(question => (
          <Question
            answersData={answersData}
            handleAnswerClick={this.handleAnswerClick}
            key={question.id}
            questionId={question.id}
            questionTarget={question.target}
            questionText={question.text}
          />
        ))}
        {isTestComplete && (
          <span>
            Ваш тип: <Link to={resultLink}>{resultType}</Link>
          </span>
        )}
      </Container>
    );
  }
}

export default OldhamMorris;
