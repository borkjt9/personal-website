import React from 'react';

function renderInvestment(input) {
  return (
    <div className="portfolio-page__section portfolio-page__investment">
      <h2 className="portfolio-page__section__title">Investment</h2>
      <div className="portfolio-page__section__body row-wrap">
        <div className="portfolio-page__investment__white-paper">
          <a
            href={input.href}
            target="_blank"
            rel="noopener noreferrer">
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
  )
};

export default renderInvestment;
