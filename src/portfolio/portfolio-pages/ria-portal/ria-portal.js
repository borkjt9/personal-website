import React, {Component} from 'react';
import _ from 'lodash';
import './ria-portal.scss';

class RiaPortal extends Component {

  summaryBody = "Boon's  Automated Order Management System (\"Auto-OMS\") is a B2B portfolio management product that helps mid-sized investment advisors bridge the gap to the 21st century.\n\nThe Auto-OMS is a a full-service RESTful API paired with an intuitive web application that enables advisors to manage thousands of client portfolios with a few clicks.";


  skillsDictionary = {
    "Development": ["TypeScript", "HTML/CSS", "AngularJS", "RESTful APIs"],
    "Technology": ["Sketch", "AWS Lambda"],
    "General": ["Product Management", "Design", "Partnerships", "Contracts"]
  }

  productCaptions = ["Automated Portfolio Management", ""]
  productDescriptions = [
    "Boon offers clients the ability to incorporate companies of their choice into the portfolio allocation process.\n\nWe then blend these choices with a diversified pool of assets to create a portfolio tailored to each client’s unique financial circumstance.",
    "Boon clients have the ability to incorporate companies of their choice into the portfolio allocation process.\n\nWe then combine the clients choices with a diversified portfolio of assets to minimize their risk and maximize their returns."
  ]

  designBody = "The Auto-OMS was spun out of Boon's existing technology infrastructure. It began as an API that connected partners to Boon's internal engine.\n\nVery quickly, the Boon team realized they needed an interface through which partners could more easily interact with the Auto-OMS. The RIA Portal satisfies this need."
  designCaption = "From API to GUI"


  constructor(props) {
    super(props)
    this.state = {
      expandWireframe: false
    }
  }

  renderProductSection() {
    return (
      <div className="portfolio-page__section">
        <h1 className="portfolio-page__section__title boon__investments__product">Product</h1>
        <div className="portfolio-page__section__body">
          <img className="ria-portal__product__portal-image" src={require('../../../assets/images/ria-portal-1.png')}/>
          <div className="ria-portal__product__text">
            <h3>{this.productCaptions[0]}</h3>
            <p>{this.productDescriptions[0]}</p>
          </div>
          </div>
          <div className="portfolio-page__section__body">
          <div className="ria-portal__product__text">
            <h3>{this.productCaptions[1]}</h3>
            <p>{this.productDescriptions[1]}</p>
          </div>
          <img className="ria-portal__product__portal-image" src={require('../../../assets/images/ria-portal-2.png')}/>
        </div>
      </div>
    )
  }


    renderDesignSection() {
      return (
        <div className="portfolio-page__section ria-portal__design">
          <h1 className="portfolio-page__section__title">Design</h1>
          <div className="portfolio-page__section__body">
            <div className="ria-portal__design__text">
              <h3>{this.designCaption}</h3>
              <p>{this.designBody}</p>
            </div>
            <div onClick={this.toggleWireframe.bind(this)} className="ria-portal__wireframe">
              <img className="ria-portal__design__wireframe__image transition-border" src={require('../../../assets/images/ria-portal-wireframe-thumbnail.png')}/>
              <h5 className="ria-portal__design__wireframe__description">Click to expand</h5>
            </div>
        </div>
      </div>
      )
    }

    toggleWireframe() {
      this.setState({
        expandWireframe: !this.state.expandWireframe
      })
    }


    renderZoomedWireframe() {
      const wireframeClassNames= this.state.expandWireframe ? "portfolio-page__wireframe-modal is-expanded": "portfolio-page__wireframe-modal modal is-minimized"
      return(
        <div>
          <div class={wireframeClassNames}>
          <img class="portfolio-page__wireframe-modal__content" src={require("../../../assets/images/ria-portal-wireframe.png")} />
          <span onClick={this.toggleWireframe.bind(this)} class="portfolio-page__wireframe-modal__close-wrapper">
            <span className="portfolio-page__wireframe-modal__close-wrapper__close">&times;</span>
          </span>
          <div id="caption"/>
          </div>
        </div>

      )
    }

    renderTimeline() {
      return (
        <div className="portfolio-page__section ria-portal__timeline">
          <h1 className="portfolio-page__section__title">Progress</h1>
          <img class="ria-portal__timeline__image" src={require('../../../assets/images/ria-portal-timeline.png')} />
        </div>
      )
    }

    renderSummarySection() {
      return (
        <div className="portfolio-page__section portfolio-page__summary">
          <h1 className="portfolio-page__section__title">Summary</h1>
          <p className="portfolio-page__section__body">
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
      <div className="portfolio-page ria-portal">
        <div className="portfolio-page__body">
          <img className="portfolio-page__banner" src={require('../../../assets/images/ria-portal-banner.png')}/>
          {this.renderSummarySection()}
          {this.renderDesignSection()}
          {this.renderProductSection()}
          {this.renderTimeline()}
          {this.renderSkillsList()}
        </div>
        {this.renderZoomedWireframe()}
      </div>
    )
  }
}

export default RiaPortal;