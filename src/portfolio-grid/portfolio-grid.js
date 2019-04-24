import React from 'react';
import map from 'lodash/map';
import moize from 'moize';
import PortfolioItem from '../portfolio-item/portfolio-item';
import { portfolioArr } from '../shared/enums';
import './portfolio-grid.scss';

function PortfolioGrid() {
  const portfolioItems = map(portfolioArr, item => (
    <PortfolioItem
      key={item.href}
      item={item}
    />
  ));
  return (
    <div>
      <div className="portfolio portfolio--wrapped portfolio-grid justify-content-around">
        {portfolioItems}
      </div>
    </div>
  );
}


const memoizedPortfolioGrid = moize.react(PortfolioGrid);

export default memoizedPortfolioGrid;
