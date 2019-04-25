import React from 'react';
import Bloomberg from '../portfolio-pages/bloomberg/bloomberg';
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
  bloomberg: '/portfolio/bloomberg',
};

export const portfolioArr = [
  {
    name: 'Bloomberg',
    component: 'Bloomberg',
    image: 'bloomberg',
    skills: ['UI/UX', 'Swift', 'Python'],
    href: 'bloomberg',
    nref: 'boon-investments',
    pref: 'autoPOOL',
    idx: 1,
  },
  {
    name: 'Boon Investments',
    component: 'BoonInvestments',
    image: 'boon-investments',
    skills: ['UI/UX', 'Swift', 'Python'],
    href: 'boon-investments',
    nref: 'auto-oms',
    pref: 'bloomberg',
    idx: 2,
  },
  {
    name: 'Auto-OMS',
    component: 'AutoOMS',
    image: 'auto-oms',
    skills: ['UI/UX', 'Angular', 'AWS'],
    href: 'auto-oms',
    nref: 'white-label-apps',
    pref: 'boon-investments',
    idx: 3,
  },
  {
    name: 'AutoPOOL',
    component: 'AutoPOOL',
    image: 'autopool',
    skills: ['UI/UX', 'Swift', 'App Engine'],
    href: 'autoPOOL',
    nref: 'bank-of-america',
    pref: 'white-label-apps',
    idx: 4,
  },
  {
    name: 'White Label Apps',
    component: 'WhiteLabelApps',
    image: 'oshares',
    skills: ['Swift', 'Partnerships'],
    href: 'white-label-apps',
    nref: 'autoPOOL',
    pref: 'auto-oms',
    idx: 5,
  },
  {
    name: 'Bank of America',
    component: 'BankOfAmerica',
    image: 'bank-of-america',
    skills: ['Modeling', 'Forecasting'],
    href: 'bank-of-america',
    nref: 'sunrun',
    pref: 'autoPOOL',
    idx: 6,
  },
  {
    name: 'Sunrun',
    component: 'Sunrun',
    image: 'sunrun',
    skills: ['FP&A', 'IPO'],
    href: 'sunrun',
    nref: 'bloomberg',
    pref: 'bank-of-america',
    idx: 7,
  },
];

export const components = {
  bloomberg: <Bloomberg />,
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
  bloomberg: true,
  'bank-of-america': true,
  'auto-oms': true,
  'boon-investments': true,
  sunrun: true,
  autoPOOL: true,
  'white-label-apps': true,
};
