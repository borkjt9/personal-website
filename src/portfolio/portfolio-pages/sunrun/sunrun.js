import React, { Component } from 'react';
import renderSkillsList from '../common-objects/skills-list';
import renderSummary from '../common-objects/summary';
import renderBanner from '../common-objects/banner';

import './sunrun.scss';

class SunRun extends Component {
  tasksArray =
    [
      'Managed the integration of Clean Energy Experts, acquired by Sunrun in April 2015, into Sunrun’s financial planning process.',
      'Helped build and maintain the free cash flow model used by executive leadership to manage the schedule of solar project financingings and capital raises.',
      'Partnered with the Project Finance executive to forecast any new expense related to future tax equity deals, securitizations, and warehouse facilities.',
      'Supported the VP of Finance and CFO on an ad-hoc basis in preparation of and throughout the IPO process.',
    ]

  skillsDictionary = {
    Technology: ['VBA', 'Excel', 'PowerPoint', 'SalesForce', 'GoogleSheets'],
    Finance: ['Financial Modeling', 'Financial Planning', 'Forecasting', 'Automation'],
  }

  financialModelingDescription = "My primary task was to build and maintain Sunrun's free cash flow model. This model was used by executives to plan capital raises and tax equity deals.\n\nIn addition, I managed the integration of Clean Energy Experts, acquired by Sunrun in April 2015, into Sunrun’s financial planning process.\n\nLast, I partnered with the Project Finance executive to forecast any new expense related to future tax equity deals, securitizations, and warehouse facilities."

  cashFlowDescription = 'Built and maintained the free cash flow model used by executive leadership to manage the schedule of solar project financingings and capital raises.'

  ipoDescription = 'Sunrun went public in August 2018. I supported the VP of Finance and CFO on an ad-hoc basis throughout the IPO process.'

  summaryBody = "I was a financial analyst for Sunrun’s corporate finance division from January 2018 to August 2018. Sunrun is a leading United States-based provider of residential solar, and was a late-stage, high growth startup at the time I worked there.\n\nDuring my time with Sunrun, my main task was to help build the company's financial models and processes in preparation of its impending IPO. Sunrun went public in August 2018."

  renderFinancialModeling() {
    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title">Financial Modeling</h2>
        <div className="portfolio-page__section__body">
          <div className="sunrun__financial-modeling__image-group">
            <img
              alt="an excel model"
              className="sunrun__financial-modeling__image"
              src="https://johnborkowski.me/images/financial-model-800.jpg"
              srcSet="https://johnborkowski.me/images/financial-model-400.jpg 400w,
              https://johnborkowski.me/images/financial-model-800.jpg 800w,
              https://johnborkowski.me/images/financial-model-1200.jpg 1200w"
              sizes="(max-width: 400px) 100vw, 400px"
            />
          </div>
        </div>
        <div className="portfolio-page__section__body">
          <p className="sunrun__financial-modeling__text">{this.financialModelingDescription}</p>
        </div>
      </div>
    );
  }

  renderIPO() {
    const ipoDescriptionText = "Can't spot me? Just keep looking. I'm definitely there.";

    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title">IPO</h2>
        <div className="portfolio-page__section__body" style={{ display: 'block' }}>
          <div className="sunrun__ipo__image-group">
            <img
              alt="sunrun executives at the New York Stock Exchange for the company's ipo "
              className="sunrun__ipo__image"
              src="https://johnborkowski.me/images/ipo-800.jpg"
              srcSet="https://johnborkowski.me/images/ipo-400.jpg 400w,
              https://johnborkowski.me/images/ipo-800.jpg 800w,
              https://johnborkowski.me/images/ipo-1200.jpg 1200w"
              sizes="(max-width: 400px) 100vw, 400px"
            />
            <h5 className="sunrun__ipo__image__description">
              {ipoDescriptionText}
            </h5>
          </div>
        </div>
        <div className="portfolio-page__section__body">
          <p className="sunrun__ipo__text">{this.ipoDescription}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="sunrun portfolio-page">
        <div className="portfolio-page__body">
          {renderBanner('sunrun')}
          {renderSummary(this.summaryBody)}
          {this.renderFinancialModeling()}
          {this.renderIPO()}
          {renderSkillsList(this.skillsDictionary)}
        </div>
      </div>
    );
  }
}

export default SunRun;
