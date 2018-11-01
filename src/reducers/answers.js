import { ADD_ANSWER, EDIT_ANSWER } from '../data/constants';

const answers = (state = [], action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return [
        ...state,
        {
          id: action.newAnswer.id,
          target: action.newAnswer.target,
          value: action.newAnswer.value,
        },
      ];

    case EDIT_ANSWER:
      return state.map(
        answer => (answer.id === action.changedAnswer.id
          ? { ...answer, value: action.changedAnswer.value }
          : answer),
      );

    default:
      return state;
  }
};

export default answers;
