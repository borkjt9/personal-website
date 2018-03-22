import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';

import About from '../about/about';
import Footer from '../footer/footer';
import PortfolioGrid from '../portfolio/portfolio-grid/portfolio-grid';
import portfolioArr from '../public-objects/portfolio-arr';
import './landing-page.scss';


const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const history = createHistory();

class LandingPage extends Component {
  constructor(props) {
    super(props);
    const activeLink = props.match.params.activeLink ? props.match.params.activeLink : 'about';
    this.state = {
      activeLink,
      scrollPositionY: 0,
    };
    this.changeToAbout = this.changeToAbout.bind(this);
    this.changeToPortfolio = this.changeToPortfolio.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.changePortfolioItem = this.changePortfolioItem.bind(this);
  }

  componentDidMount() {
    // 32 is the number of milliseconds to debounce
    // I picked this because it's approx 1 frame (ie: 16.7ms)
    // You'll want to modulate that to your taste.
    // Add console.logs in handleScroll function to check if its flooding.
    document.addEventListener('scroll', debounce(this.handleScroll, 0));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', debounce(this.handleScroll, 0));
  }

  initialPortfolioLoad = true
  expandPortfolio = true
  portfolio = portfolioArr;
  scrollThreshold = 40;

  handleScroll() {
    // + is unary operator, same as Number(window.scrollY)
    const scrollPositionY = +window.scrollY;
    this.setState({ scrollPositionY });
  }

  changePortfolioItem(newPortfolio) {
    this.props.history.push(`../portfolio/${newPortfolio}`);
  }

  changeToAbout() {
    if (this.state.activeLink === 'portfolio') {
      if (this.state.scrollPositionY > this.scrollThreshold) {
        window.scrollTo(0, 125);
      }
      this.setState({
        activeLink: 'about',
      });
      history.push('../home/about');
    }
  }

  scrollToTop() {
    if (this.state.activeLink === 'portfolio') {
      this.setState({
        activeLink: 'about',
      });
    }
    history.push('../home/');
    window.scrollTo(0, 0);
  }

  changeToPortfolio() {
    if (this.state.activeLink === 'about') {
      if (this.state.scrollPositionY > this.scrollThreshold) {
        window.scrollTo(0, 125);
      }
      this.setState({
        activeLink: 'portfolio',
      });
      history.push('../home/portfolio');

      this.expandPortfolio = true;
    }
  }

  renderHeader() {
    const { activeLink } = this.state;
    // !! coerces value to be a Boolean
    // we want it to be true or false (true if scrollPositionY> 0)
    // it works because scrollPositionY=== 0 is falsy
    const isScrolling = (this.state.scrollPositionY > this.scrollThreshold) ? 'header is-top-bar position-is-fixed' : 'header not-top-bar';
    return (
      <div className={isScrolling}>
        <div className="header__home-link text__vert-middle">
          <h2 className="header__home-link__text">
              john borkowski
          </h2>
          <button onClick={this.scrollToTop}>
            <img className="header__home-link__icon" alt="link to home section" src="https://johnborkowski.me/images/home.svg" />
          </button>
        </div>
        <div className="header__section-links text__vert-middle">
          <button onClick={this.changeToAbout} className={activeLink === 'about' ? 'header__section-link is-active' : 'header__section-link is-inactive'}>
            <h4 className="header__section-link__text margins--remove-default">About</h4>
            <img className="header__section-link__icon" alt="link to about section" src="https://johnborkowski.me/images/about.svg" />
          </button>
          <h4 className="header__divide margins--remove-default">|</h4>
          <button onClick={this.changeToPortfolio} className={activeLink === 'portfolio' ? 'header__section-link is-active' : 'header__section-link is-inactive'}>
            <h4 className="header__section-link__text margins--remove-default">Portfolio</h4>
            <img className="header__section-link__icon" alt="link to portfoio section" src="https://johnborkowski.me/images/portfolio.svg" />
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { activeLink } = this.state;
    const isScrolling = (this.state.scrollPositionY > this.scrollThreshold) ? 'is-scrolling' : '';
    return (
      <div className={`landing-page ${isScrolling} width-is-screen vert-center`}>
        <div className="" >
          {this.renderHeader()}
          {activeLink === ('about') ? <About /> : <PortfolioGrid
            changePortfolioItem={this.changePortfolioItem}
            fromLandingPage
          />
          }
          <Footer />
        </div>
      </div>
    );
  }
}

LandingPage.defaultProps = {
  match: {},
  history: {},

};

LandingPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
};

export default withRouter(LandingPage);
