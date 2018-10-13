import { combineReducers } from 'redux';
import answers from './answers';
import result from './result';
import isTestComplete from './isTestComplete';

export default combineReducers({
  answers,
  result,
  isTestComplete,
});
