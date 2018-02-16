import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import Portfolio from './portfolio/portfolio';
import BoonInvestments from './portfolio/portfolio-pages/boon-investments/boon-investments';
import RiaPortal from './portfolio/portfolio-pages/ria-portal/ria-portal';
import AutoPOOL from './portfolio/portfolio-pages/autopool/autopool';
import BankOfAmerica from './portfolio/portfolio-pages/bank-of-america/bank-of-america';
import SunRun from './portfolio/portfolio-pages/sunrun/sunrun';

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
  , document.getElementById('root'));
