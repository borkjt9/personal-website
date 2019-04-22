import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
import Carousel from '../portfolio/carousel/carousel';
import './header.scss';


class Header extends Component {
  constructor(props) {
    super(props);
    this.selectPortfolioItem = this.selectPortfolioItem.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);

    // clearCarousel is needed to reset the carousel after it closes.
    // If carousel is closed, need to clear carousel after delay,
    // which means setting state after delay a second time.

    this.state = {
      carouselShouldExpand: false,
      clearCarousel: true,
    };
  }
  fakeBrowserHistory = createHistory();
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

  collapseCarousel(collapseDuration) {
    setTimeout(() => {
      this.setState({
        clearCarousel: true,
      });
    }, collapseDuration);
  }

  changeToSection(section) {
    if (this.state.activeSection !== section) {
      if (this.state.scrollPositionY) {
        window.scrollTo(0, 125);
      }
      this.props.selectSubSection(section);
    }
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
  handleHeaderClick(section) {
    const { addCarousel } = this.props;
    if (section === 'about') {
      this.changeToSection(section);
    } else if (addCarousel) {
      this.toggleCarousel();
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
    const { isTopBar, activeSection } = this.props;
    const headerExtraClassNames = isTopBar ? 'is-top-bar position-is-fixed' : 'not-top-bar';
    const headerSubClasses = isTopBar && 'header__top-bar';
    const aboutClassName = activeSection === 'about' ? 'is-active' : 'is-inactive';
    const portfolioClassName = activeSection === 'portfolio' ? 'is-active' : 'is-inactive';
    return (
      <div className={`header ${headerExtraClassNames}`}>
        <div className={headerSubClasses}>
          <div className="header__home-link text__vert-middle">
            <h2 className="header__home-link__text">
                john borkowski
            </h2>
            <button onClick={this.props.resetPage}>
              <img className="header__home-link__icon" alt="link to home section" src="https://johnborkowski.me/images/home.svg" />
            </button>
          </div>
          <div className="header__section-links text__vert-middle">
            <button onClick={() => this.handleHeaderClick('about')} className={`header__section-link ${aboutClassName}`}>
              <h4 className="header__section-link__text margins--remove-default">about</h4>
              <img className="header__section-link__icon" alt="link to about section" src="https://johnborkowski.me/images/about.svg" />
            </button>
            <h4 className="header__divide margins--remove-default">|</h4>
            <button onClick={() => this.handleHeaderClick('portfolio')} className={`header__section-link ${portfolioClassName}`}>
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

Header.defaultProps = {
  isTopBar: true,
  currentPortfolioIndex: 0,
  addCarousel: true,
  onPortfolioToggle: () => this.fakeBrowserHistory.push('../home/'),
};

Header.propTypes = {
  activeSection: PropTypes.string.isRequired,
  isTopBar: PropTypes.bool,
  selectSubSection: PropTypes.func.isRequired,
  onPortfolioToggle: PropTypes.func,
  currentPortfolioIndex: PropTypes.number,
  addCarousel: PropTypes.bool,
  resetPage: PropTypes.func.isRequired,
};

export default Header;
