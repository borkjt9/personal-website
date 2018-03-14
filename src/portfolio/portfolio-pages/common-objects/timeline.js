import React from 'react';

function renderTimeline(portfolio) {
  return (
    <div className="portfolio-page__section ria-portal__timeline">
      <h2 className="portfolio-page__section__title">Progress</h2>
      <img
        alt="timeline showing the progress made on the auto-oms over the past year"
        className="timeline__image--desktop"
        src={`https://johnborkowski.me/images/${portfolio}-timeline-desktop-800.jpg`}
        srcSet={`https://johnborkowski.me/images/${portfolio}-timeline-desktop-400.jpg 400w,
          https://johnborkowski.me/images/${portfolio}-timeline-desktop-800.jpg 800w,
          https://johnborkowski.me/images/${portfolio}-timeline-desktop-1600.jpg 1600w`}
        sizes="(max-width: 800px) 100vw, 800px"
      />
      <img
        alt="timeline showing the progress made on the auto-oms over the past year"
        className="timeline__image--mobile"
        src={`https://johnborkowski.me/images/${portfolio}-timeline-mobile-800.jpg`}
        srcSet={`https://johnborkowski.me/images/${portfolio}-timeline-mobile-400.jpg 400w,
          https://johnborkowski.me/images/${portfolio}-timeline-mobile-800.jpg 800w,
          https://johnborkowski.me/images/${portfolio}-timeline-mobile-1600.jpg 1600w`}
        sizes="(max-width: 800px) 100vw, 800px"
      />
    </div>
  );
}

export default renderTimeline;
