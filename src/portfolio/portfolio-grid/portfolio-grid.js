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
        key={item.name}
        changePortfolioItem={this.changePortfolioItem}
        item={item}
      />
    ));

    return (
      <div className="portfolio portfolio--wrapped portfolio-grid justify-content-around">
        {portfolioItems}
      </div>
    );
  }

  render() {
    const portfolioGridStyle = this.props.fromLandingPage ? {} : { marginTop: '115px' };
    return (
      <div className="portfolio-grid" style={portfolioGridStyle}>
        {this.renderPortfolioItems()}
      </div>
    );
  }
}

PortfolioGrid.defaultProps = {
  fromLandingPage: false,
};
PortfolioGrid.propTypes = {
  changePortfolioItem: PropTypes.func.isRequired,
  fromLandingPage: PropTypes.bool,
};
export default PortfolioGrid;
