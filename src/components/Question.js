import React from 'react';
import AnswerButton from './AnswerButton';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.handleActiveIndexChange = this.handleActiveIndexChange.bind(this);
    this.state = {
      activeAnswerIndex: null,
    };
  }

  handleActiveIndexChange(answerIndex) {
    this.setState({ activeAnswerIndex: answerIndex });
  }

  render() {
    return (
      <div>
        <p>Question</p>
        <AnswerButton />
        <AnswerButton />
        <AnswerButton />
        <hr />
      </div>
    );
  }
}

export default Question;
