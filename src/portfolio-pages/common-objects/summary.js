import React from 'react';
import moize from 'moize';

function renderSummary(summaryBody) {
  return (
    <div className="portfolio-page__section portfolio-page__summary">
      <h2 className="portfolio-page__section__title">Summary</h2>
      <p className="portfolio-page__section__body">
        {summaryBody}
      </p>
    </div>
  );
}

const memoizedRenderSummary = moize.react(renderSummary);
export default memoizedRenderSummary;
