/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import { browserPaths } from '../shared/enums';

import './portfolio-item.scss';
import { setExpandCarousel, setClearCarousel, setTopBarFixed, setActiveSection, setBrowserPath, setCarouselIndex } from '../redux/actions';

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    // clearCarousel is needed to reset the carousel after it closes.
    // If carousel is closed, need to clear carousel after delay,
    // which means setting state after delay a second time.
    this.selectPortfolioItem = this.selectPortfolioItem.bind(this);
  }
  collapseDuration = 500;

  selectPortfolioItem() {
    const fakeBrowserHistory = createBrowserHistory();

    const { dispatch, item } = this.props;
    const { href } = item;
    const browserPath = browserPaths[href];
    fakeBrowserHistory.replace({
      pathname: browserPath,
    });
    window.scrollTo(0, 0);
    dispatch(setBrowserPath(browserPath));
    dispatch(setTopBarFixed(true));
    dispatch(setActiveSection(href));
    dispatch(setExpandCarousel(false));
    dispatch(setCarouselIndex(item.idx));
    setTimeout(() => {
      dispatch(setClearCarousel(true));
    }, 500);
  }

  renderPortfolioItemText() {
    if (this.props.topBarFixed) {
      const descriptionStyle = {
        bottom: '6px', textAlign: 'center', margin: '0px', marginLeft: '5px', width: 'calc(100% - 5px)',
      };
      return (
        <h5 className="portfolio-item__desc__title" style={descriptionStyle}>
          {this.props.item.name}
        </h5>
      );
    }
    return (
      <div className="portfolio-item__desc">
        <div className="portfolio-item__desc__title">
          <h4 className="--is-animated">{this.props.item.name}</h4>
        </div>
        <div className="portfolio-item__desc__skills">
          <h5 className="">{this.props.item.skills.join(' | ')}</h5>
        </div>
      </div>
    );
  }

  render() {
    const { topBarFixed, isDesktop, item } = this.props;
    const { name, imgSet } = item;
    const { img250, img500, img750 } = imgSet;
    let portfolioItemClassNames = 'transition-border portfolio-item max-dimensions-is-screen';
    if (topBarFixed && isDesktop) {
      portfolioItemClassNames += ' --is-carousel';
      if (this.props.expandCarousel) {
        portfolioItemClassNames += ' --is-expanding';
      } else {
        portfolioItemClassNames += ' --is-minimizing';
      }
    } else {
      portfolioItemClassNames += ' --is-not-carousel';
    }
    const portfolioItemStyle = topBarFixed && isDesktop ? {
      marginLeft: 'calc(50% - 98.5px)',
      border: 1,
      borderColor: 'rgba(52,71,89,0.05)',
      borderStyle: 'solid',
      backgroundColor: '#FFFFFF',
      width: 175,
      height: 0,
      boxShadow: '2px 3px 3px rgba(52,71,89,0.15)',
    } : {};

    const slickSlideStyle = topBarFixed && isDesktop ? { minHeight: '0' } : {};


    return (
      <div style={slickSlideStyle} >
        <div className={portfolioItemClassNames} style={portfolioItemStyle} >
          <button onClick={this.selectPortfolioItem} >
            <img
              alt={`${name}`}
              className="portfolio-item__image"
              src={img250}
              srcSet={`${img250} 250w,
              ${img500} 500w,
              ${img750} 750w`}
              sizes="(max-width: 250px) 95vw, 250px"
            />
            {this.renderPortfolioItemText()}
          </button>
        </div>
      </div>
    );
  }
}

PortfolioItem.defaultProps = {
  expandCarousel: true,
  topBarFixed: false,
  isDesktop: true,
};

PortfolioItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  expandCarousel: PropTypes.bool,
  topBarFixed: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { expandCarousel, topBarFixed, isDesktop } = state;
  return {
    expandCarousel,
    topBarFixed,
    isDesktop,
  };
}
export default connect(mapStateToProps)(PortfolioItem);
