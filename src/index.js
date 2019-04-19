import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import 'normalize.css'; // Note this

import App from './App';
import Portfolio from './portfolio/portfolio';
import Blog from './blog/blog';

import './styles/theme/typography.scss';
import './styles/theme/spacing.scss';
import './styles/base.scss';
import './styles/animations.scss';
import './styles/transitions.scss';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/home/:activeSection" component={App} />
        <Route path="/home" component={App} />
        <Route path="/blog/:postID" component={Blog} />
        <Route path="/blog/" component={Blog} />
        <Route path="/portfolio/:portfolioID" component={Portfolio} />
        <Route path="/:portfolioID" component={Portfolio} />
        <Route path="/portfolio/" component={Portfolio} />
        <Route
          path="/"
          render={() => (
            <Redirect to="/home" />
        )}
        />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'),
);
