import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import Footer from '../footer/footer';
import Header from '../header/header';
import { browserPaths, components, portfolioItems } from '../shared/enums';
import { debounce, addCustomProps } from '../shared/functions';
import './app.scss';

// This variable doesn't do anything other than add 'portfolio' or 'about' to the browser.
// I found if it wasn't added after it was clicked, it became confusing.

class App extends Component {
  constructor(props) {
    super(props);
    let { activeSection } = props.match.params;
    const pathSection = props.match.path.substring(1);
    if (!activeSection || !browserPaths[activeSection]) {
      if (browserPaths[pathSection]) {
        activeSection = pathSection;
      } else {
        activeSection = 'about';
      }
    }
    this.state = {
      activeSection,
      scrollPositionY: 0,
      topBarFixed: props.match.params.activeSection !== undefined,
    };
    this.selectSubSection = this.selectSubSection.bind(this);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.resetPage = this.resetPage.bind(this);
  }


  componentDidMount() {
    document.addEventListener('scroll', debounce(this.handleScrollEvent, 0));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', debounce(this.handleScrollEvent, 0));
  }

  fakeBrowserHistory = createHistory();
  scrollThreshold = 40;
  defaultSection = 'about';

  handleScrollEvent() {
    // + is unary operator, same as Number(window.scrollY)
    const { scrollThreshold } = this;
    const currScrollPositionY = Number(window.scrollY);
    if (this.state.scrollPositionY > scrollThreshold
      && currScrollPositionY < scrollThreshold) {
      this.setState({ scrollPositionY: currScrollPositionY });
    } else if (this.state.scrollPositionY < scrollThreshold
      && currScrollPositionY > scrollThreshold) {
      this.setState({ scrollPositionY: currScrollPositionY });
    }
  }

  resetPage() {
    this.setState({
      activeSection: this.defaultSection,
    });
    this.fakeBrowserHistory.replace('/home');
    window.scrollTo(0, 0);
  }

  selectSubSection(section) {
    const pageIsScrolling = (this.state.scrollPositionY > this.scrollThreshold);
    const browserPath = browserPaths[section];
    if (pageIsScrolling) {
      window.scrollTo(0, 0);
    }
    this.fakeBrowserHistory.replace({
      pathname: browserPath,
    });
    let { topBarFixed } = this.state;
    if (portfolioItems[section]) {
      topBarFixed = true;
    }
    this.setState({
      activeSection: section,
      topBarFixed,
    });
  }

  render() {
    const { scrollThreshold } = this;
    const { activeSection, topBarFixed } = this.state;
    const pageIsScrolling = this.state.scrollPositionY > scrollThreshold ? 'is-scrolling' : '';
    const isTopBar = this.state.scrollPositionY > scrollThreshold || topBarFixed;
    const topClasses = portfolioItems[activeSection] ? 'portfolio' : `app width-is-screen vert-center ${pageIsScrolling}`;
    const activeComponent = addCustomProps(
      components[activeSection],
      { selectPortfolioItem: this.selectSubSection },
    );
    return (
      <div className={topClasses}>
        <div>
          <Header
            selectSubSection={this.selectSubSection}
            isTopBar={isTopBar}
            addCarousel={topBarFixed}
            resetPage={this.resetPage}
            activeSection={activeSection}
          />
          {activeComponent}
          <Footer />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  match: {},
};

App.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

export default withRouter(App);
