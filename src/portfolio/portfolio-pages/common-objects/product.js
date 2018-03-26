import React from 'react';
function renderProduct(rows) {
  let subSections = [];
  rows.forEach((row,  index) => {
    if (index % 2) {
      subSections.push(
        <div className="portfolio-page__section__body row-wrap-reverse">
          <div className="portfolio-page__product__iphone-text">
            <h3>{row.productCaption}</h3>
            <p className="portfolio-page__section__body__description">{row.productDescription}</p>
          </div>
          <img
            alt={row.img.alt}
            className="portfolio-page__product__iphone-image"
            src={row.img.src}
            srcSet={row.img.srcSet}

            sizes={row.img.sizes}
          />
        </div>
      )
    } else {
      subSections.push(
        <div className="portfolio-page__section__body row-wrap">
          <img
            alt={row.img.alt}
            className="portfolio-page__product__iphone-image"
            src={row.img.src}
            srcSet={row.img.srcSet}
            sizes={row.img.sizes}
          />
          <div className="portfolio-page__product__iphone-text">
            <h3>{row.productCaption}</h3>
            <p className="portfolio-page__section__body__description">{row.productDescription}</p>
          </div>
        </div>
      )
    }
  });

  return (
    <div className="portfolio-page__section">
      <h2 className="portfolio-page__section__title boon__investments__product">Product</h2>
      {subSections}
    </div>
  )
}

export default renderProduct;
