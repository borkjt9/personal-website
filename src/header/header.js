import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../portfolio/carousel/carousel';
import './header.scss';


class Header extends Component {
  constructor(props) {
    super(props);
    this.changePortfolioItem = this.changePortfolioItem.bind(this);
    this.expandPortfolio = this.expandPortfolio.bind(this);
    this.expandAbout = this.expandAbout.bind(this);

    this.state = {
      portfolioShouldExpand: false,
      clearCarousel: true,
    };
  }


  changePortfolioItem(selectedPortfolio) {
    this.portfolioLabel = 'portfolio';

    this.setState({
      portfolioShouldExpand: false,
    });
    setTimeout(() => {
      this.setState({
        clearCarousel: true,
      });
    }, 500);
    this.props.changePortfolioItem(selectedPortfolio);
  }
  aboutLabel = 'about';
  portfolioLabel = 'portfolio';

  expandAbout() {
    this.portfolioLabel = 'portfolio';
    this.setState({
      portfolioShouldExpand: false,
    });
    this.props.changePortfolioItem('about');
  }

  expandPortfolio() {
    let portfolioShouldExpand = true;
    if (this.portfolioLabel === 'portfolio') {
      this.portfolioLabel = 'close';
    } else {
      this.portfolioLabel = 'portfolio';
      portfolioShouldExpand = false;
    }

    this.props.onPortfolioToggle(portfolioShouldExpand);


    this.setState({
      clearCarousel: false,
      portfolioShouldExpand,
    });
    if (portfolioShouldExpand === false) {
      setTimeout(() => {
        this.setState({
          clearCarousel: true,
        });
      }, 500);
    }
  }

  renderPortfolio() {
    let shouldExpand = false;
    if (this.state.portfolioShouldExpand) {
      shouldExpand = true;
    }

    const portfolioClassNames = shouldExpand ? 'portfolio portfolio--wrapped header__carousel' : 'portfolio portfolio--wrapped header__carousel';
    return (

      <div className={portfolioClassNames}>
        <Carousel
          changePortfolioItem={this.changePortfolioItem}
          onPortfolioToggle={this.onPortfolioToggle}
          currentPortfolioIndex={this.props.currentPortfolioIndex}
          shouldExpand={shouldExpand}
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
            <button onClick={this.expandAbout} className="header__section-link">
              <h4 className="header__section-link__text margins--remove-default">About</h4>
              <img className="header__section-link__icon" alt="link to about section" src="https://johnborkowski.me/images/about.svg" />
            </button>
            <h4 className="header__divide margins--remove-default">|</h4>
            <button onClick={this.expandPortfolio} className="header__section-link is-desktop">
              <h4 className="header__section-link__text margins--remove-default">{this.portfolioLabel}</h4>
            </button>
            <a href="../portfolio" className="header__section-link is-mobile">
              <img className="header__section-link__icon" alt="link to portfoio section" src="https://johnborkowski.me/images/portfolio.svg" />
            </a>
          </div>
        </div>
        {this.state.clearCarousel ? '' : this.renderPortfolio()}
      </div>
    );
  }
}

Header.propTypes = {
  changePortfolioItem: PropTypes.func.isRequired,
  onPortfolioToggle: PropTypes.func.isRequired,
  currentPortfolioIndex: PropTypes.number.isRequired,
};

export default Header;
