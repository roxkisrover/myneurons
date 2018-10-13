import {
  ADD_ANSWER, EDIT_ANSWER, SET_RESULT, SET_TEST_COMPLETE,
} from '../data/types';

export const actionAddAnswer = newAnswer => ({
  type: ADD_ANSWER,
  newAnswer,
});

export const actionEditAnswer = changedAnswer => ({
  type: EDIT_ANSWER,
  changedAnswer,
});

export const actionSetResult = result => ({
  type: SET_RESULT,
  result,
});

export const actionSetTestComplete = bool => ({
  type: SET_TEST_COMPLETE,
  bool,
});
