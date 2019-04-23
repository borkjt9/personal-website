import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import 'normalize.css'; // Note this

import App from './App';

import './styles/theme/typography.scss';
import './styles/theme/spacing.scss';
import './styles/base.scss';
import './styles/animations.scss';
import './styles/transitions.scss';


ReactDOM.render(
  <BrowserRouter>
    {App()}
  </BrowserRouter>
  , document.getElementById('root'),
);
