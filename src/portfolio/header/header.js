import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import './header.scss';
import Carousel from '../carousel/carousel';

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


  history = createHistory()

  renderPortfolio() {
    let shouldExpand = false;
    if (this.state.portfolioShouldExpand) {
      shouldExpand = true;
    }

    const portfolioClassNames = shouldExpand ? 'portfolio portfolio--wrapped header__portfolio' : 'portfolio portfolio--wrapped header__portfolio';
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
      <div className="header">
        <div className="header__top-bar links">
          <div className="text__vert-middle header__home-link">
            <a  href="../home">
            <button className="home-link--desktop links__link">
              <h4 className="links__header__text margins--remove-default">Home</h4>
              </button>
            </a>
            <a className="home-link--mobile links__link" href="../portfolio">
              <img className="links__header__icon" alt="link to portfolio section" src="https://s3.amazonaws.com/jtb-personal-website/images/portfolio.svg" />
            </a>
          </div>
          <div className="text__vert-middle header__portfolio-links">
            <button className="links__link" onClick={this.expandAbout}>
              <h4 className="links__header__text margins--remove-default">About</h4>
              <img className="links__header__icon" alt="link to about section" src="https://s3.amazonaws.com/jtb-personal-website/images/about.svg" />
            </button>
            <h4 className="links__divide">|</h4>
            <button className="links__link" onClick={this.expandPortfolio}>
              <h4 className="links__header__text margins--remove-default">{this.portfolioLabel}</h4>
            </button>
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

function mapStateToProps(state) {
  return { portfolios: state.portfolios };
}
export default connect(mapStateToProps)(Header);
