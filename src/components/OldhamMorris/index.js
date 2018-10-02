import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import findIndex from 'lodash/findIndex';
import update from 'immutability-helper';
import Question from './Question';
import {
  answersData,
  getMaxIndex,
  getResultArr,
  questionsData,
  typesData,
} from '../../data/oldhamMorris';

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

const ResultButton = styled.button`
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #555;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;

  :hover,
  :focus {
    color: #333;
    border-color: #888;
    outline: 0;
  }
`;

class OldhamMorris extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.state = {
      answers: [],
      isTestComplete: false,
      type: '',
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

  handleResultClick() {
    const { answers } = this.state;
    if (answers.length === questionsData.length) {
      const result = getResultArr(answers);
      const maxIndex = getMaxIndex(result);
      const resultType = typesData[maxIndex];
      this.setState({
        isTestComplete: true,
        type: resultType.title,
      });
    }
  }

  render() {
    const { isTestComplete, type } = this.state;
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
        {!isTestComplete && (
          <div>
            <ResultButton type="button" onClick={this.handleResultClick}>
              Узнать результат
            </ResultButton>
          </div>
        )}
        {isTestComplete && (
          <div>
            Ваш тип: <Link to="/oldham-morris/result">{type}</Link>
          </div>
        )}
      </Container>
    );
  }
}

export default OldhamMorris;
