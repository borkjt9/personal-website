import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';

import Header from './header/header';
import PortfolioGrid from './portfolio-grid/portfolio-grid';
import BankOfAmerica from './portfolio-pages/bank-of-america/bank-of-america';
import SunRun from './portfolio-pages/sunrun/sunrun';
import RiaPortal from './portfolio-pages/ria-portal/ria-portal';
import AutoPOOL from './portfolio-pages/autopool/autopool';
import BoonInvestments from './portfolio-pages/boon-investments/boon-investments';
import WhiteLabelApps from './portfolio-pages/white-label-apps/white-label-apps';
import About from '../about/about';
import Footer from '../footer/footer';
import './portfolio.scss';


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.handleNextPortfolio = this.handleNextPortfolio.bind(this);
    this.handlePreviousPortfolio = this.handlePreviousPortfolio.bind(this);
    this.handlePortfolioChange = this.handlePortfolioChange.bind(this);
    this.handlePortfolioToggle = this.handlePortfolioToggle.bind(this);

    const selectedPortfolio = props.match.params.portfolioID ? props.match.params.portfolioID : '';

    this.state = {
      selectedPortfolio,
      nextPortfolio: this.navRefs[selectedPortfolio].nref,
      previousPortfolio: this.navRefs[selectedPortfolio].pref,
      currentPortfolioIndex: this.navRefs[selectedPortfolio].index,
      headerExpanded: false,
    };
  }

  componentDidUpdate() {
    if (!this.state.headerExpanded) {
      window.scrollTo(0, 0);
    }
  }

  handlePortfolioToggle(expanded) {
    this.setState({
      headerExpanded: expanded,
    });
  }

  handleNextPortfolio() {
    this.handlePortfolioChange(this.state.nextPortfolio);
  }

  handlePreviousPortfolio() {
    this.handlePortfolioChange(this.state.previousPortfolio);
  }

  handlePortfolioChange(newPortfolio) {
    this.history.push({
      pathname: newPortfolio,
    });
    this.setState({
      headerExpanded: false,
      nextPortfolio: this.navRefs[newPortfolio].nref,
      previousPortfolio: this.navRefs[newPortfolio].pref,
      currentPortfolioIndex: this.navRefs[newPortfolio].index,
      selectedPortfolio: newPortfolio,
    }, () => {
    });
  }

  history = createHistory()

  navRefs = {
    'boon-investments': {
      pref: 'sunrun',
      nref: 'ria-portal',
      index: 0,
    },
    'ria-portal': {
      pref: 'boon-investments',
      nref: 'white-label-apps',
      index: 1,
    },
    'white-label-apps': {
      pref: 'ria-portal',
      nref: 'autoPOOL',
      index: 2,

    },
    autoPOOL: {
      pref: 'white-label-apps',
      nref: 'bank-of-america',
      index: 3,
    },
    'bank-of-america': {
      pref: 'autoPOOL',
      nref: 'sunrun',
      index: 4,
    },
    sunrun: {
      pref: 'bank-of-america',
      nref: 'boon-investments',
      index: 5,
    },
    about: {
      pref: 'boon-investments',
      nref: 'boon-investments',
      index: -1,
    },
    '': {
      pref: 'boon-investments',
      nref: 'boon-investments',
      index: -1,
    },
  }

  renderSelectedPortfolio() {
    const { selectedPortfolio } = this.state;
    switch (selectedPortfolio) {
      case 'bank-of-america':
        return <BankOfAmerica />;
      case 'ria-portal':
        return <RiaPortal />;
      case 'boon-investments':
        return <BoonInvestments />;
      case 'sunrun':
        return <SunRun />;
      case 'autoPOOL':
        return <AutoPOOL />;
      case 'white-label-apps':
        return <WhiteLabelApps />;
      case 'about':
        return (
          <div className="margin-top-is-header">
            <About />
            <Footer />
          </div>
        );
      default:
        return (
          <div className="margin-top-is-header">
            <PortfolioGrid
              onPortfolioChange={this.handlePortfolioChange}
            />
            <Footer />
          </div>
        );
    }
  }

  renderPortfolioNavs() {
    return (
      <div className="portfolio__nav">
        <button onClick={this.handleNextPortfolio} className="portfolio__nav__link portfolio__nav__link--previous">
          <img
            alt="When clicked, the view will show the next portfolio page."
            className="portfolio__nav__chevron"
            src="https://s3.amazonaws.com/jtb-personal-website/images/left-chevron-40.png"
            srcSet="https://s3.amazonaws.com/jtb-personal-website/images/left-chevron-20.png 20w,
            https://s3.amazonaws.com/jtb-personal-website/images/left-chevron-40.png 40w,
            https://s3.amazonaws.com/jtb-personal-website/images/left-chevron-60.png 60w"
            sizes="20px"
          />
          <h5 className="portfolio__nav__link__title">Previous Project</h5>
        </button>

        <button onClick={this.handlePreviousPortfolio} className="portfolio__nav__link portfolio__nav__link--next">
          <h5 className="portfolio__nav__link__title">Next Project</h5>
          <img
            alt="When clicked, the view will show the previous portfolio page."
            className="portfolio__nav__chevron"
            src="https://s3.amazonaws.com/jtb-personal-website/images/right-chevron-40.png"
            srcSet="https://s3.amazonaws.com/jtb-personal-website/images/right-chevron-20.png 20w,
            https://s3.amazonaws.com/jtb-personal-website/images/right-chevron-40.png 40w,
            https://s3.amazonaws.com/jtb-personal-website/images/right-chevron-60.png 60w"
            sizes="20px"
          />
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="portfolio">
        <Header
          currentPortfolioIndex={this.state.currentPortfolioIndex}
          onPortfolioToggle={this.handlePortfolioToggle}
          onPortfolioChange={this.handlePortfolioChange}
        />
        {this.renderSelectedPortfolio()}
        {(this.state.headerExpanded || this.state.selectedPortfolio === 'about' || this.state.selectedPortfolio === '') ? '' : this.renderPortfolioNavs()}

      </div>

    );
  }
}

Portfolio.defaultProps = {
  match: {},
};

Portfolio.propTypes = {
  match: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
};

export default Portfolio;
