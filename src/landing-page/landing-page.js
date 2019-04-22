import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';

import About from '../about/about';
import Footer from '../footer/footer';
import Header from '../header/header';
import PortfolioGrid from '../portfolio/portfolio-grid/portfolio-grid';
import './landing-page.scss';

// used below to handle scroll events
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// This variable doesn't do anything other than add 'portfolio' or 'about' to the browser.
// I found if it wasn't added after it was clicked, it became confusing.

const defaultSection = 'about';
const scrollThreshold = 40;
const fakeBrowserHistory = createHistory(); 
class LandingPage extends Component {
  constructor(props) {
    super(props);
    const activeSection = props.match.params.activeSection ? props.match.params.activeSection : 'about';
    this.state = {
      activeSection,
      scrollPositionY: 0,
    };
    this.selectSubSection = this.selectSubSection.bind(this);
    this.changeToSection = this.changeToSection.bind(this);
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
  
  fakeBrowserHistory = createHistory();
  scrollThreshold = 40;

  handleScrollEvent() {
    // + is unary operator, same as Number(window.scrollY)
    const currScrollPositionY = Number(window.scrollY);
    if (this.state.scrollPositionY > scrollThreshold
      && currScrollPositionY < scrollThreshold) {
      this.setState({ scrollPositionY: currScrollPositionY });
    } else if (this.state.scrollPositionY < scrollThreshold
      && currScrollPositionY > scrollThreshold) {
      this.setState({ scrollPositionY: currScrollPositionY });
    }
  }

  selectPortfolioItem(portfolioItem) {
    this.props.history.push(`../portfolio/${portfolioItem}`);
  }


  changeToSection(section) {
    if (this.state.activeSection !== section) {
      if (this.state.scrollPositionY) {
        window.scrollTo(0, 125);
      }
      this.setState({
        activeSection: section,
      });
      this.fakeBrowserHistory.push(`../home/${section}`);
    }
  }

  resetPage() {
    this.setState({
      activeSection: defaultSection,
    });
    this.fakeBrowserHistory.push('../home/');
    window.scrollTo(0, 0);
  }

  // While below seems similar to the header class, but with some extra classNames, headers.
  // Rather than make the header class overclomplicated, I just made a landing-page specific header.
  // Long term it will read better.

  // renderHeader() {
  //   const { activeSection } = this.state;
  //   const pageIsScrolling = (this.state.scrollPositionY > scrollThreshold) ? 'header is-top-bar position-is-fixed' : 'header not-top-bar';
  //   return (
  //     <div className={pageIsScrolling}>
  //       <div className="header__home-link text__vert-middle">
  //         <h2 className="header__home-link__text">
  //             john borkowski
  //         </h2>
  //         <button onClick={this.resetPage}>
  //           <img className="header__home-link__icon" alt="link to home section" src="https://johnborkowski.me/images/home.svg" />
  //         </button>
  //       </div>
  //       <div className="header__section-links text__vert-middle">
  //         <button onClick={() => this.changeToSection('about')} className={activeSection === 'about' ? 'header__section-link is-active' : 'header__section-link is-inactive'}>
  //           <h4 className="header__section-link__text margins--remove-default">About</h4>
  //           <img className="header__section-link__icon" alt="link to about section" src="https://johnborkowski.me/images/about.svg" />
  //         </button>
  //         <h4 className="header__divide margins--remove-default">|</h4>
  //         <button onClick={() => this.changeToSection('portfolio')} className={activeSection === 'portfolio' ? 'header__section-link is-active' : 'header__section-link is-inactive'}>
  //           <h4 className="header__section-link__text margins--remove-default">Portfolio</h4>
  //           <img className="header__section-link__icon" alt="link to portfoio section" src="https://johnborkowski.me/images/portfolio.svg" />
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  selectSubSection(section) {
    const pageIsScrolling = (this.state.scrollPositionY > scrollThreshold);

    if (pageIsScrolling) {
      window.scrollTo(0, 125);
    }
    fakeBrowserHistory.push({
      pathname: `../home/${section}`,
    });
    this.setState({
      activeSection: section,
    });
  }

  render() {
    const { activeSection } = this.state;
    const pageIsScrolling = (this.state.scrollPositionY > scrollThreshold) ? 'is-scrolling' : '';
    const isTopBar = this.state.scrollPositionY > scrollThreshold;
    return (
      <div className={`landing-page width-is-screen vert-center ${pageIsScrolling}`}>
        <div>
          {/* {this.renderHeader()} */}
          <Header
            selectSubSection={this.selectSubSection}
            isTopBar={isTopBar}
            addCarousel={false}
            resetPage={this.resetPage}
            activeSection={activeSection}
          />
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
