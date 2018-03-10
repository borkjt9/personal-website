import React, { Component } from 'react';
import renderSkillsList from '../common-objects/skills-list';
import renderTimeline from '../common-objects/timeline';
import renderSummary from '../common-objects/summary';
import renderBanner from '../common-objects/banner';

import './white-label-apps.scss';

class WhiteLabelApps extends Component {
  summaryBody = 'While CEO of Boon Investments, my team developed multiple white-label applications to pair with our B2B SaaS offering to traditional investment management firms.\n\nAs CEO, I was responsible for negotiating contracts, designing and developing the core white-label template for iOS, and managing the project timelines for the applications we built for partners.';
  osharesCaption = 'OShares ETF Investment';
  osharesBody = "Beanstox is an application my team built for O'Shares, the ETF company run by Kevin O'Leary.\n\nFor the Beanstox app, we designed a custom user signup process which incorporated O'Shares' internal investment methodology.";
  astorCaption = 'Astor Investment Management';
  astorBody = "Astor served as the pilot project for Boon's white label applications. They are a registered investment advisor that provides client services to over $2 billion in client assets.\n\nThe first client is always the hardest. For the Astor deal, most of my time was spent getting product deadlines to match with partner expectations, and vice versa. Developing the actual app was surprisingly easy in comparison.";

  skillsDictionary = {
    Development: ['Swift', 'Python'],
    Technology: ['Xcode', 'Sketch', 'AWS Lambda'],
    General: ['Product Management', 'Design', 'Partnerships', 'Contracts'],
  };

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
          {renderBanner('white-label-apps', 'white label apps')}
          {renderSummary(this.summaryBody)}
          {this.renderAstorSection()}
          {this.renderOsharesSection()}
          {renderTimeline('white-label-apps')}
          {renderSkillsList(this.skillsDictionary)}
        </div>
      </div>
    );
  }
}

export default WhiteLabelApps;
