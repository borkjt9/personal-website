import React from 'react';
import renderSkillsList from '../common-objects/skills-list';
import renderSummary from '../common-objects/summary';
import renderBanner from '../common-objects/banner';
import './bank-of-america.scss';

import automation400 from '../../assets/images/automation-400.jpg';
import automation800 from '../../assets/images/automation-800.jpg';
import automation1200 from '../../assets/images/automation-1200.jpg';
import automation1600 from '../../assets/images/automation-1600.jpg';

import janet225 from '../../assets/images/janet-yellen-225.jpg';
import janet450 from '../../assets/images/janet-yellen-450.jpg';
import janet900 from '../../assets/images/janet-yellen-900.jpg';
import janet1350 from '../../assets/images/janet-yellen-1350.jpg';


function BankOfAmerica() {
  const skillsDictionary = {
    Technology: ['VBA', 'R', 'Excel', 'PowerPoint'],
    Finance: ['Financial Modeling', 'Automation', 'Forecasting'],
  };

  const automationDescription = 'My main contribution to Bank of America was improving daily reporting efficiency by approximately six hours each day through VBA automation.\n\nI also developed the VBA portion of a division-wide project to automate balance breakouts by legal entity from general ledger. Yes it is as dry as it sounds.';
  const stressTestingDescription = "During my time at Bank of America, I did have some real finance work as well.\n\nIn my first year, I was responsible for analyzing the drivers to variances in BAC's NII/NIM forecast through time.\n\nIn my second year, I calculated the hypothetical impacts to BAC’s commercial allowance as a result of the Federal Reserve’s Stress Tests.";

  const summaryBody = "I worked as a financial analyst in Bank of America's Financial Management Program from June 2013 to January 2015. It was my first job out of college.\n\nThe running joke in the office my first year was that I had automated myself out of a job by writing VBA scripts to perform 3/4 of my daily tasks. I was just shocked that before me, BAC had found people to perform these tasks every day for years without going crazy.";

  function renderAutomation() {
    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title">Automation</h2>
        <div className="portfolio-page__section__body">
          <img
            alt="depicts the automation of labor intensive tasks to code"
            className="bac__automation__image"
            src={automation800}
            srcSet={`${automation400} 400w,
            ${automation800} 800w,
            ${automation1200} 1200w,
            ${automation1600}1600w`}
            sizes="(max-width: 800px) 100vw, 800px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
          />
        </div>
        <div className="portfolio-page__section__body bac__automation__text">
          <p>{automationDescription}</p>
        </div>
      </div>
    );
  }

  function renderStressTesting() {
    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title">Financial Reporting</h2>
        <div className="portfolio-page__section__body row-wrap-reverse">
          <p className="bac__stressTesting__text">{stressTestingDescription}</p>
          <div className="bac__stressTesting__image-group">
            <img
              alt="Janet Yellen. The GOAT."
              className="bac__stressTesting__image"
              src={janet450}
              srcSet={`${janet225} 225w,
              ${janet450} 450w,
              ${janet900} 900w,
              ${janet1350} 1350w`}
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
        {renderBanner('bank-of-america')}
        {renderSummary(summaryBody)}
        {renderAutomation()}
        {renderStressTesting()}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default BankOfAmerica;
