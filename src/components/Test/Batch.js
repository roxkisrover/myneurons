import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import Question from './Question';

class Batch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            batchIndex: 0,
            batchAnswers: [],
        };
        this.batchAnswersCount = this.batchAnswersCount.bind(this);
        this.handleButtonNextClick = this.handleButtonNextClick.bind(this);
    }

    handleButtonNextClick() {
        const { batchIndex } = this.state;
        const {
            progressIncrement,
            progressPercent,
            questionsBatchCount,
            setProgressPercent,
        } = this.props;

        if (batchIndex < questionsBatchCount) {
            this.setState({
                batchIndex: batchIndex + 1,
                batchAnswers: [],
            });
            setProgressPercent(progressPercent + progressIncrement);
        }

        document.getElementById('progress').scrollIntoView();
    }

    batchAnswersCount(questionId) {
        const { batchAnswers } = this.state;

        if (!batchAnswers.includes(questionId)) {
            this.setState({ batchAnswers: [...batchAnswers, questionId] });
        }
    }

    render() {
        const { batchIndex, batchAnswers } = this.state;
        const {
            slicedQuestions,
            answersData,
            questionsBatchCount,
            questionsBatchLength,
            handleAnswerClick,
        } = this.props;

        return (
            <>
                {slicedQuestions[batchIndex].map((question) => (
                    <Question
                        answersData={answersData}
                        batchAnswersCount={this.batchAnswersCount}
                        handleAnswerClick={handleAnswerClick}
                        key={question.id}
                        questionId={question.id}
                        questionTarget={question.target}
                        questionText={question.text}
                    />
                ))}

                {questionsBatchCount - batchIndex > 1 && (
                    <div style={{ textAlign: 'right' }}>
                        <Button
                            disabled={batchAnswers.length < questionsBatchLength}
                            onClick={this.handleButtonNextClick}
                        >
                            Дальше
                            <Icon type="right" />
                        </Button>
                    </div>
                )}
            </>
        );
    }
}

Batch.propTypes = {
    answersData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            value: PropTypes.number,
            text: PropTypes.string,
        }),
    ).isRequired,
    progressPercent: PropTypes.number.isRequired,
    progressIncrement: PropTypes.number.isRequired,
    questionsBatchCount: PropTypes.number.isRequired,
    questionsBatchLength: PropTypes.number.isRequired,
    setProgressPercent: PropTypes.func.isRequired,
    slicedQuestions: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                target: PropTypes.arrayOf(PropTypes.number),
                text: PropTypes.string,
            }),
        ),
    ).isRequired,
    handleAnswerClick: PropTypes.func.isRequired,
};

export default Batch;
