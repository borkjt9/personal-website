import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , div,
  );
});
