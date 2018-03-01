import React, {Component} from 'react';
import _ from 'lodash';
import './boon-investments.scss';
import whitePaperPDF from '../../../assets/pdfs/boon-investments-white-paper.pdf'
class BoonInvestments extends Component {

  summaryBody = "Boon Investments is an S.E.C registered investment advisor that provides non-U.S. residents access to the U.S. investment markets. Boon is the first robo-advisor in the United States to accept international clients.\n\n As CEO/Co-founder, my main contributions to Boon include leading design for Boon's suite of products, writing the investment algorithms which power Boon's portfolios, developing Boon's flagship iOS application, and closing deals with multiple business partners.";

  skillsDictionary = {
    "Development": ["Python", "Swift", "Javascript", "HTML/CSS"],
    "Technology": ["Xcode", "Sketch", "AWS Lambda"],
    "Finance": ["Investment Algorithms", "Automation", "Financial Modeling"],
    "General": ["Product Management", "Design", "Marketing", "Contracts",  "Regulation", ]
  }

  productCaptions = ["Direct U.S. investment made simple", "Clients pick the companies\nWe optimize the portfolios"]
  productDescriptions = [
    "Boon offers international investors passive, long-term investments in the United States equities, bonds, and real estate markets.\n\nFrom trade execution to asset allocation to portfolio re-balancing, Boon helps clients with all stages of the investment cycle.",
    "Boon offers clients the ability to incorporate companies of their choice into the portfolio allocation process.\n\nWe then blend these choices with a diversified pool of assets to create a portfolio tailored to each client’s unique financial circumstance."]

  designBody = "I designed the first prototype of Boon in August 2015. Over the next year, Boon went through many iterations (each incrementally less terrible) before launching to the public.\n\nI used Sketch to design Boon's interface, and developed the application in Swift, Apple’s native programming language."
  designCaption = "From Conception to MVP"

  investmentCaption = "Automated Portfolio Management"
  investmentBody = "Each client that signs up for Boon receives a unique investment strategy tailored to their risk preferences.\n\nI developed the algorithms which power this process in Python."
  worldwideCaption = "Available in over 140 countries."
  worldwideBody = "Boon is the first robo-advisor in the United States to accept non-U.S. clients."

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
      <div className="portfolio-page__section__body row-wrap-reverse">
        <div className="boon-investments__product__iphone-image">
          <img style={{"width": "100%"}} src={require('../../../assets/images/iphone-investment-history.png')}/>
        </div>
        <div className="boon-investments__product__text">
          <h3>{this.productCaptions[0]}</h3>
          <p className="portfolio-page__section__body__description">{this.productDescriptions[0]}</p>
        </div>
        </div>
        <div className="portfolio-page__section__body row-wrap">
        <div className="boon-investments__product__text">
          <h3>{this.productCaptions[1]}</h3>
          <p className="portfolio-page__section__body__description">{this.productDescriptions[1]}</p>
        </div>
        <div className="boon-investments__product__iphone-image">
          <img style={{"width": "100%"}} className="boon-investments__product__iphone-image" src={require('../../../assets/images/iphone-allocation.png')}/>
        </div>
      </div>
    </div>
  )
}


  renderDesignSection() {
    return (
      <div className="portfolio-page__section boon-investments__design">
        <h1 className="portfolio-page__section__title">Design</h1>
        <div className="portfolio-page__section__body row-wrap">
          <div className="boon-investments__design__text">
            <h3>{this.designCaption}</h3>
            <p className="portfolio-page__section__body__description">{this.designBody}</p>
          </div>
          <div onClick={this.toggleWireframe.bind(this)} className="boon-investments__wireframe">
            <img className="boon-investments__design__wireframe__image transition-border" src={require('../../../assets/images/boon-wireframe.png')}/>
            <h5 className="boon-investments__design__wireframe__description">Click to expand</h5>
          </div>
      </div>
    </div>
    )
  }

  renderInvestmentSection() {
    return (
      <div className="portfolio-page__section boon-investments__investment">
        <h1 className="portfolio-page__section__title">Investment</h1>
        <div className="portfolio-page__section__body row-wrap-reverse">

          <div className="boon-investments__investment__white-paper">
            <a href={whitePaperPDF} target="_blank">
            <img className="boon-investments__investment__white-paper__image transition-border" src={require('../../../assets/images/white-paper-thumbnail.png')}/>
            <h5 className="boon-investments__investment__white-paper__description">INVESTMENT WHITE PAPER</h5>
          </a>
          </div>
          <div className="boon-investments__investment__text">
            <h3>{this.investmentCaption}</h3>
            <p className="portfolio-page__section__body__description">{this.investmentBody}</p>
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
        <img class="portfolio-page__wireframe-modal__content" src={require("../../../assets/images/boon-wireframe.png")} />
        <span onClick={this.toggleWireframe.bind(this)} class="portfolio-page__wireframe-modal__close-wrapper">
          <span className="portfolio-page__wireframe-modal__close-wrapper__close">&times;</span>
        </span>
        <div id="caption" />
        </div>
      </div>

    )
  }

  renderWorldwideAccess() {
    const textStyle = {"margin": "auto"}
    return (
      <div className="portfolio-page__section section-worldwide">
        <h1 className="portfolio-page__section__title">Access</h1>
        <div className="section-body">
          <img src={require('../../../assets/images/worldwide-access-map.png')} />
          <div style={textStyle}>
            <h3>{this.worldwideCaption}</h3>
            <p>{this.worldwideBody}</p>
          </div>
        </div>
      </div>
    )
  }

  renderTimeline() {
    return (
      <div className="portfolio-page__section boon-investments__timeline">
        <h1 className="portfolio-page__section__title">Progress</h1>
        <img class="boon-investments__timeline__image timeline__image--desktop" src={require('../../../assets/images/boon-investments-timeline-desktop.png')} />
        <img class="boon-investments__timeline__image timeline__image--mobile" src={require('../../../assets/images/boon-investments-timeline-mobile.png')} />

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

  renderSocialMedia() {
    return (
      <div className="portfolio-page__social-media">
        <a href="https://twitter.com/booninvestments"><img src={require('../../../assets/images/twitter-logo.png')} /></a>

        <a href="https://facebook.com/booninvestments"><img src={require('../../../assets/images/facebook-logo.png')} /></a>

      </div>
    )
  }

  render() {
    return (
      <div className="portfolio-page boon-investments">
        <div className="portfolio-page__body">
          <img className="portfolio-page__banner" src={require('../../../assets/images/boon-investments-banner.png')}/>
          {this.renderSummarySection()}
          {this.renderDesignSection()}
          {this.renderProductSection()}
          {this.renderInvestmentSection()}

          {this.renderTimeline()}
          {this.renderSkillsList()}
          {/* {this.renderSocialMedia()} */}
        </div>
        {this.renderZoomedWireframe()}
      </div>
    )
  }
}

export default BoonInvestments;
