import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import map from 'lodash/map';
import PortfolioItem from '../portfolio-item/portfolio-item';
import { portfolioArr } from '../shared/enums';
import './carousel.scss';

// below is an implementation of react-slick library.
// See https://github.com/akiran/react-slick for full details.
function NextArrow(props) {
  const { className, style, onClick } = props;
  const portfolioImageStyle = {
    width: '100%', top: 0, left: 0, position: 'absolute', opacity: 0.55,
  };

  return (
    <button
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <img
        alt="Next button for the portfolio carousel."
        style={portfolioImageStyle}
        src="https://johnborkowski.me/images/right-chevron-40.png"
        srcSet="https://johnborkowski.me/images/right-chevron-20.png 20w,
          https://johnborkowski.me/images/right-chevron-40.png 40w,
          https://johnborkowski.me/images/right-chevron-60.png 60w"
        sizes="20px"
      />
    </button>
  );
}

NextArrow.defaultProps = {
  style: {},
  className: '',
  onClick: function foo() {},
};

NextArrow.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

function PrevArrow(props) {
  const { className, style, onClick } = props;
  const portfolioImageStyle = {
    width: '100%', top: 0, left: 0, position: 'absolute', opacity: 0.55,
  };
  return (
    <button
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <img
        alt="Previous button for portfolio carousel."
        style={portfolioImageStyle}
        src="https://johnborkowski.me/images/left-chevron-40.png"
        srcSet="https://johnborkowski.me/images/left-chevron-20.png 20w,
        https://johnborkowski.me/images/left-chevron-40.png 40w,
        https://johnborkowski.me/images/left-chevron-60.png 60w"
        sizes="20px"
      />
    </button>
  );
}

PrevArrow.defaultProps = {
  style: {},
  className: '',
  onClick: function foo() {},
};

PrevArrow.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

class Carousel extends Component {
  render() {
    if (this.props.clearCarousel) {
      return '';
    }
    const portfolioItems = map(portfolioArr, item => (
      <div key={item.href}>
        <PortfolioItem
          item={item}
          isCarousel
        />
      </div>
    ));

    const settings = {
      dots: false,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      slidesToShow: 3,
      swipe: false,
      initialSlide: this.props.carouselIndex - 1,
    };
    return (
      <div className="portfolio portfolio--wrapped carousel">
        <Slider {...settings}>
          {portfolioItems}
        </Slider>
      </div>
    );
  }
}

Carousel.defaultProps = {
  expandCarousel: false,
  topBarFixed: false,
  clearCarousel: true,
  carouselIndex: 0,
};

Carousel.propTypes = {
  expandCarousel: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  topBarFixed: PropTypes.bool,
  clearCarousel: PropTypes.bool,
  carouselIndex: PropTypes.number,
};

function mapStateToProps(state) {
  const {
    expandCarousel,
    topBarFixed,
    clearCarousel,
    carouselIndex,
  } = state;
  return {
    expandCarousel,
    topBarFixed,
    clearCarousel,
    carouselIndex,
  };
}

export default connect(mapStateToProps)(Carousel);
