import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import Carousel from '../carousel/carousel';
import './header.scss';
import { resetState, setActiveSection, setExpandCarousel, setClearCarousel } from '../redux/actions';


class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleCarousel = this.toggleCarousel.bind(this);
    this.resetPage = this.resetPage.bind(this);
  }
  fakeBrowserHistory = createBrowserHistory();
  aboutLabel = 'about';
  portfolioLabel = 'portfolio';

  changeToSection(section) {
    this.props.dispatch(setActiveSection(section));
  }

  // toggleCarousel onlyimplements the animation.
  // Rendering is done in renderCarousel below.
  toggleCarousel() {
    const { expandCarousel, dispatch } = this.props;
    if (expandCarousel) {
      setTimeout(() => {
        dispatch(setClearCarousel(true));
      }, 500);
    }
    dispatch(setExpandCarousel(!expandCarousel));
    dispatch(setClearCarousel(false));


  }

  handleHeaderClick(section) {
    const { topBarFixed } = this.props;
    if (topBarFixed && section !== 'about') {
      this.toggleCarousel();
    } else {
      this.changeToSection(section);
    }
  }

  resetPage() {
    const { dispatch } = this.props;
    dispatch(resetState());
    this.fakeBrowserHistory.replace('/home');
    window.scrollTo(0, 0);
  }

  renderCarousel() {
    return (
      <Carousel
        currentPortfolioIndex={this.props.currentPortfolioIndex}
      />
    );
  }

  render() {
    const { isTopBar, activeSection, expandCarousel } = this.props;
    const headerExtraClassNames = isTopBar ? 'is-top-bar position-is-fixed' : 'not-top-bar';
    const headerSubClasses = isTopBar ? 'header__top-bar' : '';
    const aboutClassName = activeSection === 'about' ? 'is-active' : 'is-inactive';
    const portfolioClassName = activeSection === 'portfolio' ? 'is-active' : 'is-inactive';
    const portfolioLabel = !expandCarousel ? 'portfolio' : 'close';
    return (
      <div className={`header ${headerExtraClassNames}`}>
        <div className={headerSubClasses}>
          <div className="header__home-link text__vert-middle">
            <h2 className="header__home-link__text">
                john borkowski
            </h2>
            <button onClick={this.resetPage}>
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
              <h4 className="header__section-link__text margins--remove-default">{portfolioLabel}</h4>
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
  expandCarousel: false,
  topBarFixed: false,
};

Header.propTypes = {
  activeSection: PropTypes.string.isRequired,
  isTopBar: PropTypes.bool,
  currentPortfolioIndex: PropTypes.number,
  expandCarousel: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  topBarFixed: PropTypes.bool,
};

function mapStateToProps(state) {
  const { activeSection, expandCarousel, topBarFixed } = state;
  return {
    activeSection,
    expandCarousel,
    topBarFixed,
  };
}
export default connect(mapStateToProps)(Header);
