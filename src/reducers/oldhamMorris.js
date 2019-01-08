import {
  ADD_OM_ANSWER,
  EDIT_OM_ANSWER,
  SET_OM_RESULT_TITLE,
  SET_OM_SCORE,
  SET_OM_TEST_COMPLETE,
} from '../data/constants';

export const omAnswers = (state = [], action) => {
  switch (action.type) {
    case ADD_OM_ANSWER:
      return [
        ...state,
        {
          id: action.newAnswer.id,
          target: action.newAnswer.target,
          value: action.newAnswer.value,
        },
      ];

    case EDIT_OM_ANSWER:
      return state.map(answer => (answer.id === action.changedAnswer.id
        ? { ...answer, value: action.changedAnswer.value }
        : answer));

    default:
      return state;
  }
};

export const omScore = (state = [], action) => {
  switch (action.type) {
    case SET_OM_SCORE:
      return action;

    default:
      return state;
  }
};

export const omResultTitle = (state = 'Неопределённый', action) => {
  switch (action.type) {
    case SET_OM_RESULT_TITLE:
      return action;

    default:
      return state;
  }
};

export const isOmTestComplete = (state = false, action) => {
  switch (action.type) {
    case SET_OM_TEST_COMPLETE:
      return action.isComplete;

    default:
      return state;
  }
};
