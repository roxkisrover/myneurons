import React from 'react';
import { Link } from 'react-router-dom';
import findIndex from 'lodash/findIndex';
import update from 'immutability-helper';
import Question from './Question';
import { questionsData, answersData, typesData } from '../data/oldham-morris';

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
      <div>
        <h1>Тест Олдхэма-Морриса</h1>
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
      </div>
    );
  }
}

export default OldhamMorris;
