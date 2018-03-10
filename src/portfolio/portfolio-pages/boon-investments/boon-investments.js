import React, { Component } from 'react';
import renderSkillsList from '../common-objects/skills-list';
import renderTimeline from '../common-objects/timeline';
import renderSummary from '../common-objects/summary';
import renderBanner from '../common-objects/banner';
import './boon-investments.scss';

class BoonInvestments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandWireframe: false,
    };
    this.toggleWireframe = this.toggleWireframe.bind(this);
  }

  summaryBody = "Boon Investments is an S.E.C registered investment advisor that provides non-U.S. residents access to the U.S. investment markets. Boon is the first robo-advisor in the United States to accept international clients.\n\nAs CEO/Co-founder of Boon, my main responsibilities included leading design for Boon's suite of products, writing the investment algorithms which power Boon's portfolios, developing Boon's flagship iOS application, and closing deals with multiple business partners.";

  skillsDictionary = {
    Development: ['Python', 'Swift', 'Javascript', 'HTML/CSS'],
    Technology: ['Xcode', 'Sketch', 'AWS Lambda'],
    Finance: ['Investment Algorithms', 'Automation', 'Financial Modeling'],
    General: ['Product Management', 'Design', 'Marketing', 'Contracts', 'Regulation'],
  }

  productCaptions = ['Direct U.S. investment made simple', 'Clients pick the companies\nWe optimize the portfolios']
  productDescriptions = [
    'Boon offers international investors passive, long-term investments in the United States equities, bonds, and real estate markets.\n\nFrom trade execution to asset allocation to portfolio re-balancing, Boon helps clients with all stages of the investment cycle.',
    'Boon offers clients the ability to incorporate companies of their choice into the portfolio allocation process.\n\nWe then blend these choices with a diversified pool of assets to create a portfolio tailored to each client’s unique financial circumstance.']

  designBody = "I designed the first prototype of Boon in August 2015. Over the next year, Boon went through many iterations (each incrementally less terrible) before launching to the public.\n\nI used Sketch to design Boon's interface, and developed the application in Swift, Apple’s native programming language."
  designCaption = 'From Conception to MVP'

  investmentCaption = 'Automated Portfolio Management'
  investmentBody = 'Each client that signs up for Boon receives a unique investment strategy tailored to their risk preferences.\n\nI developed the algorithms which power this process in Python.'
  worldwideCaption = 'Available in over 140 countries.'
  worldwideBody = 'Boon is the first robo-advisor in the United States to accept non-U.S. clients.'

  toggleWireframe() {
    this.setState({
      expandWireframe: !this.state.expandWireframe,
    });
  }

  renderProductSection() {
    return (
      <div className="portfolio-page__section">
        <h2 className="portfolio-page__section__title boon__investments__product">Product</h2>
        <div className="portfolio-page__section__body row-wrap">
          <div className="boon-investments__product__iphone-image">
            <img
              alt="boon investments app screen depicting the user's investment history"
              style={{ width: '100%' }}
              src="https://s3.amazonaws.com/jtb-personal-website/images/iphone-investment-history-400.jpg"
              srcSet="https://s3.amazonaws.com/jtb-personal-website/images/iphone-investment-history-200.jpg 200w,
            https://s3.amazonaws.com/jtb-personal-website/images/iphone-investment-history-400.jpg 400w,
            https://s3.amazonaws.com/jtb-personal-website/images/iphone-investment-history-600.jpg 600w"
              sizes="(max-width: 200px) 95vw, 200px"
            />
          </div>
          <div className="boon-investments__product__text">
            <h3>{this.productCaptions[0]}</h3>
            <p className="portfolio-page__section__body__description">{this.productDescriptions[0]}</p>
          </div>
        </div>
        <div className="portfolio-page__section__body row-wrap-reverse">
          <div className="boon-investments__product__text">
            <h3>{this.productCaptions[1]}</h3>
            <p className="portfolio-page__section__body__description">{this.productDescriptions[1]}</p>
          </div>
          <div className="boon-investments__product__iphone-image">
            <img
              alt="boon investments app screen depicting the user's allocation"
              style={{ width: '100%' }}
              className="boon-investments__product__iphone-image"
              src="https://s3.amazonaws.com/jtb-personal-website/images/iphone-allocation-400.jpg"
              srcSet="https://s3.amazonaws.com/jtb-personal-website/images/iphone-allocation-200.jpg 200w,
            https://s3.amazonaws.com/jtb-personal-website/images/iphone-allocation-400.jpg 400w,
            https://s3.amazonaws.com/jtb-personal-website/images/iphone-allocation-600.jpg 600w"
              sizes="(max-width: 200px) 95vw, 200px"
            />
          </div>
        </div>
      </div>
    );
  }

  renderDesignSection() {
    return (
      <div className="portfolio-page__section boon-investments__design">
        <h2 className="portfolio-page__section__title">Design</h2>
        <div className="portfolio-page__section__body row-wrap-reverse">
          <div className="boon-investments__design__text">
            <h3>{this.designCaption}</h3>
            <p className="portfolio-page__section__body__description">{this.designBody}</p>
          </div>
          <div className="boon-investments__wireframe">
            <a target="_blank" rel="noopener noreferrer" href="https://s3.amazonaws.com/jtb-personal-website/images/boon-wireframe.jpg">
              {/* onClick={this.toggleWireframe} className="boon-investments__wireframe"> */}
              <img
                alt="thumbnail of the design wireframe for the boon investments application"
                className="boon-investments__design__wireframe__image transition-border"
                src="https://s3.amazonaws.com/jtb-personal-website/images/boon-wireframe-500.jpg"
                srcSet="https://s3.amazonaws.com/jtb-personal-website/images/boon-wireframe-250.jpg 250w,
                https://s3.amazonaws.com/jtb-personal-website/images/boon-wireframe-500.jpg 500w,
                https://s3.amazonaws.com/jtb-personal-website/images/boon-wireframe-750.jpg 750w"
                sizes="(max-width: 250px) 95vw, 250px"
              />
              <h5 className="boon-investments__design__wireframe__description">Click to expand</h5>
            </a>
          </div>
        </div>
      </div>
    );
  }

  renderInvestmentSection() {
    return (
      <div className="portfolio-page__section boon-investments__investment">
        <h2 className="portfolio-page__section__title">Investment</h2>
        <div className="portfolio-page__section__body row-wrap">

          <div className="boon-investments__investment__white-paper">
            <a href="https://s3.amazonaws.com/jtb-personal-website/pdfs/boon-investments-white-paper.pdf" target="_blank" rel="noopener noreferrer">
              <img
                alt="thumbnail of Boon Investment's investment white paper"
                className="boon-investments__investment__white-paper__image transition-border"
                src="https://s3.amazonaws.com/jtb-personal-website/images/white-paper-thumbnail-500.jpg"
                srcSet="https://s3.amazonaws.com/jtb-personal-website/images/white-paper-thumbnail-250.jpg 250w,
              https://s3.amazonaws.com/jtb-personal-website/images/white-paper-thumbnail-500.jpg 500w,
              https://s3.amazonaws.com/jtb-personal-website/images/white-paper-thumbnail-750.jpg 750w"
                sizes="(max-width: 250px) 95vw, 250px"
              />
              <h5 className="boon-investments__investment__white-paper__description">INVESTMENT WHITE PAPER</h5>
            </a>
          </div>
          <div className="boon-investments__investment__text">
            <h3>{this.investmentCaption}</h3>
            <p className="portfolio-page__section__body__description">{this.investmentBody}</p>
          </div>
        </div>
      </div>
    );
  }

  renderZoomedWireframe() {
    const wireframeClassNames = this.state.expandWireframe ? 'portfolio-page__wireframe-modal is-expanded' : 'portfolio-page__wireframe-modal modal is-minimized';
    return (
      <div>
        <div className={wireframeClassNames}>
          <img
            alt="Boon Investments' design wireframe"
            className="portfolio-page__wireframe-modal__content"
            src="https://s3.amazonaws.com/jtb-personal-website/images/boon-wireframe.png"
          />
          <button onClick={this.toggleWireframe} className="portfolio-page__wireframe-modal__close-wrapper">
            <span className="portfolio-page__wireframe-modal__close-wrapper__close">&times;</span>
          </button>
          <div id="caption" />
        </div>
      </div>

    );
  }

  render() {
    return (
      <div className="portfolio-page boon-investments">
        <div className="portfolio-page__body">
          {renderBanner('boon-investments', 'boon investments')}
          {renderSummary(this.summaryBody)}
          {this.renderDesignSection()}
          {this.renderProductSection()}
          {this.renderInvestmentSection()}
          {renderTimeline('boon-investments')}
          {renderSkillsList(this.skillsDictionary)}
        </div>
        {this.renderZoomedWireframe()}
      </div>
    );
  }
}

export default BoonInvestments;
