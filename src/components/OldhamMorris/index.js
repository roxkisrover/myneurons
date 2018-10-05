import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  padding: 20px;
  max-width: 960px;
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 32px;
  line-height: 1.125;
  font-weight: 600;
  color: #111;

  @media (min-width: 550px) {
    font-size: 48px;
    line-height: 1.08365;
    font-weight: 600;
  }
`;

const Description = styled.p`
  margin: 0 0 20px;
  padding-bottom: 20px;
  font-size: 19px;
  line-height: 1.42115;
  font-weight: 400;
  border-bottom: 1px dashed #d6d6d6;

  @media (min-width: 550px) {
    font-size: 21px;
    line-height: 1.38105;
    font-weight: 400;
  }
`;

const LinkContainer = styled.div`
  text-align: center;
`;

const StyledLink = styled(Link)`
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
      link: '',
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
        link: `oldham-morris/result${resultType.link}`,
      });
    }
  }

  render() {
    const { isTestComplete, link } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <title>myneurons | Тест Олдхэма-Морриса</title>
        </Helmet>

        <Container>
          <Section>
            <Title>Тест Олдхэма-Морриса</Title>
            <Description>
              Ваша личность уникальна. Используйте этот тест для определения своего преобладающего
              типа.
            </Description>
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
            <button type="button" onClick={this.handleResultClick}>
              Посчитать результат
            </button>
            {isTestComplete && (
              <LinkContainer>
                <StyledLink to={link}>Перейти к результату</StyledLink>
              </LinkContainer>
            )}
          </Section>
        </Container>
      </React.Fragment>
    );
  }
}

export default OldhamMorris;
