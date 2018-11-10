import {
  ADD_OM_ANSWER,
  EDIT_OM_ANSWER,
  SET_OM_RESULT_ARR,
  SET_OM_TEST_COMPLETE,
  SET_OM_RESULT_TITLE,
} from '../data/constants';

export const addOmAnswer = newAnswer => ({
  type: ADD_OM_ANSWER,
  newAnswer,
});

export const editOmAnswer = changedAnswer => ({
  type: EDIT_OM_ANSWER,
  changedAnswer,
});

export const setOmResultArr = resultArr => ({
  type: SET_OM_RESULT_ARR,
  resultArr,
});

export const setOmTestComplete = bool => ({
  type: SET_OM_TEST_COMPLETE,
  bool,
});

export const setOmResultTitle = title => ({
  type: SET_OM_RESULT_TITLE,
  title,
});
