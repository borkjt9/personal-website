import React from 'react';

function renderProduct(rows) {
  const subSections = [];
  rows.forEach((row, index) => {
    if (index % 2) {
      const subSection = (
        <div className="portfolio-page__section__body row-wrap-reverse">
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
        <div className="portfolio-page__section__body row-wrap">
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

export default renderProduct;
