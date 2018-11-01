import { combineReducers } from 'redux';
import answers from './answers';
import isTestComplete from './isTestComplete';
import result from './result';
import title from './title';

export default combineReducers({
  answers,
  isTestComplete,
  result,
  title,
});
