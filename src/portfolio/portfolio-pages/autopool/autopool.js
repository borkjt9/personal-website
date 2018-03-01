import React, {Component} from 'react';
import _ from 'lodash';
import './autopool.scss';

class AutoPOOL extends Component {

  summaryBody = "AutoPOOl was a fun app I built to solve an incredibly significant painpoint in today’s society: the highly volatile prices of uberPOOL rides.\n\nAutoPOOL sends users push notifications at intervals they set containing uberPOOL price updates. Once the price is in the user’s desired range, Auto-POOL alerts them with a fun pokemon-themed notifications.\n\nI developed the application in Swift, and used Google's App Engine to schedule cron jobs and send push notifications.";


  skillsDictionary = {
    "Development": ["Swift", "APIs"],
    "Technology": ["Xcode", "Firebase", "App Engine", "Sketch"],
  }

  productCaptions = ["Born out of Pain", "Set and Forget", "Wild uberPOOL was Caught!"]
  productDescriptions = ["Through large amounts of very scientific research, UberPOOL prices were found to rise and fall upwards of 100% in very short periods of time.\n\nIt was reported from a reliable source (definitely not me) that a ride from San Mateo, CA to Mountain View, CA at 5:00pm can cost $25, and not 5 minutes later cost only $11.50.",
    "The huge swings uberPOOL prices have been known to cause severe migraines in those affected (again, not me).\n\nAutoPOOL cures this impending epidemic by monitering uberPOOL prices so users don't have to.\n\nAutoPOOL sends users alerts with price updates at intervals they specify in fun pokemon-themed messages.",
    "Once the uberPOOL price is in the user's desired range, the user will receive a notification with a special pokemon-themed catchphrase.\n\nThe user can then book an uber directly in the application."
  ]


  renderProductSection() {
    return (
      <div className="portfolio-page__section">
        <h1 className="portfolio-page__section__title boon__investments__product">Product</h1>
        <div className="portfolio-page__section__body row-wrap-reverse">
          <img className="autopool__product__iphone-image" src={require('../../../assets/images/autopool-set-ride.png')}/>
          <div className="autopool__product__text">
            <h3>{this.productCaptions[0]}</h3>
            <p className="portfolio-page__section__body__description">{this.productDescriptions[0]}</p>
          </div>
        </div>
        <div className="portfolio-page__section__body row-wrap">
          <div className="autopool__product__text">
            <h3>{this.productCaptions[1]}</h3>
            <p className="portfolio-page__section__body__description">{this.productDescriptions[1]}</p>
          </div>
          <img className="autopool__product__iphone-image" src={require('../../../assets/images/autopool-create-alert.png')}/>
        </div>
        <div className="portfolio-page__section__body row-wrap-reverse">
          <img className="autopool__product__iphone-image" src={require('../../../assets/images/autopool-receive-alert.png')}/>
          <div className="autopool__product__text">
            <h3>{this.productCaptions[2]}</h3>
            <p className="portfolio-page__section__body__description">{this.productDescriptions[2]}</p>
          </div>
        </div>
      </div>
    )
  }



    renderSummarySection() {
      return (
        <div className="portfolio-page__section portfolio-page__summary">
          <h1 className="portfolio-page__section__title">Summary</h1>
          <p className="portfolio-page__section__body row-wrap">
            {this.summaryBody}
          </p>
        </div>
      )
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
      <div className="portfolio-page autopool">
        <div className="portfolio-page__body">
          <img className="portfolio-page__banner" src={require('../../../assets/images/autopool-banner.png')}/>
          {this.renderSummarySection()}
          {this.renderProductSection()}
          {this.renderSkillsList()}
        </div>
      </div>
    )
  }
}

export default AutoPOOL;
