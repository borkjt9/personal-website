import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';

import About from '../about/about';
import Footer from '../footer/footer';
import PortfolioGrid from '../portfolio/portfolio-grid/portfolio-grid';
import './landing-page.scss';
import '../header/header.scss';

// used below to handle scroll events
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// This variable doesn't do anything other than add 'portfolio' or 'about' to the browser.
// I found that with users, if it wasn't added after it was clicked, it became confusing.

const fakeBrowserHistory = createHistory();

class LandingPage extends Component {
  constructor(props) {
    super(props);
    const activeSection = props.match.params.activeSection ? props.match.params.activeSection : 'about';
    this.state = {
      activeSection,
      scrollPositionY: 0,
    };
    this.changeToAboutSection = this.changeToAboutSection.bind(this);
    this.changeToPortfolioSection = this.changeToPortfolioSection.bind(this);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.resetPage = this.resetPage.bind(this);
    this.selectPortfolioItem = this.selectPortfolioItem.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', debounce(this.handleScrollEvent, 0));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', debounce(this.handleScrollEvent, 0));
  }


  handleScrollEvent() {
    // + is unary operator, same as Number(window.scrollY)
    const currScrollPositionY = Number(window.scrollY);
    if (this.state.scrollPositionY > this.scrollThreshold
      && currScrollPositionY < this.scrollThreshold) {
      this.setState({ scrollPositionY: currScrollPositionY });
    } else if (this.state.scrollPositionY < this.scrollThreshold
      && currScrollPositionY > this.scrollThreshold) {
      this.setState({ scrollPositionY: currScrollPositionY });
    }
  }

  selectPortfolioItem(portfolioItem) {
    this.props.history.push(`../portfolio/${portfolioItem}`);
  }

  scrollThreshold = 40;

  changeToAboutSection() {
    if (this.state.activeSection === 'portfolio') {
      if (this.state.scrollPositionY > this.scrollThreshold) {
        window.scrollTo(0, 125);
      }
      this.setState({
        activeSection: 'about',
      });
      fakeBrowserHistory.push('../home/about');
    }
  }

  changeToPortfolioSection() {
    if (this.state.activeSection === 'about') {
      if (this.state.scrollPositionY > this.scrollThreshold) {
        window.scrollTo(0, 125);
      }
      this.setState({
        activeSection: 'portfolio',
      });
      fakeBrowserHistory.push('../home/portfolio');
    }
  }

  resetPage() {
    if (this.state.activeSection === 'portfolio') {
      this.setState({
        activeSection: 'about',
      });
    }
    fakeBrowserHistory.push('../home/');
    window.scrollTo(0, 0);
  }

  // While below seems similar to the header class, but with some extra classNames, headers.
  // Rather than make the header class overclomplicated, I just made a landing-page specific header.
  // Long term it will read better.

  renderHeader() {
    const { activeSection } = this.state;
    const pageIsScrolling = (this.state.scrollPositionY > this.scrollThreshold) ? 'header is-top-bar position-is-fixed' : 'header not-top-bar';
    return (
      <div className={pageIsScrolling}>
        <div className="header__home-link text__vert-middle">
          <h2 className="header__home-link__text">
              john borkowski
          </h2>
          <button onClick={this.resetPage}>
            <img className="header__home-link__icon" alt="link to home section" src="https://johnborkowski.me/images/home.svg" />
          </button>
        </div>
        <div className="header__section-links text__vert-middle">
          <button onClick={this.changeToAboutSection} className={activeSection === 'about' ? 'header__section-link is-active' : 'header__section-link is-inactive'}>
            <h4 className="header__section-link__text margins--remove-default">About</h4>
            <img className="header__section-link__icon" alt="link to about section" src="https://johnborkowski.me/images/about.svg" />
          </button>
          <h4 className="header__divide margins--remove-default">|</h4>
          <button onClick={this.changeToPortfolioSection} className={activeSection === 'portfolio' ? 'header__section-link is-active' : 'header__section-link is-inactive'}>
            <h4 className="header__section-link__text margins--remove-default">Portfolio</h4>
            <img className="header__section-link__icon" alt="link to portfoio section" src="https://johnborkowski.me/images/portfolio.svg" />
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { activeSection } = this.state;
    const pageIsScrolling = (this.state.scrollPositionY > this.scrollThreshold) ? 'is-scrolling' : '';
    return (
      <div className={`landing-page ${pageIsScrolling} width-is-screen vert-center`}>
        <div className="" >
          {this.renderHeader()}
          {activeSection === ('about') ? <About /> : <PortfolioGrid
            selectPortfolioItem={this.selectPortfolioItem}
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
