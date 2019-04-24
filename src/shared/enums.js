import React from 'react';
import BankOfAmerica from '../portfolio-pages/bank-of-america/bank-of-america';
import Sunrun from '../portfolio-pages/sunrun/sunrun';
import AutoOMS from '../portfolio-pages/auto-oms/auto-oms';
import AutoPOOL from '../portfolio-pages/autopool/autopool';
import BoonInvestments from '../portfolio-pages/boon-investments/boon-investments';
import WhiteLabelApps from '../portfolio-pages/white-label-apps/white-label-apps';
import PortfolioGrid from '../portfolio-grid/portfolio-grid';
import About from '../about/about';

export const browserPaths = {
  about: '/about',
  portfolio: '/portfolio',
  'bank-of-america': '/portfolio/bankofamerica',
  'boon-investments': '/portfolio/boon-investments',
  autoPOOL: '/portfolio/autoPOOL',
  sunrun: '/portfolio/sunrun',
  'white-label-apps': '/portfolio/white-label-apps',
  'auto-oms': '/portfolio/auto-oms',
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
    idx: 0,
  },
  {
    name: 'Auto-OMS',
    component: 'AutoOMS',
    image: 'auto-oms',
    skills: ['UI/UX', 'Angular', 'AWS'],
    href: 'auto-oms',
    nref: 'white-label-apps',
    pref: 'boon-investments',
    idx: 1,
  },
  {
    name: 'AutoPOOL',
    component: 'AutoPOOL',
    image: 'autopool',
    skills: ['UI/UX', 'Swift', 'App Engine'],
    href: 'autoPOOL',
    nref: 'bank-of-america',
    pref: 'white-label-apps',
    idx: 2,
  },
  {
    name: 'White Label Apps',
    component: 'WhiteLabelApps',
    image: 'oshares',
    skills: ['Swift', 'Partnerships'],
    href: 'white-label-apps',
    nref: 'autoPOOL',
    pref: 'auto-oms',
    idx: 3,
  },
  {
    name: 'Bank of America',
    component: 'BankOfAmerica',
    image: 'bank-of-america',
    skills: ['Modeling', 'Forecasting'],
    href: 'bank-of-america',
    nref: 'sunrun',
    pref: 'autoPOOL',
    idx: 4,
  },
  {
    name: 'Sunrun',
    component: 'Sunrun',
    image: 'sunrun',
    skills: ['FP&A', 'IPO'],
    href: 'sunrun',
    nref: 'boon-investments',
    pref: 'bank-of-america',
    idx: 5,
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
