import { ADD_ANSWER, EDIT_ANSWER, SET_RESULT } from '../data/types';

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
