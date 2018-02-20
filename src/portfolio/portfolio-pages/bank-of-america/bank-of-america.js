import React, {Component} from 'react';
import './bank-of-america.scss';
import _ from 'lodash';

class BankOfAmerica extends Component {
  tasksArray =
    [
      "Developed the VBA portion of a division-wide project to automate balance breakouts by legal entity from general ledger.",
      "Improved daily reporting efficiency by approximately two hours each day through the VBA automation of labor intensive day-to-day processes.",
      "Prepared daily, weekly, and monthly NII/NIM summary reports for C-level executives including the Chief Financial Officer, Chief Risk Officer, and Chief Accounting Officer.",
      "Isolated and analyzed the primary drivers of variances in the NII/NIM forecast out through 2016 over day-over-day, week-over-week, and month-over-month time horizons.",
      "Compiled and analyzed the hypothetical impacts to BAC’s commercial allowance as a result of the Federal Reserve’s Stress Tests.",
      "Calculated and analyzed various allowance metrics for BAC’s $350 billion commercial loan portfolio including non-performing loans, net credit losses, and provision expense.",

    ]

  skillsDictionary = {
    "Technology": ["VBA", "R", "Excel", "PowerPoint"],
    "Finance": ["Financial Modeling", "Automation", "Forecasting"],
  }
  automationDescription =  "Developed the VBA portion of a division-wide project to automate balance breakouts by legal entity from general ledger.\n\nImproved daily reporting efficiency by approximately four hours each day through the VBA automation of labor intensive day-to-day processes."
  riskManagementDescription = "Isolated and analyzed the primary drivers of variances in the NII/NIM forecast out through 2016 over day-over-day, week-over-week, and month-over-month time horizons."

  stressTestingDescription = "Compiled and analyzed the hypothetical impacts to BAC’s commercial allowance as a result of the Federal Reserve’s Stress Tests.\n\nCalculated and analyzed various allowance metrics for BAC’s $350 billion commercial loan portfolio including non-performing loans, net credit losses, and provision expense."

  summary = "John was a financial analyst for Bank of America from June 2013 to January 2015. During his time at Bank of America, John worked in the Balance Sheet Management and Commercial Allowance divisions. John’s primary contributions include the automation of financial reporting and net interest income analysis."

  renderTaskList() {
    return _.map(this.tasksArray, task => {
      return (
        <li>
          <p>{task}</p>
        </li>
      )
    });
  }

  renderSkillsList() {
    const skillsTable = _.map(this.skillsDictionary, (skills, key) => {
      return (
        <div className="portfolio-page__skills__row">
          <p className="portfolio-page__skills__table__key">{`${key}: `}</p>
          <p className="portfolio-page__skills__table__description">{skills.reduce((acc, x) => acc === null ? [x] : [acc, ' | ', x], null)}</p>
        </div>
      )
    })

    return (

      <div className="portfolio-page__section portfolio-page__skills">
        <h1 className="portfolio-page__section__title">Skills</h1>
        <div className="portfolio-page__skills__table">
          {skillsTable}
        </div>
      </div>
    )
  }

  renderAutomation() {
    return (
      <div className="portfolio-page__section">
        <h1 className="portfolio-page__section__title">Automation</h1>
        <div className="portfolio-page__section__body">
          <img className="bac__automation__image" src={require('../../../assets/images/automation.png')}/>
        </div>
        <div className=" portfolio-page__section__body bac__automation__text">
          <p>{this.automationDescription}</p>
        </div>
      </div>
    )
  }

  renderRiskManagement() {
    return (
      <div className="portfolio-page__section">
        <h1 className="portfolio-page__section__title">Risk Management</h1>
        <div className="portfolio-page__section__body">
          <img className="bac__riskManagement__image" src={require('../../../assets/images/riskManagement.png')}/>
          <p className="bac__riskManagement__text">{this.riskManagementDescription}</p>
        </div>
      </div>
    )
  }

  renderStressTesting() {
    return (
      <div className="portfolio-page__section">
        <h1 className="portfolio-page__section__title">Stress Testing</h1>
        <div className="portfolio-page__section__body">
          <p className="bac__stressTesting__text">{this.stressTestingDescription}</p>
          <div className="bac__stressTesting__imageGroup">
            <img className="bac__stressTesting__image" src={require('../../../assets/images/janetYellen.png')}/>
            <h5 className="bac__stressTesting__imageDescription">Janet Yellen. Cultural Icon.</h5>
          </div>


        </div>
      </div>
    )
  }

  renderProductSection() {
    return (
      <div className="portfolio-page__section">
        <h1 className="portfolio-page__section__title boon__investments__product">Product</h1>
        <div className="portfolio-page__section__body">
          <img className="boon-investments__product__iphone-image" src={require('../../../assets/images/iphone-investment-history.png')}/>
          <div className="boon-investments__product__text">
            <h3>{this.productCaptions[0]}</h3>
            <p>{this.productDescriptions[0]}</p>
          </div>
        </div>
        <div className="portfolio-page__section__body">
          <div className="boon-investments__product__text">
            <h3>{this.productCaptions[1]}</h3>
            <p>{this.productDescriptions[1]}</p>
          </div>
        <img className="boon-investments__product__iphone-image" src={require('../../../assets/images/iphone-allocation.png')}/>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="portfolio-page bac">
        <div className="portfolio-page__body">
          <img className="portfolio-page__banner" src={require('../../../assets/images/bac-banner.png')}/>
          <div className="portfolio-page__section">
            <h1 className="portfolio-page__section__title">Summary</h1>
            <p className="portfolio-page__section__body">{this.summary}</p>
          </div>
          {/* <div className="portfolio-page__section">
            <h1 className="portfolio-page__section__title">Tasks</h1>
            <ul className="bac__tasks">
              {this.renderTaskList()}
            </ul>
          </div> */}32
          {this.renderAutomation()}
          {this.renderRiskManagement()}
          {this.renderStressTesting()}
          {this.renderSkillsList()}
        </div>
      </div>
    )
  }
}

export default BankOfAmerica;
