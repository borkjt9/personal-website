import React, {Component} from 'react';
import _ from 'lodash';
import './autopool.scss';

class AutoPOOL extends Component {

  summaryBody = "AutoPool was a fun project built out of an incredibly significant painpoint in today’s society: the highly volatile prices of uberPOOL rides. AutoPOOL solves this problem by providing users price updates. Once the uberPOOL price is in the user’s desired range, the user is alerted with an arbitrary pokemon-themed notification.\n\nThe application was developed in Swift. Google's App Engine is used to send push notifications and schedule cron jobs.";


  skillsDictionary = {
    "Development": ["Swift", "APIs"],
    "Technology": ["Xcode", "Firebase", "App Engine", "Sketch"],
  }

  productCaptions = ["Set your Destination", "Create your Alert", "Receive Alerts "]
  productDescriptions = ["Through a large amount of purely anecdotal research, UberPOOL prices were found to rise and fall upwards of 100% in very short spans of time.\n\nIt has been reported that a ride from San Mateo, CA to Mountain View, CA can be priced at $25 at 5:00pm and $11.50 at 5:05pm.",
    "Alerts can be customized for duration and desired price range.\n\n AutoPOOl then pings Uber's servers at the user's desired frequency and sends the result as a push notification.",
    "Alerts are delivered to the user in the form of pokemon catch phrases for no particular reason.\n\nOnce the uberPOOL price is in the user's desired range, the user can book an uber from directly in the application."
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
