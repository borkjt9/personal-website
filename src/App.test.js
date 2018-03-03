import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>, div);
});
