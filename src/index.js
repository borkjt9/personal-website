import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import 'normalize.css'; // Note this

import App from './app/app';

import './shared/styles/theme/typography.scss';
import './shared/styles/theme/spacing.scss';
import './shared/styles/base.scss';
import './shared/styles/animations.scss';
import './shared/styles/transitions.scss';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={App} />
      <Route path="/portfolio/:activeSection" component={App} />
      <Route path="/portfolio" component={App} />
      <Route path="/about" component={App} />

      <Route
        path="/"
        render={() => (
          <Redirect to="/home" />
        )}
      />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'),
);
