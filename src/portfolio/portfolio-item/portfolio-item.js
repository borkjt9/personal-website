import React from 'react';
import PropTypes from 'prop-types';
import './portfolio-item.scss';

function PortfolioItem(props) {
  // I researched to find better ways to get around using a handler.
  // The most efficient way was to create a function directly in JSX.
  // But this creates a new function every time the component is rendered.
  // This is worse from a memory perspective. So we keek the handler from now on.
  function selectPortfolioItemHandler() {
    props.selectPortfolioItem(props.item.href);
  }

  function renderPortfolioItemText() {
    if (props.isCarousel) {
      const descriptionStyle = {
        bottom: '6px', textAlign: 'center', margin: '0px', marginLeft: '5px', width: 'calc(100% - 5px)',
      };
      return (
        <h5 className="portfolio-item__desc__title" style={descriptionStyle}>
          {props.item.name}
        </h5>
      );
    }
    return (
      <div className="portfolio-item__desc">
        <div className="portfolio-item__desc__title">
          <h4 className="is-animated">{props.item.name}</h4>
        </div>
        <div className="portfolio-item__desc__skills">
          <h5 className="">{props.item.skills.join(' | ')}</h5>
        </div>
      </div>
    );
  }

  let portfolioItemClassNames = 'transition-border portfolio-item max-dimensions-is-screen';
  if (props.isCarousel) {
    portfolioItemClassNames += ' header__carousel__item';
    if (props.shouldExpand) {
      portfolioItemClassNames += ' is-expanding';
    } else {
      portfolioItemClassNames += ' is-minimizing';
    }
  } else {
    portfolioItemClassNames += ' is-not-carousel';
  }

  const portfolioItemStyle = props.isCarousel ? {
    marginLeft: 'calc(50% - 98.5px)',
    border: 1,
    borderColor: 'rgba(52,71,89,0.05)',
    borderStyle: 'solid',
    backgroundColor: '#FFFFFF',
    width: 175,
    height: 0,
    boxShadow: '2px 3px 3px rgba(52,71,89,0.15)',
  } : {};

  const slickSlideStyle = props.isCarousel ? { minHeight: '0' } : {};

  return (
    <div style={slickSlideStyle} >
      <div className={portfolioItemClassNames} style={portfolioItemStyle} >
        <button onClick={selectPortfolioItemHandler} >
          <img
            alt={`${props.item.name}`}
            className="portfolio-item__image"
            src={`https://johnborkowski.me/images/${props.item.image}-250.jpg`}
            srcSet={`https://johnborkowski.me/images/${props.item.image}-250.jpg 250w,
            https://johnborkowski.me/images/${props.item.image}-500.jpg 500w,
            https://johnborkowski.me/images/${props.item.image}-750.jpg 750w`}
            sizes="(max-width: 250px) 95vw, 250px"
          />
          {renderPortfolioItemText()}
        </button>
      </div>
    </div>
  );
}

PortfolioItem.defaultProps = {
  isCarousel: false,
  shouldExpand: true,
};

PortfolioItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  shouldExpand: PropTypes.bool,
  isCarousel: PropTypes.bool,
  selectPortfolioItem: PropTypes.func.isRequired,
};

export default PortfolioItem;
