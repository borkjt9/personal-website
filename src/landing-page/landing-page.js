import React, { Component } from 'react';
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

class LandingPage extends Component {
  constructor(props) {
    super(props);
    const activeLink = localStorage.getItem('activeLandingPageSection') || 'about';
    this.state = {
      activeLink,
      scrollPositionY: 0,
    };
    this.changeToAbout = this.changeToAbout.bind(this);
    this.changeToPortfolio = this.changeToPortfolio.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);

  }

  componentDidMount() {
    // 32 is the number of milliseconds to debounce
    // I picked this because it's approx 1 frame (ie: 16.7ms)
    // You'll want to modulate that to your taste.
    // Add console.logs in handleScroll function to check if its flooding.
    document.addEventListener('scroll', debounce(this.handleScroll, 0));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.handleScroll, 0));
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

  changeToAbout() {
    if (this.state.activeLink === 'portfolio') {
      if (this.state.scrollPositionY > this.scrollThreshold) {
        window.scrollTo(0, 125);
      }
      localStorage.setItem('activeLandingPageSection', 'about');
      this.setState({
        activeLink: 'about',
      });
    }
  }

  scrollToTop() {
    if (this.state.activeLink == 'portfolio') {
      localStorage.setItem('activeLandingPageSection', 'about');
      this.setState({
        activeLink: 'about',
      });
    }
    window.scrollTo(0, 125)
  }

  changeToPortfolio() {
    if (this.state.activeLink === 'about') {
      if (this.state.scrollPositionY > this.scrollThreshold) {
        window.scrollTo(0, 125);
      }
      localStorage.setItem('activeLandingPageSection', 'portfolio');
      this.setState({
        activeLink: 'portfolio',
      });
      this.expandPortfolio = true;
    }
  }

  renderHeader() {
    const { activeLink } = this.state;
    // !! coerces value to be a Boolean
    // we want it to be true or false (true if scrollPositionY> 0)
    // it works because scrollPositionY=== 0 is falsy
    const isScrolling = (this.state.scrollPositionY > this.scrollThreshold) ? 'fixed  landing-page__header landing-page__header--isScrolling' : 'landing-page__header landing-page__header--notScrolling';
    return (
      <div className={isScrolling}>
        <div className="links">
          <div className="landing-page__header__home__link text__vert-middle">
            <h2 className="landing-page__header__home__text">
              john borkowski
            </h2>
            <button onClick={this.scrollToTop}>
              <img className="landing-page__header__home__icon" alt="link to home section" src="https://johnborkowski.me/images/home.svg" />
            </button>
          </div>
          <div className="landing-page__header__links links--landing-page text__vert-middle">
            <button onClick={this.changeToAbout} className={activeLink === 'about' ? 'links__link is-active' : 'links__link is-inactive'}>
              <h4 className="links__header__text margins--remove-default">About</h4>
              <img className="links__header__icon" alt="link to about section" src="https://johnborkowski.me/images/about.svg" />
            </button>
            <h4 className="links__divide margins--remove-default">|</h4>
            <button onClick={this.changeToPortfolio} className={activeLink === 'portfolio' ? 'links__link is-active' : 'links__link is-inactive'}>
              <h4 className="links__header__text margins--remove-default">portfolio</h4>
              <img className="links__header__icon" alt="link to portfoio section" src="https://johnborkowski.me/images/portfolio.svg" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { activeLink } = this.state;
    const isScrolling = (this.state.scrollPositionY > this.scrollThreshold) ? 'landingPage--isScrolling' : '';
    return (
      <div className={`landing-page ${isScrolling} width-is-screen vert-center`}>
        <div className="" >
          {this.renderHeader()}
          {activeLink === ('about') ? <About /> : <PortfolioGrid fromLandingPage />}
          <Footer />
        </div>
      </div>
    );
  }
}

export default LandingPage;
