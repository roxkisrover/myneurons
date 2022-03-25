import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function AnswerButton({
    answerIndex,
    answerText,
    answerValue,
    batchAnswersCount,
    handleActiveIndexChange,
    handleAnswerClick,
    isActive,
    questionId,
    questionTarget,
}) {
    return (
        <div style={{ display: 'inline-block', marginRight: '8px', marginBottom: '12px' }}>
            <Button
                size="small"
                type={isActive ? 'primary' : 'default'}
                onClick={() => {
                    handleAnswerClick(questionId, questionTarget, answerValue);
                    handleActiveIndexChange(answerIndex);
                    batchAnswersCount(questionId);
                }}
            >
                {answerText}
            </Button>
        </div>
    );
}

AnswerButton.propTypes = {
    answerIndex: PropTypes.number.isRequired,
    answerText: PropTypes.string.isRequired,
    answerValue: PropTypes.number.isRequired,
    batchAnswersCount: PropTypes.func.isRequired,
    handleActiveIndexChange: PropTypes.func.isRequired,
    handleAnswerClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTarget: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default AnswerButton;
