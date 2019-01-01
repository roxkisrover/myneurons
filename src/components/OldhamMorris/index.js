import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import findIndex from 'lodash/findIndex';
import {
  Breadcrumb, Icon, Tooltip, Progress, Divider, Button,
} from 'antd';
import omQuestionsData from '../../data/oldhamMorris/questions';
import omAnswersData from '../../data/oldhamMorris/answers';
import omTypesData from '../../data/oldhamMorris/types';
import { getIndexOfMaxValue, getResultArr } from '../../lib/oldhamMorris';
import Container from '../Container';
import Batch from '../Test/Batch';
import * as actions from '../../actions/oldhamMorris';

const Branding = styled.span`
  color: #ff6101;
`;

const ButtonContainer = styled.div`
  margin-bottom: 90px;
  text-align: center;
`;

class OldhamMorris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsCount: omQuestionsData.length,
      progressPercent: 0,
      resultLink: '/',
    };
    this.setProgressPercent = this.setProgressPercent.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { questionsCount } = this.state;
    const { omAnswers } = this.props;

    if (omAnswers !== prevProps.omAnswers && omAnswers.length === questionsCount) {
      this.calculateResult();
    }
  }

  setProgressPercent(percent) {
    this.setState({ progressPercent: percent });
  }

  handleAnswerClick(questionId, questionTarget, answerValue) {
    const { omAnswers, addOmAnswer, editOmAnswer } = this.props;
    const answerIndex = findIndex(omAnswers, ['id', questionId]);

    if (answerIndex >= 0) {
      if (answerValue !== omAnswers[answerIndex].value) {
        editOmAnswer({ id: questionId, value: answerValue });
      }
    } else {
      addOmAnswer({ id: questionId, target: questionTarget, value: answerValue });
    }
  }

  calculateResult() {
    const {
      match, omAnswers, setOmResultArr, setOmTestComplete, setOmResultTitle,
    } = this.props;
    const resultArr = getResultArr(omAnswers);
    const maxIndex = getIndexOfMaxValue(resultArr);
    const resultType = omTypesData[maxIndex];
    const resultTitle = resultType.title;

    setOmResultArr(resultArr);
    setOmResultTitle(resultTitle);
    setOmTestComplete(true);
    this.setState({
      progressPercent: 100,
      resultLink: `${match.url}${resultType.link}`,
    });
  }

  render() {
    const { questionsCount, progressPercent, resultLink } = this.state;
    const { isOmTestComplete } = this.props;
    const questionsBatchLength = 15;
    const questionsBatchCount = Math.ceil(questionsCount / questionsBatchLength);
    const progressIncrement = 100 / questionsBatchCount;

    return (
      <React.Fragment>
        <Helmet>
          <title>myneurons | Тест Олдхэма-Морриса</title>
        </Helmet>

        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <Icon type="home" />
              <Branding>myneurons</Branding>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Icon type="form" />
              <span>Тест Олдхэма-Морриса</span>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Divider />

          <h1>Методика Олдхэма-Морриса</h1>
          <h3>
            Ваша личность уникальна. Используйте этот тест для определения своего преобладающего
            типа.
          </h3>
          <Divider dashed />
          <p>
            Тест содержит <strong>{questionsCount} вопросов</strong>, на которые нужно ответить,
            хорошенько обдумывая каждый. Постарайтесь сделать это максимально точно и честно. Ваш
            автопортрет будет настолько же точным, насколько правдивыми будут ответы. Даже если вы
            считаете, что вопрос не касается вас или вашей личной жизни, отвечайте так, как если бы
            он имел к вам отношение.
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
            Отвечайте <em>«Нет, я не согласен»</em>, если утверждение совершенно вам не подходит.
          </p>

          <Divider dashed />

          <Tooltip title={`Прогресс выполнения: ${Math.floor(progressPercent)}%`}>
            <Progress id="progress" percent={progressPercent} showInfo={false} />
          </Tooltip>

          <Divider />

          <Batch
            answersData={omAnswersData}
            progressPercent={progressPercent}
            progressIncrement={progressIncrement}
            questionsData={omQuestionsData}
            questionsBatchLength={questionsBatchLength}
            questionsCount={questionsCount}
            questionsBatchCount={questionsBatchCount}
            setProgressPercent={this.setProgressPercent}
            handleAnswerClick={this.handleAnswerClick}
          />

          <ButtonContainer>
            {isOmTestComplete && (
              <Button type="primary" href={resultLink}>
                Перейти к результату
              </Button>
            )}
          </ButtonContainer>
        </Container>
      </React.Fragment>
    );
  }
}

OldhamMorris.propTypes = {
  omAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      target: PropTypes.arrayOf(PropTypes.number).isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  isOmTestComplete: PropTypes.bool,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  addOmAnswer: PropTypes.func.isRequired,
  editOmAnswer: PropTypes.func.isRequired,
  setOmResultArr: PropTypes.func.isRequired,
  setOmTestComplete: PropTypes.func.isRequired,
  setOmResultTitle: PropTypes.func.isRequired,
};

OldhamMorris.defaultProps = {
  isOmTestComplete: false,
};

const mapStateToProps = state => ({
  omAnswers: state.omAnswers,
  isOmTestComplete: state.isOmTestComplete,
  omResultArr: state.omResultArr,
});

const mapDispatchToProps = dispatch => ({
  addOmAnswer: answer => dispatch(actions.addOmAnswer(answer)),
  editOmAnswer: answer => dispatch(actions.editOmAnswer(answer)),
  setOmResultArr: resultArr => dispatch(actions.setOmResultArr(resultArr)),
  setOmTestComplete: bool => dispatch(actions.setOmTestComplete(bool)),
  setOmResultTitle: title => dispatch(actions.setOmResultTitle(title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OldhamMorris);
