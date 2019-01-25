import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import update from 'immutability-helper';
import {
  Breadcrumb, Icon, Tooltip, Progress, Divider, Collapse,
} from 'antd';
import SEO from '../../components/SEO';
import Container from '../../components/Container';
import Batch from '../../components/Test/Batch';

import { omQuestionsData, omQuestionsMeta } from '../../data/oldhamMorris/questions';
import omAnswersData from '../../data/oldhamMorris/answers';
import omTypesData from '../../data/oldhamMorris/types';
import { getScore, getIndexOfMaxValue } from '../../lib/oldhamMorris';
import * as actions from '../../actions/oldhamMorris';

class OldhamMorris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      progressPercent: 0,
      questionsBatchLength: omQuestionsMeta.questionsBatchLength,
      questionsCount: omQuestionsMeta.questionsCount,
      resultSlug: '/',
      slicedQuestions: null,
    };
    this.setProgressPercent = this.setProgressPercent.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
  }

  componentDidMount() {
    const { questionsCount, questionsBatchLength } = this.state;
    const slicedQuestions = [];

    for (let i = 0; i < questionsCount; i += questionsBatchLength) {
      slicedQuestions.push(omQuestionsData.slice(i, i + questionsBatchLength));
    }
    this.setState({ slicedQuestions });
  }

  componentDidUpdate(prevProps, prevState) {
    const { answers, questionsCount } = this.state;

    if (answers !== prevState.answers && answers.length === questionsCount) {
      this.calculateResult();
    }
  }

  setProgressPercent(percent) {
    this.setState({ progressPercent: percent });
  }

  handleAnswerClick(questionId, questionTarget, answerValue) {
    const { answers } = this.state;
    const answerIndex = answers.findIndex(answer => answer.id === questionId.id);

    if (answerIndex >= 0) {
      const updatedAnswers = update(answers, { [answerIndex]: { value: { $set: answerValue } } });
      this.setState({ answers: updatedAnswers });
    } else {
      this.setState({
        answers: [...answers, { id: questionId, target: questionTarget, value: answerValue }],
      });
    }
  }

  calculateResult() {
    const { answers } = this.state;
    const { setOmScore, setOmTestComplete } = this.props;
    const { falseLimit } = omQuestionsMeta;
    const score = getScore(answers, omTypesData.length);
    const maxIndex = getIndexOfMaxValue(score);
    const resultType = score[0] > falseLimit ? omTypesData[0] : omTypesData[maxIndex];

    setOmScore(score);
    setOmTestComplete(true);

    this.setState({
      progressPercent: 100,
      resultSlug: resultType.slug,
    });
  }

  render() {
    const {
      slicedQuestions,
      questionsCount,
      questionsBatchLength,
      progressPercent,
      resultSlug,
    } = this.state;
    const { isOmTestComplete } = this.props;
    const questionsBatchCount = Math.ceil(questionsCount / questionsBatchLength);
    const progressIncrement = 100 / questionsBatchCount;

    return (
      <React.Fragment>
        <SEO title="Тест Олдхэма-Морриса" />

        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <Icon type="home" />
              <span style={{ color: '#ff6101' }}>myneurons</span>
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

          <Collapse defaultActiveKey={['1']}>
            <Collapse.Panel header="Описание" key="1">
              <p>
                Тест содержит <strong>{questionsCount} вопросов</strong>, на которые нужно ответить,
                хорошенько обдумывая каждый. Постарайтесь сделать это максимально точно и честно.
                Ваш автопортрет будет настолько же точным, насколько правдивыми будут ответы. Даже
                если вы считаете, что вопрос не касается вас или вашей личной жизни, отвечайте так,
                как если бы он имел к вам отношение.
              </p>
              <p>
                Некоторые вопросы могут показаться слишком личными, – помните, что ответы на каждый
                отдельный вопрос нигде не сохраняются, и никто (даже вы сами) не сможет их увидеть
                по окончании теста.
              </p>
              <p>
                Отвечайте <em>«Да, я согласен»</em>, если утверждение совершенно верно для вас в
                большинстве случаев.
              </p>
              <p>
                Отвечайте <em>«Может быть, я согласен»</em>, если утверждение иногда, в каких-то
                случаях верно для вас. Также используйте этот ответ для утверждений, состоящих из
                нескольких частей, если вы согласны с одной частью, но не согласны с другой.
              </p>
              <p>
                Отвечайте <em>«Нет, я не согласен»</em>, если утверждение совершенно вам не
                подходит.
              </p>
            </Collapse.Panel>
          </Collapse>

          <Divider />

          <Tooltip title={`Прогресс выполнения: ${Math.floor(progressPercent)}%`}>
            <Progress id="progress" percent={progressPercent} showInfo={false} />
          </Tooltip>

          <Divider />

          {slicedQuestions && (
            <Batch
              answersData={omAnswersData}
              handleAnswerClick={this.handleAnswerClick}
              progressIncrement={progressIncrement}
              progressPercent={progressPercent}
              questionsBatchCount={questionsBatchCount}
              questionsBatchLength={questionsBatchLength}
              setProgressPercent={this.setProgressPercent}
              slicedQuestions={slicedQuestions}
            />
          )}

          <div style={{ marginBottom: '90px', textAlign: 'center' }}>
            {isOmTestComplete && (
              <Link className="ant-btn ant-btn-primary" to={`/oldham-morris/types/${resultSlug}`}>
                Перейти к результату
              </Link>
            )}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

OldhamMorris.propTypes = {
  isOmTestComplete: PropTypes.bool,
  setOmScore: PropTypes.func.isRequired,
  setOmTestComplete: PropTypes.func.isRequired,
};

OldhamMorris.defaultProps = {
  isOmTestComplete: false,
};

const mapStateToProps = state => ({
  isOmTestComplete: state.isOmTestComplete,
  omAnswers: state.omAnswers,
  OmScore: state.OmScore,
});

const mapDispatchToProps = dispatch => ({
  setOmScore: score => dispatch(actions.setOmScore(score)),
  setOmTestComplete: isComplete => dispatch(actions.setOmTestComplete(isComplete)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OldhamMorris);
