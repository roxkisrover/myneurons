import { SET_TEST_COMPLETE } from '../data/constants';

const isTestComplete = (state = false, action) => {
  switch (action.type) {
    case SET_TEST_COMPLETE:
      return action.bool;

    default:
      return state;
  }
};

export default isTestComplete;
