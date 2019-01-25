import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/state/createStore';

const store = createStore();

// eslint-disable-next-line
export default ({ element }) => <Provider store={store}>{element}</Provider>;
