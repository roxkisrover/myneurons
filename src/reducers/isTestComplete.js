import { SET_TEST_COMPLETE } from '../data/types';

const isTestComplete = (state = false, action) => {
  switch (action.type) {
    case SET_TEST_COMPLETE:
      return action.bool;

    default:
      return state;
  }
};

export default isTestComplete;
