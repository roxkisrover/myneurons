import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import findIndex from 'lodash/findIndex';
import { actionAddAnswer, actionEditAnswer, actionSetResult } from '../../actions';
import Question from './Question';
import { answersData, questionsData, typesData } from '../../data/oldhamMorris';
import { getMaxIndex, getResultArr } from '../../lib/oldhamMorris';

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
    this.state = {
      isTestComplete: false,
      link: '/',
    };
  }

  handleAnswerClick(questionId, questionTarget, answerValue) {
    const { answers, addAnswer, editAnswer } = this.props;
    const answerIndex = findIndex(answers, ['id', questionId]);
    if (answerIndex >= 0) {
      if (answerValue !== answers[answerIndex].value) {
        editAnswer({ id: questionId, value: answerValue });
      }
    } else {
      addAnswer({ id: questionId, target: questionTarget, value: answerValue });
    }
    this.calculateResult();
  }

  calculateResult() {
    const { answers, setResult } = this.props;
    if (answers.length === questionsData.length) {
      const result = getResultArr(answers);
      const maxIndex = getMaxIndex(result);
      const resultType = typesData[maxIndex];
      this.setState({
        isTestComplete: true,
        link: `oldham-morris/result${resultType.link}`,
      });
      setResult(result);
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
            {isTestComplete ? (
              <LinkContainer>
                <StyledLink to={link}>Перейти к результату</StyledLink>
              </LinkContainer>
            ) : (
              <p>Необходимо ответить на все вопросы для получения результата.</p>
            )}
          </Section>
        </Container>
      </React.Fragment>
    );
  }
}

OldhamMorris.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      target: PropTypes.arrayOf(PropTypes.number).isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  addAnswer: PropTypes.func.isRequired,
  editAnswer: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  answers: state.answers,
  result: state.result,
});

const mapDispatchToProps = dispatch => ({
  addAnswer: answer => dispatch(actionAddAnswer(answer)),
  editAnswer: answer => dispatch(actionEditAnswer(answer)),
  setResult: result => dispatch(actionSetResult(result)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OldhamMorris);
