import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import browserHistory from '../shared/browser-history';
import Footer from '../footer/footer';
import Header from '../header/header';
import { browserPaths, components, portfolioItems } from '../shared/enums';
import { debounce, addCustomProps } from '../shared/functions';
import { setActiveSection, setTopBarFixed, setHeaderIsTopBar } from '../redux/actions';
import './app.scss';

// This variable doesn't do anything other than add 'portfolio' or 'about' to the browser.
// I found if it wasn't added after it was clicked, it became confusing.

class App extends Component {
  constructor(props) {
    super(props);
 
    this.selectSubSection = this.selectSubSection.bind(this);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);

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
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', debounce(this.handleScrollEvent, 0));
  }

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
    const { headerIsTopBar } = this;
    const { activeSection, topBarFixed } = this.props;
    console.log('active section', activeSection);
    const pageIsScrolling = headerIsTopBar && !topBarFixed ? 'is-scrolling' : '';
    const topClasses = portfolioItems[activeSection] ? 'portfolio' : `app width-is-screen vert-center ${pageIsScrolling}`;
    const activeComponent = addCustomProps(
      components[activeSection],
      { selectPortfolioItem: this.selectSubSection },
    );
    return (
      <div className={topClasses}>
        <div>
          <Header />
          {activeComponent}
          <Footer />
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
};

App.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  activeSection: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  topBarFixed: PropTypes.bool,
  headerIsTopBar: PropTypes.bool,
};

function mapStateToProps(state) {
  const { browserPath, activeSection, topBarFixed, headerIsTopBar } = state;
  return {
    browserPath,
    activeSection,
    topBarFixed,
    headerIsTopBar,
  };
}
export default withRouter(connect(mapStateToProps)(App));
