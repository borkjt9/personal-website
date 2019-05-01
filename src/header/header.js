import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import browserHistory from '../shared/browser-history';
import Carousel from '../carousel/carousel';
import './header.scss';
import { browserPaths } from '../shared/enums';
import { setBrowserPath, resetState, setActiveSection, setExpandCarousel, setClearCarousel } from '../redux/actions';
import homeImg from '../assets/images/home.svg';
import aboutImg from '../assets/images/about.svg';
import portfolioImg from '../assets/images/portfolio.svg';
import blogImg from '../assets/images/blog.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleCarousel = this.toggleCarousel.bind(this);
    this.resetPage = this.resetPage.bind(this);
  }

  aboutLabel = 'about';
  portfolioLabel = 'portfolio';

  changeToSection(section) {
    const browserPath = browserPaths[section];
    const { dispatch } = this.props;
    browserHistory.replace({
      pathname: browserPath,
    });
    dispatch(setBrowserPath(browserPath));
    dispatch(setActiveSection(section));
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
    const { topBarFixed, isDesktop } = this.props;
    if (topBarFixed && isDesktop && section !== 'about') {
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
              <img className="header__home-link__icon" alt="link to home section" src={homeImg} />
            </button>
          </div>
          <div className="header__section-links text__vert-middle">
            <button onClick={() => this.handleHeaderClick('about')} className={`header__section-link ${aboutClassName}`}>
              <h4 className="header__section-link__text margins--remove-default">about</h4>
              <img className="header__section-link__icon" alt="link to about section" src={aboutImg} />
            </button>
            <h4 className="header__divide margins--remove-default">|</h4>
            <button onClick={() => this.handleHeaderClick('portfolio')} className={`header__section-link ${portfolioClassName}`}>
              <h4 className="header__section-link__text margins--remove-default">{portfolioLabel}</h4>
              <img className="header__section-link__icon" alt="link to portfoio section" src={portfolioImg} />
            </button>
            <h4 className="header__divide margins--remove-default">|</h4>
            <a href="https://medium.com/@johnborkowski7" className="header__section-link --is-inactive">
              <h4 className="header__section-link__text margins--remove-default">blog</h4>
              <img className="header__section-link__icon" alt="link to blog" src={blogImg} />
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
  isDesktop: true,
};

Header.propTypes = {
  activeSection: PropTypes.string.isRequired,
  headerIsTopBar: PropTypes.bool,
  expandCarousel: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  topBarFixed: PropTypes.bool,
  isDesktop: PropTypes.bool,
};

function mapStateToProps(state) {
  const {
    activeSection,
    expandCarousel,
    topBarFixed,
    headerIsTopBar,
    isDesktop,
  } = state;
  return {
    activeSection,
    expandCarousel,
    topBarFixed,
    headerIsTopBar,
    isDesktop,
  };
}
export default connect(mapStateToProps)(Header);
