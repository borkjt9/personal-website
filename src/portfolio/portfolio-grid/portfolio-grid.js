import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import PortfolioItem from '../portfolio-item/portfolio-item';
import portfolioArr from '../../public-objects/portfolio-arr';
import './portfolio-grid.scss';


class PortfolioGrid extends Component {
  constructor(props) {
    super(props);
    this.changePortfolioItem = this.changePortfolioItem.bind(this);
  }

  changePortfolioItem(selectedPortfolio) {
    this.props.changePortfolioItem(selectedPortfolio);
  }

  renderPortfolioItems() {
    const portfolioItems = map(portfolioArr, item => (
      <PortfolioItem
        changePortfolioItem={this.changePortfolioItem}
        item={item}
      />
    ));

    return (
      <div className="portfolio portfolio--wrapped landing-page__portfolio justify-content-around">
        {portfolioItems}
      </div>
    );
  }

  render() {
    return (
      <div className="portfolio-grid" style={{ marginTop: '75px' }}>
        {this.renderPortfolioItems()}
      </div>
    );
  }
}

PortfolioGrid.propTypes = {
  changePortfolioItem: PropTypes.func.isRequired,
};
export default PortfolioGrid;
