import React, {Component} from 'react';
import './white-label-apps.scss';
import _ from 'lodash';
class WhiteLabelApps extends Component {
  summary = "While CEO of Boon Investments, my team developed multiple white-label applications to pair with our SaaS offering for traditional investment management firms.\n\nAs CEO, I was responsible for negotiating contracts, designing and developing the core white-label template for iOS, and managing the project timeline sfor the applications we built for partners.";
  osharesCaption = "OShares ETF Investment"
  osharesBody = "Beanstox is an application my team built for O'Shares, the ETF company run by Kevin O'Leary.\n\nFor the Beanstox app, we designed and developed a custom user signup process which incorporated O'Shares' interal investment methodology."
  astorCaption = "Astor Investment Management"
  astorBody = "Astor served as the pilot project for Boon's white label applications. They are a registered investment advisor that provides client services to over $2 billion in client assets.\n\nThe first client is always the hardest. For the Astor deal, most of my time was spent getting product deadlines to match partner expectations, and vice versa. In comparison, developing the Astor app was surprisingly easy."

  skillsDictionary = {
    "Development": ["Swift", "Python"],
    "Technology": ["Xcode", "Sketch", "AWS Lambda"],
    "General": ["Product Management", "Design", "Partnerships", "Contracts"]
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

  renderOsharesSection() {
    return (
      <div className="portfolio-page__section">
        <div className="portfolio-page__section__body row-wrap">
          <div className="white-label-apps__product__text">
            <h3>Beanstox by O'Shares</h3>
            <p className="portfolio-page__section__body__description">{this.osharesBody}</p>
          </div>
          <img className="white-label-apps__product__iphone-image" src={require('../../../assets/images/beanstox-launch-screen.png')}/>
        </div>
      </div>
    )
  }

  renderAstorSection() {
    return (
      <div>
        <div className="portfolio-page__section">
          <h1 className="portfolio-page__section__title">Product</h1>
          <div className="portfolio-page__section__body row-wrap-reverse">
            <img className="white-label-apps__product__iphone-image" src={require('../../../assets/images/astor-launch-screen.png')}/>
            <div className="white-label-apps__product__text">
              <h3>Astor Investment Management</h3>

              <p className="portfolio-page__section__body__description">{this.astorBody}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderTimeline() {
    return (
      <div className="portfolio-page__section white-label-apps__timeline">
        <h1 className="portfolio-page__section__title">Progress</h1>
        <img class="white-label-apps__timeline__image timeline__image--desktop" src={require('../../../assets/images/white-label-apps-timeline-desktop.png')} />
        <img class="white-label-apps__timeline__image timeline__image--mobile" src={require('../../../assets/images/white-label-apps-timeline-mobile.png')} />

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
    return(
      <div className="portfolio-page white-label-apps">
        <div className="portfolio-page__body">
          <img className="portfolio-page__banner" src={require('../../../assets/images/white-label-apps-banner.png')}/>
          <div className="portfolio-page__section">
            <h1 className="portfolio-page__section__title">Summary</h1>
            <p className="portfolio-page__section__body">{this.summary}</p>
          </div>
          {this.renderAstorSection()}
          {this.renderOsharesSection()}
          {this.renderTimeline()}
          {this.renderSkillsList()}
        </div>
      </div>
    )
  }
}

export default WhiteLabelApps
