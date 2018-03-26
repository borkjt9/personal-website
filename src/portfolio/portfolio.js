import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
import Header from '../header/header';
import PortfolioGrid from './portfolio-grid/portfolio-grid';
import BankOfAmerica from './portfolio-pages/bank-of-america/bank-of-america';
import Sunrun from './portfolio-pages/sunrun/sunrun';
import RIAPortal from './portfolio-pages/ria-portal/ria-portal';
import AutoPOOL from './portfolio-pages/autopool/autopool';
import BoonInvestments from './portfolio-pages/boon-investments/boon-investments';
import WhiteLabelApps from './portfolio-pages/white-label-apps/white-label-apps';
import About from '../about/about';
import Footer from '../footer/footer';
import portfolioNavRefs from '../public-objects/portfolio-nav-refs';
import './portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.handleNextPortfolio = this.handleNextPortfolio.bind(this);
    this.handlePreviousPortfolio = this.handlePreviousPortfolio.bind(this);
    this.selectSubSection = this.selectSubSection.bind(this);
    this.handlePortfolioToggle = this.handlePortfolioToggle.bind(this);
    const selectedSubSection = props.match.params.portfolioID ? props.match.params.portfolioID : 'portfolio';
    this.state = {
      selectedSubSection,
      nextPortfolio: portfolioNavRefs[selectedSubSection].nref,
      previousPortfolio: portfolioNavRefs[selectedSubSection].pref,
      currentPortfolioIndex: portfolioNavRefs[selectedSubSection].index,
      carouselExpanded: false,
    };
  }

  componentDidUpdate() {
    if (!this.state.carouselExpanded) {
      window.scrollTo(0, 0);
    }
  }

  handlePortfolioToggle(expanded) {
    this.setState({
      carouselExpanded: expanded,
    });
  }

  handleNextPortfolio() {
    this.selectSubSection(this.state.nextPortfolio);
  }

  handlePreviousPortfolio() {
    this.selectSubSection(this.state.previousPortfolio);
  }

  browserHistory = createHistory();

  //Pushes the name, then the name gets dropped into props in the constructor
  //May not be most efficient speedwise, but makes sense to users for it to match & is efficient way to directly link to each portfolio page

  selectSubSection(selectedSubSection) {

    if (selectedSubSection === 'about') {
      this.browserHistory.push({
        pathname: `../${selectedSubSection}`,
      });
    } else {
      this.browserHistory.push({
        pathname: `../portfolio/${selectedSubSection}`,
      });
    }

    this.setState({
      carouselExpanded: false,
      nextPortfolio: portfolioNavRefs[selectedSubSection].nref,
      previousPortfolio: portfolioNavRefs[selectedSubSection].pref,
      currentPortfolioIndex: portfolioNavRefs[selectedSubSection].index,
      selectedSubSection: selectedSubSection,
    }, () => {
    });
  }


  renderSubSection() {
    const { selectedSubSection } = this.state;
    switch (selectedSubSection) {
      case 'bank-of-america':
        return <BankOfAmerica />;
      case 'ria-portal':
        return <RIAPortal />;
      case 'boon-investments':
        return <BoonInvestments />;
      case 'sunrun':
        return <Sunrun />;
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
              selectPortfolioItem={this.selectSubSection}
            />
            <Footer />
          </div>
        );
    }
  }

  //when portfolio is set to about or carousel is expanded, these do not appear
  renderPortfolioNavs() {
    if (this.state.carouselExpanded || this.state.selectedSubSection === 'about') {
      return
    }
    return (
      <div className="portfolio__nav">
        <button onClick={this.handlePreviousPortfolio} className="portfolio__nav__link portfolio__nav__link--previous">
          <img
            alt="When clicked, the view will show the next portfolio page."
            className="portfolio__nav__chevron"
            src="https://johnborkowski.me/images/left-chevron-40.png"
            srcSet="https://johnborkowski.me/images/left-chevron-20.png 20w,
            https://johnborkowski.me/images/left-chevron-40.png 40w,
            https://johnborkowski.me/images/left-chevron-60.png 60w"
            sizes="20px"
          />
          <h5 className="portfolio__nav__link__title">Previous Project</h5>
        </button>
        <button onClick={this.handleNextPortfolio} className="portfolio__nav__link portfolio__nav__link--next">
          <h5 className="portfolio__nav__link__title">Next Project</h5>
          <img
            alt="When clicked, the view will show the previous portfolio page."
            className="portfolio__nav__chevron"
            src="https://johnborkowski.me/images/right-chevron-40.png"
            srcSet="https://johnborkowski.me/images/right-chevron-20.png 20w,
            https://johnborkowski.me/images/right-chevron-40.png 40w,
            https://johnborkowski.me/images/right-chevron-60.png 60w"
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
          selectSubSection={this.selectSubSection}
        />
        {this.renderSubSection()}
        {this.renderPortfolioNavs()}
      </div>

    );
  }
}

Portfolio.defaultProps = {
  match: {
    params: {
      portfolioID: 'portfolio',
    },
  },
};

Portfolio.propTypes = {
  match: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
};

export default Portfolio;
