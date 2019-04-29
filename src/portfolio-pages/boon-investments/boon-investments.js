import React from 'react';
import {
  renderSkillsList,
  renderTimeline,
  renderSummary,
  renderBanner,
  renderProduct,
  renderDesign,
  renderInvestment,
} from '../portfolio-page';

import './boon-investments.scss';

import imgTD400 from '../../assets/images/boon-investments-timeline-desktop-400.jpg';
import imgTD800 from '../../assets/images/boon-investments-timeline-desktop-800.jpg';
import imgTD1600 from '../../assets/images/boon-investments-timeline-desktop-1600.jpg';
import imgTM400 from '../../assets/images/boon-investments-timeline-mobile-400.jpg';
import imgTM800 from '../../assets/images/boon-investments-timeline-mobile-800.jpg';
import imgTM1600 from '../../assets/images/boon-investments-timeline-mobile-1600.jpg';


import iphoneInvestmentHistory200 from '../../assets/images/iphone-investment-history-200.jpg';
import iphoneInvestmentHistory400 from '../../assets/images/iphone-investment-history-400.jpg';
import iphoneInvestmentHistory600 from '../../assets/images/iphone-investment-history-600.jpg';

import iphoneAllocation200 from '../../assets/images/iphone-allocation-200.jpg';
import iphoneAllocation400 from '../../assets/images/iphone-allocation-400.jpg';
import iphoneAllocation600 from '../../assets/images/iphone-allocation-600.jpg';
import boonWireframe250 from '../../assets/images/boon-wireframe-250.jpg';
import boonWireframe500 from '../../assets/images/boon-wireframe-500.jpg';
import boonWireframe750 from '../../assets/images/boon-wireframe-750.jpg';
import whitePaperThumbnail250 from '../../assets/images/white-paper-thumbnail-250.jpg';
import whitePaperThumbnail500 from '../../assets/images/white-paper-thumbnail-500.jpg';
import whitePaperThumbnail750 from '../../assets/images/white-paper-thumbnail-750.jpg';

import banner400 from '../../assets/images/boon-investments-banner-400.jpg';
import banner800 from '../../assets/images/boon-investments-banner-800.jpg';
import banner1200 from '../../assets/images/boon-investments-banner-1200.jpg';
import banner1600 from '../../assets/images/boon-investments-banner-1600.jpg';

const bannerImgSet = {
  banner400,
  banner800,
  banner1200,
  banner1600,
};

const timelineImgSet = {
  imgTD400,
  imgTD800,
  imgTD1600,
  imgTM400,
  imgTM800,
  imgTM1600,
};
function BoonInvestments() {
  const summaryBody = "Boon Investments is the first S.E.C. registered investment advisor in the U.S> to accept international clients.\n\nAs CEO/Co-founder of Boon, my main responsibilities included leading design for Boon's suite of products, writing the investment algorithms which power Boon's portfolios, developing Boon's flagship iOS application, and closing deals with multiple business partners.";

  const skillsDictionary = {
    Development: ['Python', 'Swift', 'Javascript', 'HTML/CSS'],
    Technology: ['Xcode', 'Sketch', 'AWS Lambda'],
    Finance: ['Investment Algorithms', 'Automation', 'Financial Modeling'],
    General: ['Product Management', 'Design', 'Marketing', 'Contracts', 'Regulation'],
  };

  const productInputs = [
    {
      caption: 'Direct U.S. investment made simple',
      description: 'Boon offers international investors passive, long-term investments in the United States equities, bonds, and real estate markets.\n\nFrom trade execution to asset allocation to portfolio re-balancing, Boon helps clients with all stages of the investment cycle.',
      img: {
        alt: "boon investments app screen depicting the user's investment history",
        classNames: 'portfolio-page__product__iphone-image',
        src: iphoneInvestmentHistory400,
        srcSet: `${iphoneInvestmentHistory200} 200w, ${iphoneInvestmentHistory400} 400w, ${iphoneInvestmentHistory600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
    {
      caption: 'Clients pick the companies\nWe optimize the portfolios',
      description: 'Boon offers clients the ability to incorporate companies of their choice into the portfolio allocation process.\n\nWe then blend these choices with a diversified pool of assets to create a portfolio tailored to each client’s unique financial circumstance.',
      img: {
        alt: "boon investments app screen depicting the user's allocation",
        classNames: 'portfolio-page__product__iphone-image',
        src: iphoneInvestmentHistory400,
        srcSet: `${iphoneAllocation200} 200w, ${iphoneAllocation400} 400w, ${iphoneAllocation600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
  ];

  const designInput = {
    body: "I designed the first prototype of Boon in August 2015. Over the next year, Boon went through many iterations (each incrementally less terrible) before launching to the public.\n\nI used Sketch to design Boon's interface, and developed the application in Swift, Apple’s native programming language.",
    caption: 'From Conception to MVP',
    href: 'https://johnborkowski.me/images/boon-wireframe.jpg',
    img: {
      alt: 'thumbnail of the design wireframe for the boon investments application',
      classNames: 'portfolio-page__design__wireframe__image transition-border',
      src: boonWireframe500,
      srcSet: `${boonWireframe250} 250w, ${boonWireframe500} 500w, ${boonWireframe750}.jpg 750w`,
      sizes: '(max-width: 250px) 95vw, 250px',
    },
  };

  const investmentInput = {
    caption: 'Automated Portfolio Management',
    body: 'Each client that signs up for Boon receives a unique investment strategy tailored to their risk preferences.\n\nI developed the algorithms which power this process in Python.',
    href: 'https://johnborkowski.me/pdfs/boon-investments-white-paper.pdf',
    img: {
      alt: "thumbnail of Boon Investment's investment white paper",
      classNames: 'portfolio-page__investment__white-paper__image transition-border',
      src: whitePaperThumbnail250,
      srcSet: `${whitePaperThumbnail250} 250w, ${whitePaperThumbnail500} 500w, ${whitePaperThumbnail750} 750w`,
      sizes: '(max-width: 250px) 95vw, 250px',
    },
  };
  return (
    <div className="portfolio-page boon-investments">
      <div className="portfolio-page__body">
        {renderBanner(bannerImgSet, 'boon investments')}
        {renderSummary(summaryBody)}
        {renderDesign(designInput)}
        {renderProduct(productInputs)}
        {renderInvestment(investmentInput)}
        {renderTimeline('boon-investments', timelineImgSet)}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default BoonInvestments;
