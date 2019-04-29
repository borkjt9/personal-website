/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import map from 'lodash/map';

import './portfolio-page.scss';

export function renderBanner(imgSet, title = '') {
  const {
    banner400,
    banner800,
    banner1200,
    banner1600,
  } = imgSet;

  return (
    <div className="portfolio-page__banner">
      <h1 className="portfolio-page__banner__title">{title}</h1>
      <img
        alt="portfolio in action"
        className="portfolio-page__banner__image"
        src={banner400}
        srcSet={`${banner400} 400w,
          ${banner800} 800w,
          ${banner1200} 1200w,
          ${banner1600} 1600w`}
        sizes="(max-width: 800px) 100vw, 800px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
      />
    </div>
  );
}

export function renderDesign(input) {
  return (
    <div className="portfolio-page__section boon-investments__design">
      <h2 className="portfolio-page__section__title">Design</h2>
      <div className="portfolio-page__section__body row-wrap-reverse">
        <div className="portfolio-page__design__text">
          <h3>{input.caption}</h3>
          <p className="portfolio-page__section__body__description">{input.body}</p>
        </div>
        <div className="portfolio-page__wireframe">
          <a target="_blank" rel="noopener noreferrer" href={input.href}>
            <img
              alt={input.img.alt}
              className={input.img.classNames}
              src={input.img.src}
              srcSet={input.img.srcSet}
              sizes={input.img.sizes}
            />
            <h5 className="portfolio-page__design__wireframe__description">Click to expand</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export function renderInvestment(input) {
  return (
    <div className="portfolio-page__section portfolio-page__investment">
      <h2 className="portfolio-page__section__title">Investment</h2>
      <div className="portfolio-page__section__body row-wrap">
        <div className="portfolio-page__investment__white-paper">
          <a
            href={input.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt={input.img.alt}
              className={input.img.classNames}
              src={input.img.src}
              srcSet={input.img.srcSet}
              sizes={input.img.sizes}
            />
            <h5 className="portfolio-page__investment__white-paper__description">INVESTMENT WHITE PAPER</h5>
          </a>
        </div>
        <div className="portfolio-page__investment__text">
          <h3>{input.caption}</h3>
          <p className="portfolio-page__section__body__description">{input.body}</p>
        </div>
      </div>
    </div>
  );
}

export function renderProduct(rows) {
  const subSections = [];
  rows.forEach((row, index) => {
    if (index % 2) {
      const subSection = (
        <div key={row.caption} className="portfolio-page__section__body row-wrap-reverse">
          <div className="portfolio-page__product__iphone-text">
            <h3>{row.caption}</h3>
            <p className="portfolio-page__section__body__description">{row.description}</p>
          </div>
          <img
            alt={row.img.alt}
            className={row.img.classNames}
            src={row.img.src}
            srcSet={row.img.srcSet}

            sizes={row.img.sizes}
          />
        </div>
      );
      subSections.push(subSection);
    } else {
      const subSection = (
        <div key={row.caption} className="portfolio-page__section__body row-wrap">
          <img
            alt={row.img.alt}
            className={row.img.classNames}
            src={row.img.src}
            srcSet={row.img.srcSet}
            sizes={row.img.sizes}
          />
          <div className="portfolio-page__product__iphone-text">
            <h3>{row.caption}</h3>
            <p className="portfolio-page__section__body__description">{row.description}</p>
          </div>
        </div>
      );

      subSections.push(subSection);
    }
  });

  return (
    <div className="portfolio-page__section">
      <h2 className="portfolio-page__section__title boon__investments__product">Product</h2>
      {subSections}
    </div>
  );
}

export function renderSkillsList(skillsDictionary) {
  const skillsTable = map(skillsDictionary, (skills, key) => (
    <div key={key} className="portfolio-page__skills__row">
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

export function renderSummary(summaryBody) {
  return (
    <div className="portfolio-page__section portfolio-page__summary">
      <h2 className="portfolio-page__section__title">Summary</h2>
      <p className="portfolio-page__section__body">
        {summaryBody}
      </p>
    </div>
  );
}

export function renderTimeline(portfolio, imgSet) {
  const {
    imgTD400,
    imgTD800,
    imgTD1600,
    imgTM400,
    imgTM800,
    imgTM1600,
  } = imgSet;
  return (
    <div className="portfolio-page__section portfolio-page__timeline">
      <h2 className="portfolio-page__section__title">Progress</h2>
      <img
        alt="timeline showing the progress made on the auto-oms over the past year"
        className="portfolio-page__timeline__image--desktop"
        src={imgTD400}
        srcSet={`${imgTD400} 400w,
          ${imgTD800} 800w,
          ${imgTD1600} 1600w`}
        sizes="(max-width: 800px) 100vw, 800px"
      />
      <img
        alt="timeline showing the progress made on the auto-oms over the past year"
        className="portfolio-page__timeline__image--mobile"
        src={imgTM400}
        srcSet={`${imgTM400} 400w,
          ${imgTM800} 800w,
          ${imgTM1600} 1600w`}
        sizes="(max-width: 800px) 100vw, 800px"
      />
    </div>
  );
}
