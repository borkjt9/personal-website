import React, {Component} from 'react';
import './sunrun.scss';
import _ from 'lodash';

class SunRun extends Component {
  tasksArray =
    [
      "Managed the integration of Clean Energy Experts, acquired by Sunrun in April 2015, into Sunrun’s financial planning process.",
      "Helped build and maintain the free cash flow model used by executive leadership to manage the schedule of solar project financingings and capital raises.",
      "Partnered with the Project Finance executive to forecast any new expense related to future tax equity deals, securitizations, and warehouse facilities.",
      "Supported the VP of Finance and CFO on an ad-hoc basis in preparation of and throughout the IPO process."
    ]

  skillsDictionary = {
    "Technology": ["VBA", "Excel", "PowerPoint", "SalesForce", "GoogleSheets"],
    "Finance": ["Financial Modeling", "Financial Planning", "Forecasting", "Automation"],
  }

  financialModelingDescription = "My primary task was to build and maintain Sunrun's free cash flow model. This model was used by executives to plan capital raises and tax equity deals.\n\nIn addition, I managed the integration of Clean Energy Experts, acquired by Sunrun in April 2015, into Sunrun’s financial planning process.\n\nLast, I partnered with the Project Finance executive to forecast any new expense related to future tax equity deals, securitizations, and warehouse facilities."

  cashFlowDescription = "Built and maintained the free cash flow model used by executive leadership to manage the schedule of solar project financingings and capital raises."

  ipoDescription = "Sunrun went public in August 2018. I supported the VP of Finance and CFO on an ad-hoc basis throughout the IPO process."

  summary = "I was a financial analyst for Sunrun’s corporate finance division from January 2018 to August 2018. Sunrun is a leading United States-based provider of residential solar, and was a late-stage, high growth startup at the time I worked there.\
            \n\nDuring my time with Sunrun, my main task was to help build the company's financial models and processes in preparation of its impending IPO. Sunrun went public in August 2018."


  renderTaskList() {
    return _.map(this.tasksArray, task => {
      return (
        <li>
          <p className="portfolio-page__tasks">{task}</p>
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


  renderFinancialModeling() {
    return (
      <div className="portfolio-page__section">
        <h1 className="portfolio-page__section__title">Financial Modeling</h1>
        <div className="portfolio-page__section__body">
          <div className="sunrun__financial-modeling__image-group">
            <img className="sunrun__financial-modeling__image" src={require('../../../assets/images/financialModel.png')}/>
          </div>
        </div>
        <div className="portfolio-page__section__body">
          <p className="sunrun__financial-modeling__text">{this.financialModelingDescription}</p>
        </div>
      </div>
    )
  }

  // renderCashFlow() {
  //   return (
  //     <div className="portfolio-page__section">
  //       <h1 className="portfolio-page__section__title">Cash Flow Analysis</h1>
  //       <div className="portfolio-page__section__body">
  //         <img className="sunrun__cash-flow__image" src={require('../../../assets/images/cashFlow.png')}/>
  //       </div>
  //       <div className="portfolio-page__section__body">
  //         <p className="sunrun__cash-flow__text">{this.cashFlowDescription}</p>
  //       </div>
  //     </div>
  //   )
  // }

  renderIPO() {
    return (
      <div className="portfolio-page__section">
        <h1 className="portfolio-page__section__title">IPO</h1>
        <div className="portfolio-page__section__body" style={{"display":"block"}}>
          <div className="sunrun__ipo__image-group">
            <img  className="sunrun__ipo__image" src={require('../../../assets/images/ipo.png')}/>
            <h5 className="sunrun__ipo__image__description">Can't spot me? Just keep looking. I'm definitely there.</h5>
          </div>
        </div>
        <div className="portfolio-page__section__body">
          <p className="sunrun__ipo__text">{this.ipoDescription}</p>

        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="sunrun portfolio-page">
        <div className="portfolio-page__body">
          <img className="portfolio-page__banner" src={require('../../../assets/images/sunrun-banner.png')}/>
          <div className="portfolio-page__section">
            <h1 className="portfolio-page__section__title">Summary</h1>
            <p className="portfolio-page__section__body">{this.summary}</p>
          </div>
          {/* <div className="portfolio-page__section">
            <h1 className="portfolio-page__section__title">Tasks</h1>
            <ul>
              {this.renderTaskList()}
            </ul>
          </div> */}
          {this.renderFinancialModeling()}
          {/* {this.renderCashFlow()} */}
          {this.renderIPO()}
          {this.renderSkillsList()}
          </div>
      </div>
    )
  }
}

export default SunRun;
