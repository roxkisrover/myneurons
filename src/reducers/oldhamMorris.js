import {
  ADD_OM_ANSWER,
  EDIT_OM_ANSWER,
  SET_OM_RESULT_ARR,
  SET_OM_TEST_COMPLETE,
  SET_OM_RESULT_TITLE,
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
      return state.map(
        answer => (answer.id === action.changedAnswer.id
          ? { ...answer, value: action.changedAnswer.value }
          : answer),
      );

    default:
      return state;
  }
};

export const omResultArr = (state = [], action) => {
  switch (action.type) {
    case SET_OM_RESULT_ARR:
      return action.result;

    default:
      return state;
  }
};

export const omResultTitle = (state = 'Не определён', action) => {
  switch (action.type) {
    case SET_OM_RESULT_TITLE:
      return action.title;

    default:
      return state;
  }
};

export const isOmTestComplete = (state = false, action) => {
  switch (action.type) {
    case SET_OM_TEST_COMPLETE:
      return action.bool;

    default:
      return state;
  }
};
