/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React from 'react';
import {
  renderSkillsList,
  renderSummary,
  renderBanner,
  renderProduct,
} from '../portfolio-page';

import './bloomberg.scss';

import billions200 from '../../assets/images/billions-200.jpg';
import billions400 from '../../assets/images/billions-400.jpg';
import billions600 from '../../assets/images/billions-600.jpg';

import terminal200 from '../../assets/images/bloomberg-terminal-200.jpg';
import terminal400 from '../../assets/images/bloomberg-terminal-400.jpg';
import terminal600 from '../../assets/images/bloomberg-terminal-600.jpg';


import banner400 from '../../assets/images/bloomberg-banner-400.jpg';
import banner800 from '../../assets/images/bloomberg-banner-800.jpg';
import banner1200 from '../../assets/images/bloomberg-banner-1200.jpg';
import banner1600 from '../../assets/images/bloomberg-banner-1600.jpg';

const bannerImgSet = {
  banner400,
  banner800,
  banner1200,
  banner1600,
};


function BankOfAmerica() {
  const skillsDictionary = {
    Development: ['Javascript', 'C++', 'Python'],
    Technology: ['Bloomberg'],
    General: ['Product Management', 'Product Design'],
  };
  const productInputs = [
    {
      caption: 'The Bloomberg Terminal',
      description: 'The Bloomberg Terminal is a financial trading platform that enables financial professionals toanalyze real-time market data and place trades.\n\nThe Bloomberg terminal that costs $25,000 per user annually, and as of 2019 had over 400,000 subscribers spanning 50+ countries.',
      img: {
        alt: 'the bloomberg terminal',
        classNames: 'portfolio-page__product__portal-image',
        src: terminal200,
        srcSet: `${terminal200} 200w, ${terminal400} 400w, ${terminal600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
    {
      caption: 'Trading Platforms',
      description: 'I work primarily on Bloomberg\'s sell-side and buy-side trading applications. Our products emphasize simplicity, efficency, and scalability, all of which help our clients execute large amounts of trades in short periods of time.\n\nFun Fact: One of our buy-side applications was recently featured on the Showtime series Billions.',
      img: {
        alt: 'the show billions',
        classNames: 'portfolio-page__product__portal-image',
        src: billions200,
        srcSet: `${billions200} 200w, ${billions400} 400w, ${billions600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
  ];
  // const fullStackDescription = "During my time at Bank of America,
  // I did have some real finance work as well.\n\nIn my first year,
  // I was responsible for analyzing the drivers to variances inBAC's
  // NII/NIM forecast through time.\n\nIn my second year,
  // I calculated the hypothetical impacts to BAC’s commercial
  // allowance as a result of the Federal Reserve’s Stress Tests.";

  const summaryBody = "Bloomberg a privately held financial, software, data, and media company founded by Michael Bloomberg in 1981. It provides financial software tools such as an analytics and equity trading platform, data services, and news to financial organizations through the Bloomberg Terminal\n\nAs a full stack senior software engineer in Bloomberg's trading platforms division, I work to develop new features for the Bloomberg terminal's trading blotters. The primary languages I use day-to-day are Javascript, C++, and Python.";


  return (
    <div className="portfolio-page bac">
      <div className="portfolio-page__body">
        {renderBanner(bannerImgSet)}
        {renderSummary(summaryBody)}
        {renderProduct(productInputs)}
        {/* {renderDevelopment()} */}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default BankOfAmerica;
