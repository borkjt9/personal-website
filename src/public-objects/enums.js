import React from 'react';
import BankOfAmerica from '../portfolio/portfolio-pages/bank-of-america/bank-of-america';
import Sunrun from '../portfolio/portfolio-pages/sunrun/sunrun';
import AutoOMS from '../portfolio/portfolio-pages/auto-oms/auto-oms';
import AutoPOOL from '../portfolio/portfolio-pages/autopool/autopool';
import BoonInvestments from '../portfolio/portfolio-pages/boon-investments/boon-investments';
import WhiteLabelApps from '../portfolio/portfolio-pages/white-label-apps/white-label-apps';
import PortfolioGrid from '../portfolio/portfolio-grid/portfolio-grid';
import About from '../about/about';
222222222
export const browserPaths = {
  about: '/about',
  portfolio: '/portfolio',
  home: '/home',
  'bank-of-america': 'portfolio/bankofamerica',
  'boon-investments': 'portfolio/booninvestments',
  autoPOOL: 'portfolio/autoPOOL',
};

export const portfolioArr = [
  {
    name: 'Boon Investments',
    component: 'BoonInvestments',
    image: 'boon-investments',
    skills: ['UI/UX', 'Swift', 'Python'],
    href: 'boon-investments',
    nref: 'auto-oms',
    pref: 'autoPOOL',
  },
  {
    name: 'Auto-OMS',
    component: 'AutoOMS',
    image: 'auto-oms',
    skills: ['UI/UX', 'Angular', 'AWS'],
    href: 'auto-oms',
    nref: 'white-label-apps',
    pref: 'boon-investments',

  },
  {
    name: 'AutoPOOL',
    component: 'AutoPOOL',
    image: 'autopool',
    skills: ['UI/UX', 'Swift', 'App Engine'],
    href: 'autoPOOL',
    nref: 'bank-of-america',
    pref: 'white-label-apps',
  },
  {
    name: 'White Label Apps',
    component: 'WhiteLabelApps',
    image: 'oshares',
    skills: ['Swift', 'Partnerships'],
    href: 'white-label-apps',
    nref: 'autoPOOL',
    pref: 'auto-oms',
  },
  {
    name: 'Bank of America',
    component: 'BankOfAmerica',
    image: 'bank-of-america',
    skills: ['Modeling', 'Forecasting'],
    href: 'bank-of-america',
    nref: 'sunrun',
    pref: 'autoPOOL',
  },
  {
    name: 'Sunrun',
    component: 'Sunrun',
    image: 'sunrun',
    skills: ['FP&A', 'IPO'],
    href: 'sunrun',
    nref: 'boon-investments',
    pref: 'bank-of-america',
  },
];

export const components = {
  'bank-of-america': <BankOfAmerica />,
  'auto-oms': <AutoOMS />,
  'boon-investments': <BoonInvestments />,
  sunrun: <Sunrun />,
  autoPOOL: <AutoPOOL />,
  'white-label-apps': <WhiteLabelApps />,
  portfolio: <PortfolioGrid />,
  about: <About />,
};

export const portfolioItems = {
  'bank-of-america': true,
  'auto-oms': true,
  'boon-investments': true,
  sunrun: true,
  autoPOOL: true,
  'white-label-apps': true,
};
