import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import 'normalize.css'; // Note this

import App from './App';
import Portfolio from './portfolio/portfolio';
import './styles/theme/typography.scss';
import './styles/theme/spacing.scss';
import './styles/theme/links.scss';
import './styles/theme/portfolios.scss';

import './styles/base.scss';
import './styles/animations.scss';
import './styles/transitions.scss';



ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/home/:activeLink" component={App} />
        <Route path="/home" component={App} />
        <Route path="/portfolio/:portfolioID" component={Portfolio} />
        <Route path="/:portfolioID" component={Portfolio} />
        <Route path="/portfolio/" component={Portfolio} />
        <Route path="/" render={() => (
          <Redirect to="/home"/>
        )}/>
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'),
);
