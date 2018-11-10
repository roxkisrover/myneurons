import { combineReducers } from 'redux';
import {
  omAnswers, omResultArr, omResultTitle, isOmTestComplete,
} from './oldhamMorris';

export default combineReducers({
  omAnswers,
  omResultArr,
  omResultTitle,
  isOmTestComplete,
});
