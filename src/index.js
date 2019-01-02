import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import rootReducer from './reducers';
import App from './components/App';

const middleware = [];
const logger = createLogger({ collapsed: true });

if (process.env.ENVIRONMENT !== 'production') {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={ruRU}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'),
);
