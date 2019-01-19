import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const middleware = [];
const logger = createLogger({ collapsed: true });

if (process.env.ENVIRONMENT !== 'production') {
  middleware.push(logger);
}

const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(...middleware));

export default createStore;
