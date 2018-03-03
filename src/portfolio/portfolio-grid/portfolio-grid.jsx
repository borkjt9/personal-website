import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './portfolio-grid.scss';


class PortfolioGrid extends Component {
  constructor(props) {
    super(props);
  }

  renderPortfolioItems() {
    const portfolio = this.props.portfolios;
    const portfolioItemClassNames = 'landing-page__portfolio__item  portfolio__item transition-border max-dimensions-is-screen';

    const portfolioItems = _.map(portfolio, item => (
      <div className={portfolioItemClassNames}>
        <a href={`portfolio/${item.href}`}>
          <img
            className="portfolio__item__image"
            src={`https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-250.jpg`}
            srcSet={`https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-250.jpg 250w,
                https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-500.jpg 500w,
                https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-750.jpg 750w`}
            sizes="(max-width: 250px) 95vw, 250px"
          />
          <div className="portfolio__item__desc">
            <div className="portfolio__item__desc__title">
              <h4 className="is-animated">{item.name}</h4>
            </div>
            <div className="portfolio__item__desc__skills ">
              <h5 className="">{item.skills.reduce((acc, x) => (acc === null ? [x] : [acc, ' | ', x]), null)}</h5>
            </div>
          </div>
        </a>
      </div>
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
function mapStateToProps(state) {
  return { portfolios: state.portfolios };
}
export default connect(mapStateToProps)(PortfolioGrid);
