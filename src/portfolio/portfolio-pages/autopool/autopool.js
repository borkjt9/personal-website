import React, { Component } from 'react';
import renderSkillsList from '../common-objects/skills-list';
import renderSummary from '../common-objects/summary';
import renderBanner from '../common-objects/banner';

import './autopool.scss';

class AutoPOOL extends Component {
  summaryBody = "AutoPOOl was a fun iOS application I built to solve an incredibly significant painpoint in today’s society: the highly volatile prices of UberPOOL rides.\n\nAutoPOOL sends users automatic push notifications containing UberPOOL price updates at time intervals they set. Once the price is in the user’s desired range, Auto-POOL alerts the user with a fun pokemon-themed notifications.\n\nI developed AutoPOOL in Swift, and used Google's App Engine to schedule cron jobs and send push notifications.";


  skillsDictionary = {
    Development: ['Swift', 'APIs'],
    Technology: ['Xcode', 'Firebase', 'App Engine', 'Sketch'],
  }

  productCaptions = ['Born out of Pain', 'Set and Forget', 'Wild UberPOOL was Caught!']
  productDescriptions = ['Through large amounts of very scientific research, UberPOOL prices were found to rise and fall upwards of 100% in very short periods of time.\n\nIt was reported from a reliable source (definitely not me) that a ride from San Mateo, CA to Mountain View, CA at 5:00pm would cost $25, and then not 5 minutes later cost only $11.50.',
    "The huge swings in prices began to cause severe migraines in many UberPOOL users (again, not me).\n\nAutoPOOL solves this serious health risk by monitering UberPOOL prices so users don't have to.\n\nAutoPOOL sends users automatic price alerts at intervals they specify in fun pokemon-themed messages. Epidemic Averted.",
    "Once the UberPOOL price is in the user's desired range, the user will receive a notification with a special pokemon-themed catchphrase.\n\nThe user can then book an uber directly in the application.",
  ]


  renderProductSection() {
    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title boon__investments__product">Product</h2>
        <div className="portfolio-page__section__body row-wrap">
          <img
            alt="autopool screen that lets you set your destination and current location"
            className="autopool__product__iphone-image"
            src="https://johnborkowski.me/images/autopool-side-ride-400.jpg"
            srcSet="https://johnborkowski.me/images/autopool-set-ride-200.jpg 200w,
              https://johnborkowski.me/images/autopool-set-ride-400.jpg 400w,
              https://johnborkowski.me/images/autopool-set-ride-600.jpg 600w"
            sizes="(max-width: 200px) 95vw, 200px"
          />
          <div className="autopool__product__text">
            <h3>{this.productCaptions[0]}</h3>
            <p className="portfolio-page__section__body__description">{this.productDescriptions[0]}</p>
          </div>
        </div>
        <div className="portfolio-page__section__body row-wrap-reverse">
          <div className="autopool__product__text">
            <h3>{this.productCaptions[1]}</h3>
            <p className="portfolio-page__section__body__description">{this.productDescriptions[1]}</p>
          </div>
          <img
            alt="autopool screen that creates your alert"
            className="autopool__product__iphone-image"
            src="https://johnborkowski.me/images/autopool-create-alert-400.jpg"
            srcSet="https://johnborkowski.me/images/autopool-create-alert-200.jpg 200w,
            https://johnborkowski.me/images/autopool-create-alert-400.jpg 400w,
            https://johnborkowski.me/images/autopool-create-alert-600.jpg 600w"
            sizes="(max-width: 200px) 95vw, 200px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
          />
        </div>
        <div className="portfolio-page__section__body row-wrap">
          <img
            alt="iphone homescreen showing a push notification sent from autopool"
            className="autopool__product__iphone-image"
            src="https://johnborkowski.me/images/autopool-receive-alert-400.jpg"
            srcSet="https://johnborkowski.me/images/autopool-receive-alert-200.jpg 200w,
            https://johnborkowski.me/images/autopool-receive-alert-400.jpg 400w,
            https://johnborkowski.me/images/autopool-receive-alert-600.jpg 600w"
            sizes="(max-width: 200px) 95vw, 200px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
          />
          <div className="autopool__product__text">
            <h3>{this.productCaptions[2]}</h3>
            <p className="portfolio-page__section__body__description">{this.productDescriptions[2]}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="portfolio-page autopool">
        <div className="portfolio-page__body">
          {renderBanner('autopool', 'autoPOOL')}
          {renderSummary(this.summaryBody)}
          {this.renderProductSection()}
          {renderSkillsList(this.skillsDictionary)}
        </div>
      </div>
    );
  }
}

export default AutoPOOL;
