import React from 'react';
import moize from 'moize';
import PortfolioItem from '../portfolio-item/portfolio-item';
import { portfolioItems, portfolioOrder } from '../shared/enums';
import './portfolio-grid.scss';

function PortfolioGrid() {
  const portfolioArr = portfolioOrder.map((key) => {
    const item = portfolioItems[key];
    return (
      <div key={key}>
        <PortfolioItem
          item={item}
        />
      </div>
    );
  });
  return (
    <div>
      <div className="portfolio --wrapped portfolio-grid justify-content-around">
        {portfolioArr}
      </div>
    </div>
  );
}


const memoizedPortfolioGrid = moize.react(PortfolioGrid);

export default memoizedPortfolioGrid;
