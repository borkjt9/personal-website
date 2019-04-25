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
  const fullStackDescription = "During my time at Bank of America, I did have some real finance work as well.\n\nIn my first year, I was responsible for analyzing the drivers to variances in BAC's NII/NIM forecast through time.\n\nIn my second year, I calculated the hypothetical impacts to BAC’s commercial allowance as a result of the Federal Reserve’s Stress Tests.";

  const summaryBody = "The Bloomberg Terminal is a electronic financial trading platform that enables financial professionals to monitor and analyze real-time market data and place trades.\n\nAs a full stack senior software engineer in Bloomberg's trading platform division, I work to develop new features for Bloomberg's trading blotters.";

  function renderDevelopment() {
    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title">Full Stack Development</h2>
        <div className="portfolio-page__section__body row-wrap-reverse">
          <p className="bac__stressTesting__text">{fullStackDescription}</p>
          <div className="bac__stressTesting__image-group">
            <img
              alt="Janet Yellen. The GOAT."
              className="bac__stressTesting__image"
              src="https://johnborkowski.me/images/janet-yellen-450.jpg"
              srcSet="https://johnborkowski.me/images/janet-yellen-225.jpg 225w,
              https://johnborkowski.me/images/janet-yellen-450.jpg 450w,
              https://johnborkowski.me/images/janet-yellen-900.jpg 900w,
              https://johnborkowski.me/images/janet-yellen-1350.jpg 1350w"
              sizes="(max-width: 450px) 100vw, 450px"
            />
            <h5 className="bac__stressTesting__imageDescription">Janet Yellen. Cultural Icon.</h5>
          </div>


        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-page bac">
      <div className="portfolio-page__body">
        {renderBanner('bloomberg')}
        {renderSummary(summaryBody)}
        {renderProduct(productInputs)}
        {renderDevelopment()}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default BankOfAmerica;
