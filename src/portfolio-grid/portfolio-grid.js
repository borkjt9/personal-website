import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import moize from 'moize';
import PortfolioItem from '../portfolio-item/portfolio-item';
import { portfolioArr } from '../public-objects/enums';
import './portfolio-grid.scss';

function PortfolioGrid(props) {
  const portfolioItems = map(portfolioArr, item => (
    <PortfolioItem
      key={item.name}
      selectPortfolioItem={props.selectPortfolioItem}
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

PortfolioGrid.propTypes = {
  selectPortfolioItem: PropTypes.func.isRequired,
};

const memoizedPortfolioGrid = moize.react(PortfolioGrid);

export default memoizedPortfolioGrid;
