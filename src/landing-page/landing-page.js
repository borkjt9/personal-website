import React, { Component } from 'react';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import {connect} from 'react-redux';
import About from '../about/about';
import Footer from '../footer/footer';
import { connect } from 'react-redux';
import './landing-page.scss';
import _ from 'lodash';


class LandingPage extends Component {
  initialPortfolioLoad = true
  expandPortfolio = true
  constructor(props) {
    super(props);

    this.state = {
      onInitialLoad: false,

      activeLink: 'about',
    };
  }

  componentDidMount() {
    const ANIMATION_TIMEOUT = 50;

    requestAnimationFrame(() => {
      this.setState({ onInitialLoad: true });
    }, ANIMATION_TIMEOUT);
  }

  changeActiveContainer(activeC) {


    switch (activeC) {
      case 'portfolio':
        this.setState({
          activeLink: 'portfolio',
        });
        this.expandPortfolio = true;
        break;
      case 'about':
        this.setState({
          activeLink: 'about',
        });
        break;
      default:
        this.setState({
          activeLink: 'about',
        });
    }
  }
  renderSubSection(type) {
    if (type === 'about') {
      return <About />;
    }
    return this.renderPortfolio(type);
  }
  renderPortfolio(type) {
    const portfolio = this.props.portfolios;
    const portfolioItemClassNames = 'landing-page__portfolio__item  portfolio__item transition-border max-dimensions-is-screen';

    const portfolioItems = _.map(portfolio, item => (
      <div className={portfolioItemClassNames}>
        <a href={`portfolio/${item.href}`}>
          <img
            className="portfolio__item__image"
            alt={`${item.name}`}
            src={`https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-250.jpg`}
            srcSet={`https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-250.jpg 250w,
                https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-500.jpg 500w,
                https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-750.jpg 750w`}
            sizes="(max-width: 250px) 95vw, 250px"
          />
          <div className="portfolio__item__desc">
            <div className="portfolio__item__desc__title">
              <h4 className="is-animated">{item.name}</h4>
            </div>
            <div className="portfolio__item__desc__skills ">
              <h5 className="">{item.skills.reduce((acc, x) => (acc === null ? [x] : [acc, ' | ', x]), null)}</h5>
            </div>
          </div>
        </a>
      </div>
    ));

    return (
      <div className="portfolio portfolio--wrapped landing-page__portfolio justify-content-around">
        {portfolioItems}
      </div>

    );
  }

  renderHeader() {
    const { activeLink } = this.state;

    return (
      <div className="links links--landing-page">

        <a onClick={this.changeActiveContainer.bind(this, 'about')} className={activeLink === 'about' ? 'links__link is-active' : 'links__link is-inactive'}>
          <h4 className="links__header__text margins--remove-default">About</h4>
          <img className="links__header__icon" alt="link to about section" src={require('../assets/images/about.svg')} />
        </a>
        <h4 className="links__divide margins--remove-default">|</h4>
        <a onClick={this.changeActiveContainer.bind(this, 'portfolio')} className={activeLink === 'portfolio' ? 'links__link is-active' : 'links__link is-inactive'}>
          <h4 className="links__header__text margins--remove-default">portfolio</h4>
          <img className="links__header__icon" alt="link to portfoio section" src={require('../assets/images/portfolio.svg')} />
        </a>
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

function mapStateToProps(state) {
  return { portfolios: state.portfolios };
}

export default connect(mapStateToProps)(LandingPage);
// function mapStateToProps(state) {
//   return {portfolios: state.portfolios };
// }
// export default connect(mapStateToProps)(LandingPage);
