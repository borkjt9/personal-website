import React from 'react';
import PropTypes from 'prop-types';
import './portfolio-item.scss';

const PortfolioItem = (props) => {
  function changePortfolioItem() {
    console.log('portfolio item props', props)
    props.changePortfolioItem(props.item.href);
  }
  function renderPortfolioItemText() {
    if (props.isCarousel) {
      const descriptionStyle = {
        bottom: '6px', textAlign: 'center', margin: '0px', marginLeft: '5px', width: 'calc(100% - 5px)',
      };
      return (
        <h5 className="portfolio__item__desc__title" style={descriptionStyle}>
          {props.item.name}
        </h5>
      );
    }
    return (
      <div className="portfolio__item__desc">
        <div className="portfolio__item__desc__title">
          <h4 className="is-animated">{props.item.name}</h4>
        </div>
        <div className="portfolio__item__desc__skills ">
          <h5 className="">{props.item.skills.reduce((acc, x) => (acc === null ? [x] : [acc, ' | ', x]), null)}</h5>
        </div>
      </div>
    );
  }

  let portfolioItemClassNames = 'transition-border portfolio__item max-dimensions-is-screen';

  if (props.isCarousel) {
    portfolioItemClassNames += ' header__portfolio__item';
    if (props.shouldExpand) {
      portfolioItemClassNames += ' is-expanding';
    } else {
      portfolioItemClassNames += ' is-minimizing';
    }
  } else {
    portfolioItemClassNames += ' landing-page__portfolio__item';
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
        <button onClick={changePortfolioItem} >
          <img
            alt={`${props.item.name}`}
            className="portfolio__item__image"
            src={`https://s3.amazonaws.com/jtb-personal-website/images/${props.item.image}-250.jpg`}
            srcSet={`https://s3.amazonaws.com/jtb-personal-website/images/${props.item.image}-250.jpg 250w,
            https://s3.amazonaws.com/jtb-personal-website/images/${props.item.image}-500.jpg 500w,
            https://s3.amazonaws.com/jtb-personal-website/images/${props.item.image}-750.jpg 750w`}
            sizes="(max-width: 250px) 95vw, 250px"
          />
          {renderPortfolioItemText()}
        </button>
      </div>
    </div>
  );
};

PortfolioItem.defaultProps = {
  isCarousel: false,
  shouldExpand: true,
};

PortfolioItem.propTypes = {
  changePortfolioItem: PropTypes.func.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  shouldExpand: PropTypes.bool,
  isCarousel: PropTypes.bool,
};

export default PortfolioItem;
