import React from 'react';
import map from 'lodash/map';
import moize from 'moize';
import PortfolioItem from '../portfolio-item/portfolio-item';
import { portfolioArr, portfolioItemImgSets } from '../shared/enums';
import './portfolio-grid.scss';

function PortfolioGrid() {
  const portfolioItems = map(portfolioArr, (item) => {
    const { href } = item;
    const imgSet = portfolioItemImgSets[href];
    return (
      <PortfolioItem
        key={item.href}
        item={item}
        imgSet={imgSet}
      />
    );
  });
  return (
    <div>
      <div className="portfolio --wrapped portfolio-grid justify-content-around">
        {portfolioItems}
      </div>
    </div>
  );
}


const memoizedPortfolioGrid = moize.react(PortfolioGrid);

export default memoizedPortfolioGrid;
