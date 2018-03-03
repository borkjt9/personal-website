import React, { Component } from 'react';
import Slider from 'react-slick';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import _ from 'lodash';
import './header.scss';
import Carousel from '../carousel/carousel';

class Header extends Component {
  history = createHistory()

  constructor(props) {
    super(props);
    this.onPortfolioChange = this.onPortfolioChange.bind(this);

    this.state = {
      portfolioShouldExpand: false,
      clearCarousel: true,
    };
  }

  portfolioLabel = 'portfolio';
  aboutLabel = 'about';

  expandPortfolio(portfolio, props) {
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
    if (portfolioShouldExpand == false) {
      setTimeout(() => {
        this.setState({
          clearCarousel: true,
        });
      }, 500);
    }
  }

  onPortfolioChange(selectedPortfolio) {
    this.portfolioLabel = 'portfolio';

    this.setState({
      portfolioShouldExpand: false,
    });
    this.props.onPortfolioChange(selectedPortfolio);
  }


  renderPortfolio() {
    let shouldExpand = false;
    if (this.state.portfolioShouldExpand) {
      shouldExpand = true;
    }
    const portfolio = this.props.portfolios;
    const portfolioClassNames = shouldExpand ? 'portfolio portfolio--wrapped header__portfolio' : 'portfolio portfolio--wrapped header__portfolio';

    return (

      <div className={portfolioClassNames}>
        <Carousel onPortfolioChange={this.onPortfolioChange} onPortfolioToggle={this.onPortfolioToggle} currentPortfolioIndex={this.props.currentPortfolioIndex} shouldExpand={shouldExpand} />
      </div>

    );
  }

  expandAbout() {
    this.portfolioShouldExpand = false;
    this.portfolioLabel = 'portfolio';
    this.setState({
      portfolioShouldExpand: this.portfolioShouldExpand,
    });
    this.props.onPortfolioChange('about');
  }
  render() {
    return (
      <div className="header">
        <div className="header__top-bar links">
          <a className="text__vert-middle header__home-link home-link--desktop links__link" href="../home">
            <h4 className="links__header__text margins--remove-default">Home</h4>
            {/* <img className="links__header__icon" src={require('../../assets/images/portfolio.svg')}/> */}
          </a>
          <a className="text__vert-middle header__home-link home-link--mobile links__link" href="../portfolio">
            {/* <h4 className="links__header__text margins--remove-default">Home</h4> */}
            <img className="links__header__icon" src={require('../../assets/images/portfolio.svg')} />
          </a>
          <div className="text__vert-middle header__portfolio-links">

            <a className="links__link" onClick={this.expandAbout.bind(this)}>
              <h4 className="links__header__text margins--remove-default">About</h4>
              <img className="links__header__icon" src={require('../../assets/images/about.svg')} />
            </a>
            <h4 className="links__divide">|</h4>
            <a className="links__link" onClick={this.expandPortfolio.bind(this, 'portfolio')}>
              <h4 className="links__header__text margins--remove-default">{this.portfolioLabel}</h4>
            </a>
          </div>

        </div>
        {this.state.clearCarousel ? '' : this.renderPortfolio()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { portfolios: state.portfolios };
}
export default connect(mapStateToProps)(Header);
