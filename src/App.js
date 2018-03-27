import React from 'react';
// Normalize.css for additional detail, see https://necolas.github.io/normalize.css/
import 'normalize.css';
import './App.scss';
import './styles/theme/typography.scss';
import './styles/theme/spacing.scss';

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
