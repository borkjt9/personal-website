/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import moize from 'moize';

function renderBanner(portfolio, title = '') {
  const img400 = require(`../../assets/images/${portfolio}-banner-400.jpg`);
  const img800 = require(`../../assets/images/${portfolio}-banner-800.jpg`);
  const img1200 = require(`../../assets/images/${portfolio}-banner-1200.jpg`);
  const img1600 = require(`../../assets/images/${portfolio}-banner-1600.jpg`);

  return (
    <div className="portfolio-page__banner">
      <h1 className="portfolio-page__banner__title">{title}</h1>
      <img
        alt={`${portfolio} in action`}
        className="portfolio-page__banner__image"
        src={img400}
        srcSet={`${img400} 400w,
          ${img800} 800w,
          ${img1200} 1200w,
          ${img1600} 1600w`}
        sizes="(max-width: 800px) 100vw, 800px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
      />
    </div>
  );
}

const memoizedRenderBanner = moize.react(renderBanner);
export default memoizedRenderBanner;
