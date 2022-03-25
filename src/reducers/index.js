import { combineReducers } from 'redux';
import { omScore, isOmTestComplete } from './oldhamMorris';

export default combineReducers({
    omScore,
    isOmTestComplete,
});
