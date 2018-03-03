import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import 'normalize.css'; // Note this

import App from './App';
import reducers from './reducers';
import Portfolio from './portfolio/portfolio';
import './styles/theme/typography.scss';
import './styles/theme/spacing.scss';
import './styles/theme/links.scss';
import './styles/theme/portfolios.scss';

import './styles/base.scss';
import './styles/animations.scss';
import './styles/transitions.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/home" component={App} />
          <Route path="/portfolio/:portfolioID" component={Portfolio} />
          <Route path="/portfolio/" component={Portfolio} />

          {/* <Route path="/boon-investments" component={BoonInvestments} />
        <Route path="/ria-portal" component={RiaPortal} />
        <Route path="/autopool" component={AutoPOOL} />
        <Route path="/bank-of-america" component={BankOfAmerica} />
        <Route path="/sunrun" component={SunRun} /> */}

          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
);
