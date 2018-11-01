import { SET_TITLE } from '../data/constants';

const title = (state = 'Тестовый', action) => {
  switch (action.type) {
    case SET_TITLE:
      return action.title;

    default:
      return state;
  }
};

export default title;
