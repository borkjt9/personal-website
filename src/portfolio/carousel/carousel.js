import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import map from 'lodash/map';
import PortfolioItem from '../portfolio-item/portfolio-item';
import portfolioArr from '../../public-objects/portfolio-arr';
import './carousel.scss';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const imageStyle = {
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
        style={imageStyle}
        src="https://johnborkowski.me/images/right-chevron-40.png"
        srcSet="https://johnborkowski.me/images/right-chevron-20.png 20w,
          https://johnborkowski.me/images/right-chevron-40.png 40w,
          https://johnborkowski.me/images/right-chevron-60.png 60w"
        sizes="20px"
      />
    </button>
  );
}
// will be filled by library
SampleNextArrow.defaultProps = {
  style: {},
  className: '',
  onClick: function foo() {},
};

SampleNextArrow.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const imageStyle = {
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
        style={imageStyle}
        src="https://johnborkowski.me/images/left-chevron-40.png"
        srcSet="https://johnborkowski.me/images/left-chevron-20.png 20w,
        https://johnborkowski.me/images/left-chevron-40.png 40w,
        https://johnborkowski.me/images/left-chevron-60.png 60w"
        sizes="20px"
      />
    </button>
  );
}
SamplePrevArrow.defaultProps = {
  style: {},
  className: '',
  onClick: function foo() {},
};

SamplePrevArrow.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.changePortfolioItem = this.changePortfolioItem.bind(this);
  }

  changePortfolioItem(selectedPortfolio) {
    this.props.changePortfolioItem(selectedPortfolio);
  }

  render() {
    let shouldExpand = false;
    if (this.props.shouldExpand) {
      shouldExpand = true;
    }

    const portfolioItems = map(portfolioArr, item => (
      <div>
        <PortfolioItem
          changePortfolioItem={this.changePortfolioItem}
          shouldExpand={shouldExpand}
          item={item}
          isCarousel
        />
      </div>
    ));

    const settings = {
      dots: false,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 3,
      swipe: false,
      initialSlide: this.props.currentPortfolioIndex - 1,
    };
    return (
      <Slider {...settings}>
        {portfolioItems}
      </Slider>
    );
  }
}

Carousel.propTypes = {
  changePortfolioItem: PropTypes.func.isRequired,
  currentPortfolioIndex: PropTypes.number.isRequired,
  shouldExpand: PropTypes.bool.isRequired,
};

export default Carousel;
