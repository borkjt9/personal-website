/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React from 'react';
import renderSkillsList from '../common-objects/skills-list';
import renderSummary from '../common-objects/summary';
import renderBanner from '../common-objects/banner';
import renderProduct from '../common-objects/product';
import './bloomberg.scss';

function BankOfAmerica() {
  const skillsDictionary = {
    Development: ['Javascript', 'C++', 'Python'],
    Technology: ['Bloomberg'],
    General: ['Product Management', 'Product Design'],
  };
  const img200 = require('../../assets/images/billions-200.jpg');
  const img400 = require('../../assets/images/billions-400.jpg');
  const img600 = require('../../assets/images/billions-600.jpg');

  const productInputs = [
    {
      caption: 'Trading Platforms',
      description: 'I have worked on both sell-side and buy-side trading applications during my career at Bloomberg.\n\nOne of our buy-side applications was recently featured on the Showtime series Billions.',
      img: {
        alt: 'the show billions',
        classNames: 'portfolio-page__product__portal-image',
        src: img400,
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
        {renderBanner('bloomberg')}
        {renderSummary(summaryBody)}
        {renderProduct(productInputs)}
        {/* {renderDevelopment()} */}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default BankOfAmerica;
