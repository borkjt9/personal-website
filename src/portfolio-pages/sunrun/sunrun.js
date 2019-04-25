/* eslint-disable global-require */
import React from 'react';
import renderSkillsList from '../common-objects/skills-list';
import renderSummary from '../common-objects/summary';
import renderBanner from '../common-objects/banner';

import './sunrun.scss';

function Sunrun() {
  const skillsDictionary = {
    Technology: ['VBA', 'Excel', 'PowerPoint', 'SalesForce', 'GoogleSheets'],
    Finance: ['Financial Modeling', 'Financial Planning', 'Forecasting', 'Automation'],
  };

  const financialModelingDescription = "My primary task was to build and maintain Sunrun's free cash flow model. This model was used by executives to plan capital raises and tax equity deals.\n\nIn addition, I managed the integration of Clean Energy Experts, acquired by Sunrun in April 2015, into Sunrun’s financial planning process.\n\nLast, I partnered with the Project Finance executive to forecast any new expense related to future tax equity deals, securitizations, and warehouse facilities.";

  const ipoDescription = 'Sunrun went public in August 2018. I supported the VP of Finance and CFO on an ad-hoc basis throughout the IPO process.';

  const summaryBody = "I was a financial analyst for Sunrun’s corporate finance division from January 2018 to August 2018. Sunrun is a leading United States-based provider of residential solar, and was a late-stage, high growth startup at the time I worked there.\n\nDuring my time with Sunrun, my main task was to help build the company's financial models and processes in preparation of its impending IPO. Sunrun went public in August 2018.";

  function renderFinancialModeling() {
    const img400 = require('../../assets/images/financial-model-400.jpg');
    const img800 = require('../../assets/images/financial-model-800.jpg');
    const img1200 = require('../../assets/images/financial-model-1200.jpg');
    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title">Financial Modeling</h2>
        <div className="portfolio-page__section__body">
          <div className="sunrun__financial-modeling__image-group">
            <img
              alt="an excel model"
              className="sunrun__financial-modeling__image"
              src={img400}
              srcSet={`${img400} 400w,
                ${img800} 800w,
                ${img1200} 1200w`}
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
        </div>
        <div className="portfolio-page__section__body">
          <p className="sunrun__financial-modeling__text">{financialModelingDescription}</p>
        </div>
      </div>
    );
  }

  function renderIPO() {
    const ipoDescriptionText = "Can't spot me? Just keep looking. I'm definitely there.";
    const img400 = require('../../assets/images/ipo-400.jpg');
    const img800 = require('../../assets/images/ipo-800.jpg');
    const img1200 = require('../../assets/images/ipo-1200.jpg');
    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title">IPO</h2>
        <div className="portfolio-page__section__body" style={{ display: 'block' }}>
          <div className="sunrun__ipo__image-group">
            <img
              alt="sunrun executives at the New York Stock Exchange for the company's ipo "
              className="sunrun__ipo__image"
              src={img800}
              srcSet={`${img400} 400w,
              ${img800} 800w,
              ${img1200} 1200w`}
              sizes="(max-width: 400px) 100vw, 400px"
            />
            <h5 className="sunrun__ipo__image__description">
              {ipoDescriptionText}
            </h5>
          </div>
        </div>
        <div className="portfolio-page__section__body">
          <p className="sunrun__ipo__text">{ipoDescription}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sunrun portfolio-page">
      <div className="portfolio-page__body">
        {renderBanner('sunrun')}
        {renderSummary(summaryBody)}
        {renderFinancialModeling()}
        {renderIPO()}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default Sunrun;
