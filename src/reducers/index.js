import { combineReducers } from 'redux';
import {
  omAnswers, omScore, omResultTitle, isOmTestComplete,
} from './oldhamMorris';

export default combineReducers({
  omAnswers,
  omScore,
  omResultTitle,
  isOmTestComplete,
});
