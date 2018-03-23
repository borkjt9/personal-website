const portfolioNavRefs = {
  'boon-investments': {
    pref: 'sunrun',
    nref: 'ria-portal',
    index: 0,
  },
  'ria-portal': {
    pref: 'boon-investments',
    nref: 'white-label-apps',
    index: 1,
  },
  'white-label-apps': {
    pref: 'ria-portal',
    nref: 'autoPOOL',
    index: 2,

  },
  autoPOOL: {
    pref: 'white-label-apps',
    nref: 'bank-of-america',
    index: 3,
  },
  'bank-of-america': {
    pref: 'autoPOOL',
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
