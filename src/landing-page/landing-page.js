import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import {connect} from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Transition from 'react-transition-group/Transition';
import Portfolio from '../portfolio/portfolio';
import About from '../about/about';
import Footer from '../footer/footer';
import {connect} from 'react-redux';
import './landing-page.scss';
import _ from "lodash"
const duration = 4;

class LandingPage extends Component {

  initialPortfolioLoad = true
  expandTechnologyPortfolio = true
  expandFinancePortfolio = false
  constructor(props){
    super(props);

    this.state = {
      onInitialLoad: false,
      onRemoveName: true,
      activeLink: "technology"
    }
  }

  componentDidMount() {

    const ANIMATION_TIMEOUT = 50;

    requestAnimationFrame(() => {
      this.setState({onInitialLoad: true});
    }, ANIMATION_TIMEOUT)
  }

  changeActiveContainer(activeC) {
    const { onRemoveName } = this.state


    switch(activeC) {
      case "technology":
        this.setState({
          activeLink: "technology"
        });
        this.expandTechnologyPortfolio = true
        this.expandFinancePortfolio = false

        break
      case "finance":
        this.setState({
          activeLink: "finance"
        });
        this.expandTechnologyPortfolio = false

        this.expandFinancePortfolio = true

        break
      case "about":
        this.setState({
          activeLink: "about"
        });
        this.expandTechnologyPortfolio = false

        this.expandFinancePortfolio = false

        break
    }
    // if (onRemoveName) {
    //   this.setState(({ onRemoveName }) => ({
    //     onRemoveName: !onRemoveName
    //   }));
    // }
  }
  renderSubSection(type) {
    if (type === 'about') {
      return <About />
    } else {
      return this.renderPortfolio(type)
    }
  }
  renderPortfolio(type) {
    const portfolio = this.props.portfolios[type];
    var shouldExpand = 'is-expanded'
    // if (this.initialPortfolioLoad) {
    //   shouldExpand = 'is-expanding'
    //   this.initialPortfolioLoad = false
    // }
    const portfolioItemClassNames = `landing-page__portfolio__item ${shouldExpand}  portfolio__item transition-border max-dimensions-is-screen`;
    const portfolioItemStyle = { backgroundColor: "#FFFFFF", width: 0, height:0, boxShadow: "2px 2px 3px rgba(52,71,89,0.15)",  }

    const portfolioItems = _.map(portfolio, item => {
      const imageStyle = {height: "82%", width: "100%", margin: "auto"}

      return (
        <div className={portfolioItemClassNames} style={portfolioItemStyle}>
            <a href={`portfolio/${item.href}`}>
            {/* <Link to={{
              pathname: '/portfolio',
              selectedPortfolio: item.href,
              nextPortfolio: item.nref,
              previousPortfolio: item.pref,
            }}> */}
            <img style={imageStyle} src={require(`../assets/images/${item.image}`)}></img>
            <div className="portfolio__item__desc">
            <div className="portfolio__item__desc__title">
              <h4 className="is-animated">{item.name}</h4>
            </div>
            <div className="portfolio__item__desc__skills ">
              <h5 className="">{item.skills.reduce((acc, x) => acc === null ? [x] : [acc, ' | ', x], null)}</h5>
            </div>
            </div>
          </a>
        </div>
      )
    })

    return (
        <div className="portfolio portfolio--wrapped landing-page__portfolio justify-content-around">
          {portfolioItems}
        </div>

    );

  }

  render() {
    const { onInitialLoad } = this.state;
    const { onRemoveName } = this.state;
    const { activeLink } = this.state;
    const {onInitialPortfolio } = this.state;

    const fadeOutClass = !onRemoveName ? 'fade-out' : ''
    const initialFadeIn = onInitialLoad ? 'fade-in': '';//'links links--landing-page fade-in': 'links links--landing-page';
    const horizontalStyle = {"float": "left"}

    return (
      <div className="landing-page width-is-screen vert-center">
        <div className="" >
          <div >
            <div>
              <h2 className="name">
                john borkowski
              </h2>
            </div>
                  <div className = "links links--landing-page">
                    <a onClick={this.changeActiveContainer.bind(this, "technology")} className={activeLink === 'technology' ? "links__link is-active" : "links__link is-inactive"}>
                      <h4 className="margins--remove-default">Work</h4>
                    </a>
                    {/* <h4 className="links__divide margins--remove-default">|</h4> */}
                    {/* <a onClick={this.changeActiveContainer.bind(this, "")} className={activeLink === 'applications'  ? "active-link link-2" : "inactive-link link-2"}>Applications</a>
                    <p className="divide">|</p> */}
                    {/* <a onClick={this.changeActiveContainer.bind(this, "finance")} className={ activeLink === 'finance'  ? "links__link is-active" : "links__link is-inactive"}>
                      <h4 className="margins--remove-default">Finance</h4>
                    </a> */}
                    <h4 className="links__divide margins--remove-default">|</h4>
                    <a onClick={this.changeActiveContainer.bind(this, "about")} className={ activeLink === 'about'  ? "links__link is-active" : "links__link is-inactive"}>
                      <h4 className="margins--remove-default">About</h4>
                    </a>
                  </div>

            {activeLink != ('') ? this.renderSubSection(activeLink) : ''}
          </div>
          <Footer />

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {portfolios: state.portfolios };

}

export default connect(mapStateToProps)(LandingPage);
// function mapStateToProps(state) {
//   return {portfolios: state.portfolios };
// }
// export default connect(mapStateToProps)(LandingPage);
