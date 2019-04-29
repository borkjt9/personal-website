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

import img200 from '../../assets/images/billions-200.jpg';
import img400 from '../../assets/images/billions-400.jpg';
import img600 from '../../assets/images/billions-600.jpg';

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
      caption: 'Trading Platforms',
      description: 'I have worked on both sell-side and buy-side trading applications during my career at Bloomberg.\n\nOne of our buy-side applications was recently featured on the Showtime series Billions.',
      img: {
        alt: 'the show billions',
        classNames: 'portfolio-page__product__portal-image',
        src: img200,
        srcSet: `${img200} 200w, ${img400} 400w, ${img600} 600w`,
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

  const summaryBody = "The Bloomberg Terminal is a electronic financial trading platform that enables financial professionals to monitor and analyze real-time market data and place trades.\n\nAs a full stack senior software engineer in Bloomberg's trading platform division, I work to develop new features for Bloomberg's trading blotters.";


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
