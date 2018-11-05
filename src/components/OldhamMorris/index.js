import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import findIndex from 'lodash/findIndex';
import {
  Breadcrumb, Icon, Tooltip, Progress, Divider, Button,
} from 'antd';
import {
  actionAddAnswer,
  actionEditAnswer,
  actionSetResult,
  actionSetTestComplete,
  actionSetTitle,
} from '../../actions';
import Question from './Question';
import { answersData, questionsData, typesData } from '../../data/oldhamMorris';
import { getMaxIndex, getResultArr } from '../../lib/oldhamMorris';
import Container from '../Container';

const LinkContainer = styled.div`
  margin-bottom: 90px;
  text-align: center;
`;

class OldhamMorris extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.state = {
      progressPercent: 0,
      resultLink: '/',
    };
  }

  componentDidUpdate(prevProps) {
    const { answers } = this.props;
    if (answers !== prevProps.answers && answers.length === questionsData.length) {
      this.calculateResult();
    }
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
  }

  calculateResult() {
    const {
      answers, match, setResult, setTestComplete, setTitle,
    } = this.props;
    const result = getResultArr(answers);
    const maxIndex = getMaxIndex(result);
    const resultType = typesData[maxIndex];
    const resultTitle = resultType.title;
    setResult(result);
    setTitle(resultTitle);
    setTestComplete(true);
    this.setState({
      resultLink: `${match.url}${resultType.link}`,
    });
  }

  render() {
    const { progressPercent, resultLink } = this.state;
    const { isTestComplete } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>myneurons | Тест Олдхэма-Морриса</title>
        </Helmet>

        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Icon type="form" />
              <span>Тест Олдхэма-Морриса</span>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Tooltip title={`Прогресс выполнения: ${progressPercent}%`}>
            <Progress percent={progressPercent} />
          </Tooltip>

          <h1>Методика Олдхэма-Морриса</h1>
          <h3>
            Ваша личность уникальна. Используйте этот тест для определения своего преобладающего
            типа.
          </h3>
          <Divider dashed />
          <p>
            Тест содержит <strong>107 вопросов</strong>, на которые нужно ответить, хорошенько
            обдумывая каждый. Постарайтесь сделать это максимально точно и честно. Ваш автопортрет
            будет настолько же точным, насколько правдивыми будут ответы. Даже если вы считаете, что
            вопрос не касается вас или вашей личной жизни, отвечайте так, как если бы он имел к вам
            отношение.
          </p>
          <p>
            Некоторые вопросы могут показаться слишком личными, – помните, что ответы на каждый
            отдельный вопрос нигде не сохраняются, и никто (даже вы сами) не сможет их увидеть по
            окончании теста.
          </p>
          <p>
            Отвечайте <em>«Да, я согласен»</em>, если утверждение совершенно верно для вас в
            большинстве случаев.
          </p>
          <p>
            Отвечайте <em>«Может быть, я согласен»</em>, если утверждение иногда, в каких-то случаях
            верно для вас. Также используйте этот ответ для утверждений, состоящих из нескольких
            частей, если вы согласны с одной частью, но не согласны с другой.
          </p>
          <p>
            Отвечайте <em>«Нет, я не согласен»</em>, если утверждение совершенно ложно для вас.
          </p>
          <Divider dashed />

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
              <Button type="primary" href={resultLink}>
                Перейти к результату
              </Button>
            </LinkContainer>
          ) : (
            <p>Необходимо ответить на все вопросы для получения результата.</p>
          )}
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
  isTestComplete: PropTypes.bool,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  setResult: PropTypes.func.isRequired,
  setTestComplete: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};

OldhamMorris.defaultProps = {
  isTestComplete: false,
};

const mapStateToProps = state => ({
  answers: state.answers,
  isTestComplete: state.isTestComplete,
  result: state.result,
});

const mapDispatchToProps = dispatch => ({
  addAnswer: answer => dispatch(actionAddAnswer(answer)),
  editAnswer: answer => dispatch(actionEditAnswer(answer)),
  setResult: result => dispatch(actionSetResult(result)),
  setTestComplete: bool => dispatch(actionSetTestComplete(bool)),
  setTitle: title => dispatch(actionSetTitle(title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OldhamMorris);
