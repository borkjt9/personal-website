const portfolioNavRefs = {
  'boon-investments': {
    pref: 'sunrun',
    nref: 'auto-oms',
    index: 0,
  },
  'auto-oms': {
    pref: 'boon-investments',
    nref: 'white-label-apps',
    index: 1,
  },
  autopool: {
    pref: 'white-label-apps',
    nref: 'bank-of-america',
    index: 2,
  },
  'white-label-apps': {
    pref: 'auto-oms',
    nref: 'autopool',
    index: 3,

  },
  'bank-of-america': {
    pref: 'autopool',
    nref: 'sunrun',
    index: 4,
  },
  sunrun: {
    pref: 'bank-of-america',
    nref: 'boon-investments',
    index: 5,
  },
  about: {
    pref: 'boon-investments',
    nref: 'boon-investments',
    index: -1,
  },
  portfolio: {
    pref: 'boon-investments',
    nref: 'boon-investments',
    index: -1,
  },
};

export default portfolioNavRefs;
