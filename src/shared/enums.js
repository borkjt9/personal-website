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

// imgSets for portfolioItems
import autopool250 from '../assets/images/autopool-250.jpg';
import autopool500 from '../assets/images/autopool-500.jpg';
import autopool750 from '../assets/images/autopool-750.jpg';
import bankOfAmerica250 from '../assets/images/bank-of-america-250.jpg';
import bankOfAmerica500 from '../assets/images/bank-of-america-500.jpg';
import bankOfAmerica750 from '../assets/images/bank-of-america-750.jpg';
import boonInvestments250 from '../assets/images/boon-investments-250.jpg';
import boonInvestments500 from '../assets/images/boon-investments-500.jpg';
import boonInvestments750 from '../assets/images/boon-investments-750.jpg';
import sunrun250 from '../assets/images/sunrun-250.jpg';
import sunrun500 from '../assets/images/sunrun-500.jpg';
import sunrun750 from '../assets/images/sunrun-750.jpg';
import bloomberg250 from '../assets/images/bloomberg-250.jpg';
import bloomberg500 from '../assets/images/bloomberg-500.jpg';
import bloomberg750 from '../assets/images/bloomberg-750.jpg';
import autoOMS250 from '../assets/images/auto-oms-250.jpg';
import autoOMS500 from '../assets/images/auto-oms-500.jpg';
import autoOMS750 from '../assets/images/auto-oms-750.jpg';
import whiteLabelApps250 from '../assets/images/white-label-apps-250.jpg';
import whiteLabelApps500 from '../assets/images/white-label-apps-500.jpg';
import whiteLabelApps750 from '../assets/images/white-label-apps-750.jpg';

export const portfolioItemImgSets = {
  autopool: {
    img250: autopool250,
    img500: autopool500,
    img750: autopool750,
  },
  'auto-oms': {
    img250: autoOMS250,
    img500: autoOMS500,
    img750: autoOMS750,
  },
  'bank-of-america': {
    img250: bankOfAmerica250,
    img500: bankOfAmerica500,
    img750: bankOfAmerica750,
  },
  'boon-investments': {
    img250: boonInvestments250,
    img500: boonInvestments500,
    img750: boonInvestments750,
  },
  bloomberg: {
    img250: bloomberg250,
    img500: bloomberg500,
    img750: bloomberg750,
  },
  sunrun: {
    img250: sunrun250,
    img500: sunrun500,
    img750: sunrun750,
  },
  'white-label-apps': {
    img250: whiteLabelApps250,
    img500: whiteLabelApps500,
    img750: whiteLabelApps750,
  },
};

export const browserPaths = {
  about: '/about',
  portfolio: '/portfolio',
  'bank-of-america': '/portfolio/bankofamerica',
  'boon-investments': '/portfolio/boon-investments',
  autopool: '/portfolio/autopool',
  sunrun: '/portfolio/sunrun',
  'white-label-apps': '/portfolio/white-label-apps',
  'auto-oms': '/portfolio/auto-oms',
  bloomberg: '/portfolio/bloomberg',
};

export const portfolioIdxMap = {
  bloomberg: 0,
  'boon-investments': 1,
  'auto-oms': 2,
  autopool: 3,
  'white-label-apps': 4,
  'bank-of-america': 5,
  sunrun: 6,
};

export const portfolioArr = [
  {
    name: 'Bloomberg',
    component: 'Bloomberg',
    image: 'bloomberg',
    skills: ['UI/UX', 'Swift', 'Python'],
    href: 'bloomberg',
    nref: 'boon-investments',
    pref: 'sunrun',
    idx: 0,
  },
  {
    name: 'Boon Investments',
    component: 'BoonInvestments',
    image: 'boon-investments',
    skills: ['UI/UX', 'Swift', 'Python'],
    href: 'boon-investments',
    nref: 'auto-oms',
    pref: 'bloomberg',
    idx: 1,
  },
  {
    name: 'Auto-OMS',
    component: 'AutoOMS',
    image: 'auto-oms',
    skills: ['UI/UX', 'Angular', 'AWS'],
    href: 'auto-oms',
    nref: 'autopool',
    pref: 'boon-investments',
    idx: 2,
  },
  {
    name: 'AutoPOOL',
    component: 'AutoPOOL',
    image: 'autopool',
    skills: ['UI/UX', 'Swift', 'App Engine'],
    href: 'autopool',
    nref: 'white-label-apps',
    pref: 'auto-oms',
    idx: 3,
  },
  {
    name: 'White Label Apps',
    component: 'WhiteLabelApps',
    image: 'oshares',
    skills: ['Swift', 'Partnerships'],
    href: 'white-label-apps',
    nref: 'bank-of-america',
    pref: 'autopool',
    idx: 4,
  },
  {
    name: 'Bank of America',
    component: 'BankOfAmerica',
    image: 'bank-of-america',
    skills: ['Modeling', 'Forecasting'],
    href: 'bank-of-america',
    nref: 'sunrun',
    pref: 'white-label-apps',
    idx: 5,
  },
  {
    name: 'Sunrun',
    component: 'Sunrun',
    image: 'sunrun',
    skills: ['FP&A', 'IPO'],
    href: 'sunrun',
    nref: 'bloomberg',
    pref: 'bank-of-america',
    idx: 6,
  },
];

export const components = {
  bloomberg: <Bloomberg />,
  'bank-of-america': <BankOfAmerica />,
  'auto-oms': <AutoOMS />,
  'boon-investments': <BoonInvestments />,
  sunrun: <Sunrun />,
  autopool: <AutoPOOL />,
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
  autopool: true,
  'white-label-apps': true,
};
