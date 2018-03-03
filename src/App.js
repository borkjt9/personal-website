import React from 'react';

import 'normalize.css'; // Note this
import './App.scss';
import './styles/theme/typography.scss';
import './styles/theme/spacing.scss';
import './styles/theme/links.scss';
import './styles/theme/portfolios.scss';

import './styles/base.scss';
import './styles/animations.scss';
import './styles/transitions.scss';


import LandingPage from './landing-page/landing-page';

const App = () => (
  <div className="App">
    <LandingPage />
  </div>
);

export default App;
