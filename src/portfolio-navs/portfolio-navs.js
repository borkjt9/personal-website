import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveSection, setCarouselIndex } from '../redux/actions';
import { portfolioItems, portfolioOrder } from '../shared/enums';
import browserHistory from '../shared/browser-history';
import './portfolio-navs.scss';

import leftChev20 from '../assets/images/left-chevron-20.png';
import leftChev40 from '../assets/images/left-chevron-40.png';
import leftChev60 from '../assets/images/left-chevron-60.png';
import rightChev20 from '../assets/images/right-chevron-20.png';
import rightChev40 from '../assets/images/right-chevron-40.png';
import rightChev60 from '../assets/images/right-chevron-60.png';

function PortfolioNavs(props) {
  const {
    expandCarousel,
    activeSection,
    dispatch,
  } = props;
  if (!portfolioItems[activeSection]) {
    return '';
  }
  const item = portfolioItems[activeSection];
  const idx = portfolioOrder.indexOf(item.href);
  const itemCount = Object.keys(portfolioItems).length;
  function handleNextPortfolio() {
    dispatch(setActiveSection(item.nref));
    dispatch(setCarouselIndex((idx % itemCount) + 1));
    browserHistory.replace(item.nref);
  }

  function handlePreviousPortfolio() {
    dispatch(setActiveSection(item.pref));
    dispatch(setCarouselIndex((idx % itemCount) - 1));
    browserHistory.replace(item.pref);
  }
  if (expandCarousel || activeSection === 'about' || activeSection === 'portfolio') {
    return '';
  }
  return (
    <div className="portfolio-navs">
      <button onClick={handlePreviousPortfolio} className="portfolio-navs__link --previous">
        <img
          alt="When clicked, the view will show the next portfolio page."
          className="portfolio-navs__link__chevron"
          src={leftChev20}
          srcSet={`${leftChev20} 20w,
          ${leftChev40} 40w,
          ${leftChev60} 60w`}
          sizes="20px"
        />
        <h5 className="portfolio-navs__link__title">Previous Project</h5>
      </button>
      <button onClick={handleNextPortfolio} className="portfolio-navs__link --next">
        <h5 className="portfolio-navs__link__title">Next Project</h5>
        <img
          alt="When clicked, the view will show the previous portfolio page."
          className="portfolio-navs__link__chevron"
          src={rightChev20}
          srcSet={`${rightChev20} 20w,
          ${rightChev40} 40w,
          ${rightChev60} 60w`}
          sizes="20px"
        />
      </button>
    </div>
  );
}

PortfolioNavs.defaultProps = {
  activeSection: 'about',
  expandCarousel: false,
};

PortfolioNavs.propTypes = {
  expandCarousel: PropTypes.bool,
  activeSection: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { expandCarousel, activeSection } = state;
  return {
    expandCarousel,
    activeSection,
  };
}

export default connect(mapStateToProps)(PortfolioNavs);
