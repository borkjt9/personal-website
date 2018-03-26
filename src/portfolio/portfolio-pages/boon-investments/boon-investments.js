import React from 'react';
import renderSkillsList from '../common-objects/skills-list';
import renderTimeline from '../common-objects/timeline';
import renderSummary from '../common-objects/summary';
import renderBanner from '../common-objects/banner';
import renderProduct from '../common-objects/product';
import renderDesign from '../common-objects/design';
import renderInvestment from '../common-objects/investment';
import './boon-investments.scss';

function BoonInvestments() {
  const summaryBody = "Boon Investments is the first S.E.C. registered investment advisor in the U.S> to accept international clients.\n\nAs CEO/Co-founder of Boon, my main responsibilities included leading design for Boon's suite of products, writing the investment algorithms which power Boon's portfolios, developing Boon's flagship iOS application, and closing deals with multiple business partners.";

  const skillsDictionary = {
    Development: ['Python', 'Swift', 'Javascript', 'HTML/CSS'],
    Technology: ['Xcode', 'Sketch', 'AWS Lambda'],
    Finance: ['Investment Algorithms', 'Automation', 'Financial Modeling'],
    General: ['Product Management', 'Design', 'Marketing', 'Contracts', 'Regulation'],
  }

  const productSections = [
    {
      productCaption: 'Direct U.S. investment made simple',
      productDescription: 'Boon offers international investors passive, long-term investments in the United States equities, bonds, and real estate markets.\n\nFrom trade execution to asset allocation to portfolio re-balancing, Boon helps clients with all stages of the investment cycle.',
      img: {
        alt: "boon investments app screen depicting the user's investment history",
        classNames: "portfolio-page__product__iphone-image",
        src: "https://johnborkowski.me/images/iphone-investment-history-400.jpg",
        srcSet: "https://johnborkowski.me/images/iphone-investment-history-200.jpg 200w, https://johnborkowski.me/images/iphone-investment-history-400.jpg 400w, https://johnborkowski.me/images/iphone-investment-history-600.jpg 600w",
        sizes: "(max-width: 200px) 95vw, 200px"
      }
    },
    {
      productCaption: 'Clients pick the companies\nWe optimize the portfolios',
      productDescription: 'Boon offers clients the ability to incorporate companies of their choice into the portfolio allocation process.\n\nWe then blend these choices with a diversified pool of assets to create a portfolio tailored to each client’s unique financial circumstance.',
      img: {
        alt: "boon investments app screen depicting the user's allocation",
        classNames: "portfolio-page__product__iphone-image",
        src: "https://johnborkowski.me/images/iphone-allocation-400.jpg",
        srcSet: "https://johnborkowski.me/images/iphone-allocation-200.jpg 200w, https://johnborkowski.me/images/iphone-allocation-400.jpg 400w, https://johnborkowski.me/images/iphone-allocation-600.jpg 600w",
        sizes: "(max-width: 200px) 95vw, 200px",
      }
    },
  ]

  const designInput = {
    body: "I designed the first prototype of Boon in August 2015. Over the next year, Boon went through many iterations (each incrementally less terrible) before launching to the public.\n\nI used Sketch to design Boon's interface, and developed the application in Swift, Apple’s native programming language.",
    caption: "From Conception to MVP",
    href: "https://johnborkowski.me/images/boon-wireframe.jpg",
    img: {
      alt: "thumbnail of the design wireframe for the boon investments application",
      classNames: "portfolio-page__design__wireframe__image transition-border",
      src: "https://johnborkowski.me/images/boon-wireframe-500.jpg",
      srcSet: "https://johnborkowski.me/images/boon-wireframe-250.jpg 250w, https://johnborkowski.me/images/boon-wireframe-500.jpg 500w, https://johnborkowski.me/images/boon-wireframe-750.jpg 750w",
      sizes: "(max-width: 250px) 95vw, 250px"
    }
  }

  const investmentInput = {
    caption: 'Automated Portfolio Management',
    body: 'Each client that signs up for Boon receives a unique investment strategy tailored to their risk preferences.\n\nI developed the algorithms which power this process in Python.',
    href: "https://johnborkowski.me/pdfs/boon-investments-white-paper.pdf",
    img: {
      alt: "thumbnail of Boon Investment's investment white paper",
      classNames: "portfolio-page__investment__white-paper__image transition-border",
      src: "https://johnborkowski.me/images/white-paper-thumbnail-500.jpg",
      srcSet: "https://johnborkowski.me/images/white-paper-thumbnail-250.jpg 250w, https://johnborkowski.me/images/white-paper-thumbnail-500.jpg 500w, https://johnborkowski.me/images/white-paper-thumbnail-750.jpg 750w",
      sizes: "(max-width: 250px) 95vw, 250px",
    }
  }

  return (
    <div className="portfolio-page boon-investments">
      <div className="portfolio-page__body">
        {renderBanner('boon-investments', 'boon investments')}
        {renderSummary(summaryBody)}
        {renderDesign(designInput)}
        {renderProduct(productSections)}
        {renderInvestment(investmentInput)}
        {renderTimeline('boon-investments')}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default BoonInvestments;
