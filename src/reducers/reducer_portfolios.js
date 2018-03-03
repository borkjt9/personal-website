export default function () {
  return [
    {
      name: 'Boon Investments',
      image: 'boon-investments',
      skills: ['UI/UX', 'Swift', 'Python'],
      href: 'boon-investments',
      nref: 'ria-portal',
      pref: 'autoPOOL',
    },
    {
      name: 'RIA Portal',
      image: 'auto-oms',
      skills: ['UI/UX', 'Angular', 'AWS'],
      href: 'ria-portal',
      nref: 'white-label-apps',
      pref: 'boon-investments',

    },
    {
      name: 'White Label Apps',
      image: 'oshares',
      skills: ['Swift', 'Partnerships'],
      href: 'white-label-apps',
      nref: 'autoPOOL',
      pref: 'ria-portal',
    },
    {
      name: 'AutoPOOL',
      image: 'autopool',
      skills: ['UI/UX', 'Swift', 'App Engine'],
      href: 'autoPOOL',
      nref: 'bank-of-america',
      pref: 'white-label-apps',
    },
    {
      name: 'Bank of America',
      image: 'bank-of-america',
      skills: ['Modeling', 'Forecasting'],
      href: 'bank-of-america',
      nref: 'sunrun',
      pref: 'autoPOOL',
    },
    {
      name: 'SunRun',
      image: 'sunrun',
      skills: ['FP&A', 'IPO'],
      href: 'sunrun',
      nref: 'boon-investments',
      pref: 'bank-of-america',
    },
  ];
}
