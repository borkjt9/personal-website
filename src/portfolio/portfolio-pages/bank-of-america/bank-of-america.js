import React, { Component } from 'react';
import './bank-of-america.scss';
import _ from 'lodash';

class BankOfAmerica extends Component {
  tasksArray =
    [
      'Developed the VBA portion of a division-wide project to automate balance breakouts by legal entity from general ledger.',
      'Improved daily reporting efficiency by approximately two hours each day through the VBA automation of labor intensive day-to-day processes.',
      'Prepared daily, weekly, and monthly NII/NIM summary reports for C-level executives including the Chief Financial Officer, Chief Risk Officer, and Chief Accounting Officer.',
      'Isolated and analyzed the primary drivers of variances in the NII/NIM forecast out through 2016 over day-over-day, week-over-week, and month-over-month time horizons.',
      'Compiled and analyzed the hypothetical impacts to BAC’s commercial allowance as a result of the Federal Reserve’s Stress Tests.',
      'Calculated and analyzed various allowance metrics for BAC’s $350 billion commercial loan portfolio including non-performing loans, net credit losses, and provision expense.',

    ]

  skillsDictionary = {
    Technology: ['VBA', 'R', 'Excel', 'PowerPoint'],
    Finance: ['Financial Modeling', 'Automation', 'Forecasting'],
  }
  automationDescription = 'My main contribution to Bank of America was improving daily reporting efficiency by approximately six hours each day through VBA automation.\n\nI also developed the VBA portion of a division-wide project to automate balance breakouts by legal entity from general ledger. Yes it is as dry as it sounds.'
  riskManagementDescription = "John isolated and analyzed the primary drivers of BAC's NII/NIM forecast out through 2016 over day-over-day, week-over-week, and month-over-month time horizons."

  stressTestingDescription = "During my time at Bank of America, I did have some real finance work as well.\n\nIn my first year, I was primarily responsible for analyzing the drivers to variances in BAC's NII/NIM forecast through time. \n\nIn my second year, I calculated the hypothetical impacts to BAC’s commercial allowance as a result of the Federal Reserve’s Stress Tests."

  summary = "I worked as a financial analyst in Bank of America's Financial Management Program from June 2013 to January 2015. It was my first job out of college. The people were wonderful, the job so-so.\n\nThe running joke in the office my first year was that I had automated myself out of a job by writing VBA scripts to perform 3/4 of my daily tasks. I was just shocked that before me, BAC had found people to perform these tasks every day for years without going crazy."

  renderTaskList() {
    return _.map(this.tasksArray, task => (
      <li>
        <p>{task}</p>
      </li>
    ));
  }

  renderSkillsList() {
    const skillsTable = _.map(this.skillsDictionary, (skills, key) => (
      <div className="portfolio-page__skills__row">
        <p className="portfolio-page__skills__table__key">{`${key}: `}</p>
        <p className="portfolio-page__skills__table__description">{skills.reduce((acc, x) => (acc === null ? [x] : [acc, ' | ', x]), null)}</p>
      </div>
    ));

    return (

      <div className="portfolio-page__section portfolio-page__skills">
        <h2 className="portfolio-page__section__title">Skills</h2>
        <div className="portfolio-page__skills__table">
          {skillsTable}
        </div>
      </div>
    );
  }

  renderAutomation() {
    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title">Automation</h2>
        <div className="portfolio-page__section__body">
          <img
            className="bac__automation__image"
            src="https://s3.amazonaws.com/jtb-personal-website/images/automation-800.jpg"
            srcSet="https://s3.amazonaws.com/jtb-personal-website/images/automation-400.jpg 400w,
            https://s3.amazonaws.com/jtb-personal-website/images/automation-800.jpg 800w,
            https://s3.amazonaws.com/jtb-personal-website/images/automation-1200.jpg 1200w,
            https://s3.amazonaws.com/jtb-personal-website/images/automation-1600.jpg 1600w"
            sizes="(max-width: 800px) 100vw, 800px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
          />
        </div>
        <div className=" portfolio-page__section__body bac__automation__text">
          <p>{this.automationDescription}</p>
        </div>
      </div>
    );
  }

  // renderRiskManagement() {
  //   return (
  //     <div className="portfolio-page__section">
  //       <h2 className="portfolio-page__section__title">Risk Management</h2>
  //       <div className="portfolio-page__section__body row-wrap">
  //         <img className="bac__riskManagement__image" src={require('../../../assets/images/riskManagement.png')}/>
  //         <p className="bac__riskManagement__text">{this.riskManagementDescription}</p>
  //       </div>
  //     </div>
  //   )
  // }

  renderStressTesting() {
    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title">Financial Reporting</h2>
        <div className="portfolio-page__section__body row-wrap-reverse">
          <p className="bac__stressTesting__text">{this.stressTestingDescription}</p>
          <div className="bac__stressTesting__image-group">
            <img
              className="bac__stressTesting__image"
              src="https://s3.amazonaws.com/jtb-personal-website/images/janet-yellen-450.jpg"
              srcSet="https://s3.amazonaws.com/jtb-personal-website/images/janet-yellen-225.jpg 225w,
              https://s3.amazonaws.com/jtb-personal-website/images/janet-yellen-450.jpg 450w,
              https://s3.amazonaws.com/jtb-personal-website/images/janet-yellen-900.jpg 900w,
              https://s3.amazonaws.com/jtb-personal-website/images/janet-yellen-1350.jpg 1350w"
              sizes="(max-width: 450px) 100vw, 450px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
            />
            <h5 className="bac__stressTesting__imageDescription">Janet Yellen. Cultural Icon.</h5>
          </div>


        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="portfolio-page bac">
        <div className="portfolio-page__body">
          <div className="portfolio-page__banner">
            <img
              className="portfolio-page__banner__image"
              src="https://s3.amazonaws.com/jtb-personal-website/images/bank-of-america-banner-800.jpg"
              srcSet="https://s3.amazonaws.com/jtb-personal-website/images/bank-of-america-banner-400.jpg 400w,
              https://s3.amazonaws.com/jtb-personal-website/images/bank-of-america-banner-800.jpg 800w,
              https://s3.amazonaws.com/jtb-personal-website/images/bank-of-america-banner-1200.jpg 1200w,
              https://s3.amazonaws.com/jtb-personal-website/images/bank-of-america-banner-1600.jpg 1600w"
              sizes="(max-width: 800px) 100vw, 800px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
            />
          </div>
          <div className="portfolio-page__section">
            <h2 className="portfolio-page__section__title">Summary</h2>
            <p className="portfolio-page__section__body">{this.summary}</p>
          </div>
          {/* <div className="portfolio-page__section">
            <h2 className="portfolio-page__section__title">Tasks</h2>
            <ul className="bac__tasks">
              {this.renderTaskList()}
            </ul>
          </div> */}
          {this.renderAutomation()}
          {/* {this.renderRiskManagement()} */}
          {this.renderStressTesting()}
          {this.renderSkillsList()}
        </div>
      </div>
    );
  }
}

export default BankOfAmerica;
