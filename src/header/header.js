import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import browserHistory from '../shared/browser-history';
import Carousel from '../carousel/carousel';
import './header.scss';
import { resetState, setActiveSection, setExpandCarousel, setClearCarousel } from '../redux/actions';


class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleCarousel = this.toggleCarousel.bind(this);
    this.resetPage = this.resetPage.bind(this);
  }
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
    browserHistory.replace('/home');
    window.scrollTo(0, 0);
  }

  render() {
    const {
      headerIsTopBar,
      topBarFixed,
      activeSection,
      expandCarousel,
    } = this.props;
    const headerExtraClassNames = headerIsTopBar || topBarFixed ? '--is-top-bar position-is-fixed' : '--not-top-bar';
    const headerSubClasses = headerIsTopBar || topBarFixed ? 'header__top-bar' : '';
    const aboutClassName = activeSection === 'about' ? '--is-active' : '--is-inactive';
    const portfolioClassName = activeSection === 'portfolio' ? '--is-active' : 'is-inactive';
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
            <a href="../portfolio" className="header__section-link --is-mobile">
              <img className="header__section-link__icon" alt="link to portfoio section" src="https://johnborkowski.me/images/portfolio.svg" />
            </a>
          </div>
        </div>
        <Carousel />
      </div>
    );
  }
}

Header.defaultProps = {
  headerIsTopBar: false,
  expandCarousel: false,
  topBarFixed: false,
};

Header.propTypes = {
  activeSection: PropTypes.string.isRequired,
  headerIsTopBar: PropTypes.bool,
  expandCarousel: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  topBarFixed: PropTypes.bool,
};

function mapStateToProps(state) {
  const { activeSection, expandCarousel, topBarFixed, headerIsTopBar } = state;
  return {
    activeSection,
    expandCarousel,
    topBarFixed,
    headerIsTopBar,
  };
}
export default connect(mapStateToProps)(Header);
