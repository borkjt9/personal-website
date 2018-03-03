import React, { Component } from 'react';
import logo from './logo.svg';

import './App.scss';
import 'normalize.css'; // Note this
import './styles/theme/typography.scss';
import './styles/theme/spacing.scss';
import './styles/theme/links.scss';
import './styles/theme/portfolios.scss';

import './styles/base.scss';
import './styles/animations.scss';
import './styles/transitions.scss';


import LandingPage from './landing-page/landing-page';

class App extends Component {
  render() {
    return (

      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
