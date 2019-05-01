import React from 'react';
import Bloomberg from '../portfolio-pages/bloomberg/bloomberg';
import BankOfAmerica from '../portfolio-pages/bank-of-america/bank-of-america';
import Sunrun from '../portfolio-pages/sunrun/sunrun';
import AutoOMS from '../portfolio-pages/auto-oms/auto-oms';
import AutoPOOL from '../portfolio-pages/autopool/autopool';
import BoonInvestments from '../portfolio-pages/boon-investments/boon-investments';
import Mediate from '../portfolio-pages/mediate/mediate';

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
import mediate250 from '../assets/images/mediate-250.jpg';
import mediate500 from '../assets/images/mediate-500.jpg';
import mediate750 from '../assets/images/mediate-750.jpg';
import whiteLabelApps250 from '../assets/images/white-label-apps-250.jpg';
import whiteLabelApps500 from '../assets/images/white-label-apps-500.jpg';
import whiteLabelApps750 from '../assets/images/white-label-apps-750.jpg';

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
  mediate: '/portfolio/mediate',
};
export const portfolioOrder = [
  'bloomberg',
  'mediate',
  'boon-investments',
  'auto-oms',
  'autopool',
  'white-label-apps',
  'bank-of-america',
  'sunrun',
];

export const portfolioItems = {
  bloomberg: {
    name: 'Bloomberg',
    image: 'bloomberg',
    skills: ['JS', 'C++', 'Python'],
    href: 'bloomberg',
    nref: 'mediate',
    pref: 'sunrun',
    imgSet: {
      img250: bloomberg250,
      img500: bloomberg500,
      img750: bloomberg750,
    },
  },
  mediate: {
    name: 'Mediate',
    image: 'mediate',
    skills: ['JS', 'Firebase', 'React'],
    href: 'mediate',
    nref: 'boon-investments',
    pref: 'bloomberg',
    imgSet: {
      img250: mediate250,
      img500: mediate500,
      img750: mediate750,
    },
  },
  'boon-investments': {
    name: 'Boon Investments',
    image: 'boon-investments',
    skills: ['UI/UX', 'Swift', 'Python'],
    href: 'boon-investments',
    nref: 'auto-oms',
    pref: 'mediate',
    imgSet: {
      img250: boonInvestments250,
      img500: boonInvestments500,
      img750: boonInvestments750,
    },
  },
  'auto-oms': {
    name: 'Auto-OMS',
    image: 'auto-oms',
    skills: ['UI/UX', 'JS', 'Angular'],
    href: 'auto-oms',
    nref: 'autopool',
    pref: 'boon-investments',
    imgSet: {
      img250: autoOMS250,
      img500: autoOMS500,
      img750: autoOMS750,
    },
  },
  autopool: {
    name: 'AutoPOOL',
    image: 'autopool',
    skills: ['UI/UX', 'Swift', 'App Engine'],
    href: 'autopool',
    nref: 'white-label-apps',
    pref: 'auto-oms',
    imgSet: {
      img250: autopool250,
      img500: autopool500,
      img750: autopool750,
    },
  },
  'white-label-apps': {
    name: 'White Label Apps',
    image: 'oshares',
    skills: ['Swift', 'Partnerships'],
    href: 'white-label-apps',
    nref: 'bank-of-america',
    pref: 'autopool',
    imgSet: {
      img250: whiteLabelApps250,
      img500: whiteLabelApps500,
      img750: whiteLabelApps750,
    },
  },
  'bank-of-america': {
    name: 'Bank of America',
    image: 'bank-of-america',
    skills: ['Modeling', 'Forecasting'],
    href: 'bank-of-america',
    nref: 'sunrun',
    pref: 'white-label-apps',
    imgSet: {
      img250: bankOfAmerica250,
      img500: bankOfAmerica500,
      img750: bankOfAmerica750,
    },
  },
  sunrun: {
    name: 'Sunrun',
    image: 'sunrun',
    skills: ['FP&A', 'IPO'],
    href: 'sunrun',
    nref: 'bloomberg',
    pref: 'bank-of-america',
    imgSet: {
      img250: sunrun250,
      img500: sunrun500,
      img750: sunrun750,
    },
  },
};

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
  mediate: <Mediate />,
};
