import React, { Component } from 'react';
import _ from 'lodash';

import './white-label-apps.scss';

function renderTimeline() {
  return (
    <div className="portfolio-page__section white-label-apps__timeline">
      <h2 className="portfolio-page__section__title">Progress</h2>
      <img
        alt="timeline showing the progress of Boon's white label apps"
        className="white-label-apps__timeline__image timeline__image--desktop"
        src="https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-timeline-desktop-800.jpg"
        srcSet="https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-timeline-desktop-400.jpg 400w,
        https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-timeline-desktop-800.jpg 800w,
        https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-timeline-desktop-1600.jpg 1600w"
        sizes="(max-width: 800px) 100vw, 800px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
      />
      <img
        alt="timeline showing the progress of Boon's white label apps"
        className="white-label-apps__timeline__image timeline__image--mobile"
        src="https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-timeline-mobile-800.jpg"
        srcSet="https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-timeline-mobile-400.jpg 400w,
        https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-timeline-mobile-800.jpg 800w,
        https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-timeline-mobile-1600.jpg 1600w"
        sizes="(max-width: 800px) 100vw, 800px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
      />
    </div>
  );
}

class WhiteLabelApps extends Component {
  summary = 'While CEO of Boon Investments, my team developed multiple white-label applications to pair with our B2B SaaS offering to traditional investment management firms.\n\nAs CEO, I was responsible for negotiating contracts, designing and developing the core white-label template for iOS, and managing the project timelines for the applications we built for partners.';
  osharesCaption = 'OShares ETF Investment';
  osharesBody = "Beanstox is an application my team built for O'Shares, the ETF company run by Kevin O'Leary.\n\nFor the Beanstox app, we designed a custom user signup process which incorporated O'Shares' internal investment methodology.";
  astorCaption = 'Astor Investment Management';
  astorBody = "Astor served as the pilot project for Boon's white label applications. They are a registered investment advisor that provides client services to over $2 billion in client assets.\n\nThe first client is always the hardest. For the Astor deal, most of my time was spent getting product deadlines to match with partner expectations, and vice versa. Developing the actual app was surprisingly easy in comparison.";

  skillsDictionary = {
    Development: ['Swift', 'Python'],
    Technology: ['Xcode', 'Sketch', 'AWS Lambda'],
    General: ['Product Management', 'Design', 'Partnerships', 'Contracts'],
  };

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

  renderOsharesSection() {
    const oSharesTitle = "Beanstox by O'Shares";

    return (
      <div className="portfolio-page__section">
        <div className="portfolio-page__section__body row-wrap-reverse">
          <div className="white-label-apps__product__text">
            <h3>
              {oSharesTitle}
            </h3>
            <p className="portfolio-page__section__body__description">{this.osharesBody}</p>
          </div>
          <img
            alt="Beanstox application showing the allocation screen"
            className="white-label-apps__product__iphone-image"
            src="https://s3.amazonaws.com/jtb-personal-website/images/beanstox-sign-up-400.jpg"
            srcSet="https://s3.amazonaws.com/jtb-personal-website/images/beanstox-sign-up-200.jpg 200w,
            https://s3.amazonaws.com/jtb-personal-website/images/beanstox-sign-up-400.jpg 400w,
            https://s3.amazonaws.com/jtb-personal-website/images/beanstox-sign-up-600.jpg 600w"
            sizes="(max-width: 200px) 95vw, 200px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
          />
        </div>
      </div>
    );
  }

  renderAstorSection() {
    return (
      <div>
        <div className="portfolio-page__section">
          <h2 className="portfolio-page__section__title">Product</h2>
          <div className="portfolio-page__section__body row-wrap">
            <img
              alt="Astor application showing the investment detail screen"
              className="white-label-apps__product__iphone-image"
              src="https://s3.amazonaws.com/jtb-personal-website/images/astor-investment-history-400.jpg"
              srcSet="https://s3.amazonaws.com/jtb-personal-website/images/astor-investment-history-200.jpg 200w,
              https://s3.amazonaws.com/jtb-personal-website/images/astor-investment-history-400.jpg 400w,
              https://s3.amazonaws.com/jtb-personal-website/images/astor-investment-history-600.jpg 600w"
              sizes="(max-width: 200px) 95vw, 200px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
            />
            <div className="white-label-apps__product__text">
              <h3>Astor Investment Management</h3>
              <p className="portfolio-page__section__body__description">{this.astorBody}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="portfolio-page white-label-apps">
        <div className="portfolio-page__body">
          <div className="portfolio-page__banner">
            <h1 className="portfolio-page__banner__title">White Label Apps</h1>
            <img
              alt="a person holding their iphone showing the Beanstox app on the screen"
              className="portfolio-page__banner__image"
              src="https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-banner-800.jpg"
              srcSet="https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-banner-400.jpg 400w,
              https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-banner-800.jpg 800w,
              https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-banner-1200.jpg 1200w,
              https://s3.amazonaws.com/jtb-personal-website/images/white-label-apps-banner-1600.jpg 1600w"
              sizes="(max-width: 800px) 100vw, 800px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
            />
          </div>
          <div className="portfolio-page__section">
            <h2 className="portfolio-page__section__title">Summary</h2>
            <p className="portfolio-page__section__body">{this.summary}</p>
          </div>
          {this.renderAstorSection()}
          {this.renderOsharesSection()}
          {renderTimeline()}
          {this.renderSkillsList()}
        </div>
      </div>
    );
  }
}

export default WhiteLabelApps;
