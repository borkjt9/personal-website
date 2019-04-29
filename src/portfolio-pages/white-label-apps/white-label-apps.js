/* eslint-disable global-require */
import React from 'react';
import {
  renderSkillsList,
  renderTimeline,
  renderSummary,
  renderBanner,
  renderProduct,
} from '../portfolio-page';
import './white-label-apps.scss';

import imgTD400 from '../../assets/images/white-label-apps-timeline-desktop-400.jpg';
import imgTD800 from '../../assets/images/white-label-apps-timeline-desktop-800.jpg';
import imgTD1600 from '../../assets/images/white-label-apps-timeline-desktop-1600.jpg';
import imgTM400 from '../../assets/images/white-label-apps-timeline-mobile-400.jpg';
import imgTM800 from '../../assets/images/white-label-apps-timeline-mobile-800.jpg';
import imgTM1600 from '../../assets/images/white-label-apps-timeline-mobile-1600.jpg';

import banner400 from '../../assets/images/white-label-apps-banner-400.jpg';
import banner800 from '../../assets/images/white-label-apps-banner-800.jpg';
import banner1200 from '../../assets/images/white-label-apps-banner-1200.jpg';
import banner1600 from '../../assets/images/white-label-apps-banner-1600.jpg';

const bannerImgSet = {
  banner400,
  banner800,
  banner1200,
  banner1600,
};

const timelineImgSet = {
  imgTD400,
  imgTD800,
  imgTD1600,
  imgTM400,
  imgTM800,
  imgTM1600,
};

function WhiteLabelApps() {
  const summaryBody = 'While CEO of Boon Investments, my team developed multiple white-label applications to pair with our B2B SaaS offering to traditional investment management firms.\n\nAs CEO, I was responsible for negotiating contracts, designing and developing the core white-label template for iOS, and managing the project timelines for the applications we built for partners.';

  const skillsDictionary = {
    Development: ['Swift', 'Python'],
    Technology: ['Xcode', 'Sketch', 'AWS Lambda'],
    General: ['Product Management', 'Design', 'Partnerships', 'Contracts'],
  };

  const beanstox200 = require('../../assets/images/beanstox-sign-up-200.jpg');
  const beanstox400 = require('../../assets/images/beanstox-sign-up-400.jpg');
  const beanstox600 = require('../../assets/images/beanstox-sign-up-600.jpg');

  const astor200 = require('../../assets/images/astor-investment-history-200.jpg');
  const astor400 = require('../../assets/images/astor-investment-history-400.jpg');
  const astor600 = require('../../assets/images/astor-investment-history-600.jpg');

  const productSections = [
    {
      caption: 'OShares ETF Investment',
      description: "Beanstox is an application my team built for O'Shares, the ETF company run by Kevin O'Leary.\n\nFor the Beanstox app, we designed a custom user signup process which incorporated O'Shares' internal investment methodology.",
      img: {
        alt: 'Beanstox application showing the allocation screen',
        classNames: 'white-label-apps__product__iphone-image',
        src: beanstox400,
        srcSet: `${beanstox200} 200w, ${beanstox400} 400w, ${beanstox600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
    {
      caption: 'Astor Investment Management',
      description: "Astor served as the pilot project for Boon's white label applications. They are a registered investment advisor that provides client services to over $2 billion in client assets.\n\nThe first client is always the hardest. For the Astor deal, most of my time was spent getting product deadlines to match with partner expectations, and vice versa. Developing the actual app was surprisingly easy in comparison.",
      img: {
        alt: 'Astor application showing the investment detail screen',
        classNames: 'white-label-apps__product__iphone-image',
        src: astor200,
        srcSet: `${astor200} 200w, ${astor400} 400w, ${astor600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
  ];

  return (
    <div className="portfolio-page white-label-apps">
      <div className="portfolio-page__body">
        {renderBanner(bannerImgSet, 'white label apps')}
        {renderSummary(summaryBody)}
        {renderProduct(productSections)}
        {renderTimeline('white-label-apps', timelineImgSet)}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default WhiteLabelApps;
