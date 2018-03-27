import React from 'react';
import moize from 'moize';
function renderDesign(input) {
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

const memoizedRenderDesign = moize.react(renderDesign)
export default memoizedRenderDesign;
