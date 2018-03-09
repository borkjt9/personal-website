import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import PortfolioItem from '../portfolio-item/portfolio-item';
import './portfolio-grid.scss';


class PortfolioGrid extends Component {
  constructor(props) {
    super(props);
    this.changePortfolioItem = this.changePortfolioItem.bind(this);
  }

  changePortfolioItem(selectedPortfolio) {
    this.props.onPortfolioChange(selectedPortfolio);
  }

  renderPortfolioItems() {
    const portfolio = this.props.portfolios;

    const portfolioItems = _.map(portfolio, item => (
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
  portfolios: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

function mapStateToProps(state) {
  return { portfolios: state.portfolios };
}

PortfolioGrid.propTypes = {
  onPortfolioChange: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(PortfolioGrid);
