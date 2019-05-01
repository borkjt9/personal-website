import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import browserHistory from '../shared/browser-history';
import Footer from '../footer/footer';
import Header from '../header/header';
import PortfolioNavs from '../portfolio-navs/portfolio-navs';
import { browserPaths, portfolioItems, components } from '../shared/enums';
import { debounce } from '../shared/functions';
import {
  setActiveSection,
  setTopBarFixed,
  setHeaderIsTopBar,
  setIsDesktop,
} from '../redux/actions';
import './app.scss';

// This variable doesn't do anything other than add 'portfolio' or 'about' to the browser.
// I found if it wasn't added after it was clicked, it became confusing.

class App extends Component {
  constructor(props) {
    super(props);
    this.selectSubSection = this.selectSubSection.bind(this);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.setViewport = this.setViewport.bind(this);
    this.state = {
      scrollPositionY: 0,

    };
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    const { activeSection } = match.params;
    if (activeSection) {
      dispatch(setTopBarFixed(true));
      if (browserPaths[activeSection]) {
        dispatch(setActiveSection(activeSection));
      }
    } else if (!activeSection || !browserPaths[activeSection]) {
      const pathSection = match.path.substring(1);
      if (browserPaths[pathSection]) {
        dispatch(setActiveSection(pathSection));
      }
    }
    document.addEventListener('scroll', debounce(this.handleScrollEvent, 0));
    this.setViewport();
    // removing below listener because it messes with props if user is constantly resizing screen.
    // setting carousel at initial mount does not affect user experience significantly
    // window.addEventListener('resize', this.setViewport);
  }


  componentWillUnmount() {
    document.removeEventListener('scroll', debounce(this.handleScrollEvent, 0));
    // removing below listener because it messes with props if user is constantly resizing screen.
    // setting carousel at initial mount does not affect user experience significantly
    // window.removeEventListener('resize', this.setViewport);
  }

  setViewport() {
    const { isDesktop, dispatch } = this.props;
    if (window.innerWidth <= this.mobileThreshold && isDesktop) {
      dispatch(setIsDesktop(false));
    } else if (window.innerWidth > this.mobileThreshold && !isDesktop) {
      dispatch(setIsDesktop(true));
    }
  }

    mobileThreshold = 767;


  scrollThreshold = 40;
  defaultSection = 'about';

  handleScrollEvent() {
    const { scrollThreshold } = this;
    const currScrollPositionY = Number(window.scrollY);
    const { dispatch, headerIsTopBar } = this.props;

    if (headerIsTopBar && currScrollPositionY < scrollThreshold) {
      dispatch(setHeaderIsTopBar(false));
    } else if (!headerIsTopBar && currScrollPositionY > scrollThreshold) {
      dispatch(setHeaderIsTopBar(true));
    }
  }

  selectSubSection(section) {
    const { dispatch, topBarFixed } = this.props;
    const pageIsScrolling = (this.state.scrollPositionY > this.scrollThreshold);
    const browserPath = browserPaths[section];
    if (pageIsScrolling) {
      window.scrollTo(0, 0);
    }
    browserHistory.replace({
      pathname: browserPath,
    });
    if (!topBarFixed && portfolioItems[section]) {
      dispatch(setTopBarFixed(true));
    }
    dispatch(setActiveSection(section));
  }

  render() {
    const { activeSection, topBarFixed, headerIsTopBar } = this.props;
    const pageIsScrolling = headerIsTopBar && !topBarFixed ? 'is-scrolling' : '';
    const topClasses = portfolioItems[activeSection] ? 'portfolio' : `app width-is-screen vert-center ${pageIsScrolling}`;
    const component = components[activeSection];
    return (
      <div className={topClasses}>
        <div>
          <Header />
          {component}
          <Footer />
          <PortfolioNavs />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  match: {},
  activeSection: 'about',
  topBarFixed: false,
  headerIsTopBar: false,
  isDesktop: true,
};

App.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  activeSection: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  topBarFixed: PropTypes.bool,
  headerIsTopBar: PropTypes.bool,
  isDesktop: PropTypes.bool,
};

function mapStateToProps(state) {
  const {
    browserPath,
    activeSection,
    topBarFixed,
    headerIsTopBar,
    isDesktop,
  } = state;
  return {
    browserPath,
    activeSection,
    topBarFixed,
    headerIsTopBar,
    isDesktop,
  };
}
export default withRouter(connect(mapStateToProps)(App));
