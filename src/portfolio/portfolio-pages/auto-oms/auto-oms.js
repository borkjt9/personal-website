import React from 'react';
import renderSkillsList from '../common-objects/skills-list';
import renderTimeline from '../common-objects/timeline';
import renderSummary from '../common-objects/summary';
import renderBanner from '../common-objects/banner';
import renderProduct from '../common-objects/product';
import renderDesign from '../common-objects/design';

import './auto-oms.scss';

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
        src: 'https://johnborkowski.me/images/auto-oms-1-600.jpg',
        srcSet: 'https://johnborkowski.me/images/auto-oms-1-300.jpg 300w, https://johnborkowski.me/images/auto-oms-1-600.jpg 600w, https://johnborkowski.me/images/auto-oms-1-900.jpg 900w',
        sizes: '(max-width: 300px) 100vw, 300px', // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
      },
    },
    {
      caption: 'Comprehensive Reporting',
      description: 'The RIA Portal provides partners with both top-down and bottom-up reporting capabilities.\n\nPartners can go from analyzing high level trends to client specific detail in a few clicks.',
      img: {
        alt: "the ria portal depicting a top-down report of the partner's business",
        classNames: 'auto-oms__product__portal-image',
        src: 'https://johnborkowski.me/images/auto-oms-2-600.jpg',
        srcSet: 'https://johnborkowski.me/images/auto-oms-2-300.jpg 300w, https://johnborkowski.me/images/auto-oms-2-600.jpg 600w, https://johnborkowski.me/images/auto-oms-2-900.jpg 900w',
        sizes: '(max-width: 300px) 100vw, 300px',
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
      src: 'https://johnborkowski.me/images/boon-wireframe-500.jpg',
      srcSet: 'https://johnborkowski.me/images/boon-wireframe-250.jpg 250w, https://johnborkowski.me/images/boon-wireframe-500.jpg 500w, https://johnborkowski.me/images/boon-wireframe-750.jpg 750w',
      sizes: '(max-width: 250px) 95vw, 250px',
    },
  };

  return (
    <div className="portfolio-page auto-oms">
      <div className="portfolio-page__body">
        {renderBanner('auto-oms', 'auto-oms')}
        {renderSummary(summaryBody)}
        {renderDesign(designInput)}
        {renderProduct(productInputs)}
        {renderTimeline('auto-oms')}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default AutoOMS;
