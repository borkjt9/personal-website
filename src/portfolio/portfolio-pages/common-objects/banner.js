import React from 'react';

function renderBanner(portfolio, title= '') {
  return (
    <div className="portfolio-page__banner">
      <h1 className="portfolio-page__banner__title">{title}</h1>
      <img
        alt={`a banner stock image for ${portfolio}`}
        className="portfolio-page__banner__image"
        src={`https://s3.amazonaws.com/jtb-personal-website/images/${portfolio}-banner-800.jpg`}
        srcSet={`https://s3.amazonaws.com/jtb-personal-website/images/${portfolio}-banner-400.jpg 400w,
        https://s3.amazonaws.com/jtb-personal-website/images/${portfolio}-banner-800.jpg 800w,
        https://s3.amazonaws.com/jtb-personal-website/images/${portfolio}-banner-1200.jpg 1200w,
        https://s3.amazonaws.com/jtb-personal-website/images/${portfolio}-banner-1600.jpg 1600w`}
        sizes="(max-width: 800px) 100vw, 800px"// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell.jpg 400w, https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/kirkjufell@2x.jpg 800w"
      />
    </div>
  )
}

export default renderBanner;