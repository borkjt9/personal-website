import React from 'react';
import {
  renderSkillsList,
  renderTimeline,
  renderSummary,
  renderBanner,
  renderProduct,
  renderDesign,
} from '../portfolio-page';

import './auto-oms.scss';

import banner400 from '../../assets/images/auto-oms-banner-400.jpg';
import banner800 from '../../assets/images/auto-oms-banner-800.jpg';
import banner1200 from '../../assets/images/auto-oms-banner-1200.jpg';
import banner1600 from '../../assets/images/auto-oms-banner-1600.jpg';

import imgTD400 from '../../assets/images/auto-oms-timeline-desktop-400.jpg';
import imgTD800 from '../../assets/images/auto-oms-timeline-desktop-800.jpg';
import imgTD1600 from '../../assets/images/auto-oms-timeline-desktop-1600.jpg';
import imgTM400 from '../../assets/images/auto-oms-timeline-mobile-400.jpg';
import imgTM800 from '../../assets/images/auto-oms-timeline-mobile-800.jpg';
import imgTM1600 from '../../assets/images/auto-oms-timeline-mobile-1600.jpg';
import wireframe from '../../assets/images/auto-oms-wireframe.jpg';

import prod1300 from '../../assets/images/auto-oms-1-300.jpg';
import prod1600 from '../../assets/images/auto-oms-1-600.jpg';
import prod1900 from '../../assets/images/auto-oms-1-900.jpg';
import prod2300 from '../../assets/images/auto-oms-2-300.jpg';
import prod2600 from '../../assets/images/auto-oms-2-600.jpg';
import prod2900 from '../../assets/images/auto-oms-2-900.jpg';

import design300 from '../../assets/images/auto-oms-wireframe-thumbnail-300.jpg';
import design600 from '../../assets/images/auto-oms-wireframe-thumbnail-600.jpg';
import design900 from '../../assets/images/auto-oms-wireframe-thumbnail-900.jpg';

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

function AutoOMS() {
  const summaryBody = "The Automated Order Management System (\"Auto-OMS\") is a B2B SaaS product that was spun out of Boon Investments' existing technology.\n\nThe Auto-OMS enables investment advisors to increase their client base without increasing their workload by automating all aspects of the portfolio management process, including dividend reinvestment, asset sub-allocation, and client onboarding.\n\nAs product lead for the Auto-OMS, I managed a small team of developers to design and build the RIA portal, ensured we hit the deadlines communicated to partners, and integrated new partners into the Auto-OMS.";

  const skillsDictionary = {
    Development: ['TypeScript', 'HTML/CSS', 'AngularJS', 'RESTful APIs'],
    Technology: ['Sketch', 'AWS Lambda'],
    General: ['Product Management', 'Design', 'Partnerships', 'Contracts'],
  };

  const productInputs = [
    {
      caption: 'Automated Portfolio Management',
      description: 'During onboarding, each partner sets the parameters which tells the Auto-OMS how to manage their clients.\n\nThereafter, the Auto-OMS oversees all client transactions, including portfolio rebalancing, dividend reinvestment, and asset sub-allocations.',
      img: {
        alt: "the ria portal depicting a client's allocation",
        classNames: 'portfolio-page__product__portal-image',
        src: prod1600,
        srcSet: `${prod1300} 300w, ${prod1600} 600w, ${prod1900} 900w`,
        sizes: '(max-width: 300px) 100vw, 300px', // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
      },
    },
    {
      caption: 'Comprehensive Reporting',
      description: 'The RIA Portal provides partners with both top-down and bottom-up reporting capabilities.\n\nPartners can go from analyzing high level trends to client specific detail in a few clicks.',
      img: {
        alt: "the ria portal depicting a top-down report of the partner's business",
        classNames: 'auto-oms__product__portal-image',
        src: prod2600,
        srcSet: `${prod2300} 300w, ${prod2600} 600w, ${prod2900} 900w`,
        sizes: '(max-width: 300px) 100vw, 300px',
      },
    },
  ];

  const designInput = {
    body: "The Auto-OMS began as an API that connected partners to Boon's internal engine.\n\nVery quickly, I realized (i.e. our partners repeatedly told me) that they needed an interface through which they could more easily interact with the API. I designed the RIA Portal to satisfy this need.",
    caption: 'From API to GUI',
    href: wireframe,
    img: {
      alt: 'thumbail of the design wireframe for the ria portal',
      classNames: 'portfolio-page__design__wireframe__image transition-border',
      src: design300,
      srcSet: `${design300} 300w, ${design600} 600w, ${design900} 900w`,
      sizes: '(max-width: 300px) 100vw, 300px',
    },
  };

  return (
    <div className="portfolio-page auto-oms">
      <div className="portfolio-page__body">
        {renderBanner(bannerImgSet, 'auto-oms')}
        {renderSummary(summaryBody)}
        {renderDesign(designInput)}
        {renderProduct(productInputs)}
        {renderTimeline('auto-oms', timelineImgSet)}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default AutoOMS;
