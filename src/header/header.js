import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../portfolio/carousel/carousel';
import './header.scss';


class Header extends Component {
  constructor(props) {
    super(props);
    this.selectPortfolioItem = this.selectPortfolioItem.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
    this.selectAboutSection = this.selectAboutSection.bind(this);

    // clearCarousel is needed to reset the carousel after it closes.
    // If carousel is closed, need to clear carousel after delay,
    // which means setting state after delay a second time.

    this.state = {
      carouselShouldExpand: false,
      clearCarousel: true,
    };
  }

  aboutLabel = 'about';
  portfolioLabel = 'portfolio';

  selectPortfolioItem(selectedPortfolio) {
    this.portfolioLabel = 'portfolio';

    this.setState({
      carouselShouldExpand: false,
      clearCarousel: true,

    });
    this.props.selectSubSection(selectedPortfolio);
  }

  selectAboutSection() {
    this.portfolioLabel = 'portfolio';
    this.setState({
      carouselShouldExpand: false,
    });
    this.props.selectSubSection('about');
  }

  collapseCarousel(collapseDuration) {
    setTimeout(() => {
      this.setState({
        clearCarousel: true,
      });
    }, collapseDuration);
  }
  // toggleCarousel onlyimplements the animation.
  // Rendering is done in renderCarousel below.
  toggleCarousel() {
    const carouselShouldExpand = !this.state.carouselShouldExpand;
    this.portfolioLabel = carouselShouldExpand ? 'close' : 'portfolio';
    this.props.onPortfolioToggle(carouselShouldExpand);

    this.setState({
      clearCarousel: false,
      carouselShouldExpand,
    });

    if (!carouselShouldExpand) {
      const collapseDuration = 500;
      this.collapseCarousel(collapseDuration);
    }
  }

  renderCarousel() {
    if (this.state.clearCarousel) {
      return '';
    }
    const { carouselShouldExpand } = this.state;
    const carouselWrapperClassNames = 'portfolio portfolio--wrapped header__carousel';
    return (
      <div className={carouselWrapperClassNames}>
        <Carousel
          selectPortfolioItem={this.selectPortfolioItem}
          onPortfolioToggle={this.onPortfolioToggle}
          currentPortfolioIndex={this.props.currentPortfolioIndex}
          shouldExpand={carouselShouldExpand}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="header is-top-bar position-is-fixed">
        <div className="header__top-bar">
          <div className="header__home-link text__vert-middle">
            <a href="../home">
              <img className="header__home-link__icon" alt="link to home section" src="https://johnborkowski.me/images/home.svg" />
            </a>
          </div>
          <div className="header__section-links text__vert-middle">
            <button onClick={this.selectAboutSection} className="header__section-link">
              <h4 className="header__section-link__text margins--remove-default">about</h4>
              <img className="header__section-link__icon" alt="link to about section" src="https://johnborkowski.me/images/about.svg" />
            </button>
            <h4 className="header__divide margins--remove-default">|</h4>
            <button onClick={this.toggleCarousel} className="header__section-link is-desktop">
              <h4 className="header__section-link__text margins--remove-default">{this.portfolioLabel}</h4>
            </button>
            <a href="../portfolio" className="header__section-link is-mobile">
              <img className="header__section-link__icon" alt="link to portfoio section" src="https://johnborkowski.me/images/portfolio.svg" />
            </a>
          </div>
        </div>
        {this.renderCarousel()}
      </div>
    );
  }
}

Header.propTypes = {
  selectSubSection: PropTypes.func.isRequired,
  onPortfolioToggle: PropTypes.func.isRequired,
  currentPortfolioIndex: PropTypes.number.isRequired,
};

export default Header;
