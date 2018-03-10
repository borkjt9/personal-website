import React, { Component } from 'react';
import map from 'lodash/map';
import About from '../about/about';
import Footer from '../footer/footer';
import PortfolioGrid from '../portfolio/portfolio-grid/portfolio-grid';
import portfolioArr from '../public-objects/portfolio-arr';
import './landing-page.scss';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'about',
    };
    this.changeToAbout = this.changeToAbout.bind(this);
    this.changeToPortfolio = this.changeToPortfolio.bind(this);
  }

  initialPortfolioLoad = true
  expandPortfolio = true
  portfolio = portfolioArr;

  changeToAbout() {
    this.setState({
      activeLink: 'about',
    });
  }

  changeToPortfolio() {
    this.setState({
      activeLink: 'portfolio',
    });
    this.expandPortfolio = true;
  }

  renderSubSection(type) {
    if (type === 'about') {
      return <About />;
    }
    return <PortfolioGrid
            fromLandingPage={true}
          />
  }
  
  renderHeader() {
    const { activeLink } = this.state;

    return (
      <div className="links links--landing-page">
        <button onClick={this.changeToAbout} className={activeLink === 'about' ? 'links__link is-active' : 'links__link is-inactive'}>
          <h4 className="links__header__text margins--remove-default">About</h4>
          <img className="links__header__icon" alt="link to about section" src="https://s3.amazonaws.com/jtb-personal-website/images/about.svg" />
        </button>
        <h4 className="links__divide margins--remove-default">|</h4>
        <button onClick={this.changeToPortfolio} className={activeLink === 'portfolio' ? 'links__link is-active' : 'links__link is-inactive'}>
          <h4 className="links__header__text margins--remove-default">portfolio</h4>
          <img className="links__header__icon" alt="link to portfoio section" src="https://s3.amazonaws.com/jtb-personal-website/images/portfolio.svg" />
        </button>
      </div>
    );
  }

  render() {
    const { activeLink } = this.state;

    return (
      <div className="landing-page width-is-screen vert-center">
        <div className="" >
          <div >
            <div>
              <h2 className="name">
                john borkowski
              </h2>
            </div>
            {this.renderHeader()}
            {activeLink !== ('') ? this.renderSubSection(activeLink) : ''}
          </div>
          <Footer />

        </div>

      </div>
    );
  }
}

export default LandingPage;
