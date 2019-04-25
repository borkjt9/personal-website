/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import moize from 'moize';

function renderTimeline(portfolio) {
  const imgTD400 = require(`../../assets/images/${portfolio}-timeline-desktop-400.jpg`);
  const imgTD800 = require(`../../assets/images/${portfolio}-timeline-desktop-800.jpg`);
  const imgTD1600 = require(`../../assets/images/${portfolio}-timeline-desktop-1200.jpg`);
  const imgTM400 = require(`../../assets/images/${portfolio}-timeline-mobile-400.jpg`);
  const imgTM800 = require(`../../assets/images/${portfolio}-timeline-mobile-800.jpg`);
  const imgTM1600 = require(`../../assets/images/${portfolio}-timeline-mobile-1200.jpg`);
  return (
    <div className="portfolio-page__section portfolio-page__timeline">
      <h2 className="portfolio-page__section__title">Progress</h2>
      <img
        alt="timeline showing the progress made on the auto-oms over the past year"
        className="timeline__image--desktop"
        src={imgTD400}
        srcSet={`${imgTD400} 400w,
          ${imgTD800} 800w,
          ${imgTD1600} 1600w`}
        sizes="(max-width: 800px) 100vw, 800px"
      />
      <img
        alt="timeline showing the progress made on the auto-oms over the past year"
        className="timeline__image--mobile"
        src={imgTM400}
        srcSet={`${imgTM400} 400w,
          ${imgTM800} 800w,
          ${imgTM1600} 1600w`}
        sizes="(max-width: 800px) 100vw, 800px"
      />
    </div>
  );
}

const memoizedRenderTimeline = moize.react(renderTimeline);
export default memoizedRenderTimeline;
