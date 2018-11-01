import { SET_RESULT } from '../data/constants';

const result = (state = [], action) => {
  switch (action.type) {
    case SET_RESULT:
      return action.result;

    default:
      return state;
  }
};

export default result;
