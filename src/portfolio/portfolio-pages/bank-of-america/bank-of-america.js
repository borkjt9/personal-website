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

  summary = "John was a financial analyst for Bank of America’s from June 2013 to January 2015. During his time of Bank of America, John worked in the Balance Sheet Management and Commercial Allowance Divisions. John’s primary contributions to Bank of America related to the automation of financial models."

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


  render() {
    return (
      <div className="portfolio-page bac">
        <div className="portfolio-page__body">
          <img className="portfolio-page__banner" src={require('../../../assets/images/bac-banner.png')}/>
          <div className="portfolio-page__section">
            <h1 className="portfolio-page__section__title">Summary</h1>
            <p className="portfolio-page__section__body">{this.summary}</p>
          </div>
          <div className="portfolio-page__section">
            <h1 className="portfolio-page__section__title">Tasks</h1>
            <ul className="bac__tasks">
              {this.renderTaskList()}
            </ul>
          </div>
          {this.renderSkillsList()}
        </div>
      </div>
    )
  }
}

export default BankOfAmerica;
