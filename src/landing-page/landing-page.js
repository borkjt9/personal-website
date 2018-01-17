import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Transition from 'react-transition-group/Transition';
import Portfolio from '../portfolio/portfolio';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

import './landing-page.css';
import _ from "lodash"
const duration = 4;

class LandingPage extends Component {

  portfolios = {
    "technology": [
      {
      name: "Boon Investments",
      image: "boon-investments.png",
      skills: ["UI/UX", "Swift", "Python"],
      href: "boon-investments-t",
      nref: "ria-portal",
      pref: "autoPOOL",
      },
      {
        name: "RIA Portal",
        image: "auto-oms.png",
        skills: ["UI/UX", "Angular", "AWS"],
        href: "ria-portal",
        nref: "autoPOOL",
        pref: "boon-investments-t",

      },
      {
      name: "AutoPOOL",
      image: "autopool.png",
      skills: ["UI/UX", "Swift", "App Engine" ],
      href: "autoPOOL",
      nref: "boon-investments-t",
      pref: "ria-portal",
      }],
    "finance": [
      {
      name: "Bank of America",
      image: "bank-of-america.png",
      skills: ["Modeling", "Forecasting"],
      href: "bank-of-america",
      nref: "sunrun",
      pref: "boon-investments-f",
      },
      {
        name: "SunRun",
        image: "sunrun.png",
        skills: ["FP&A", "IPO"],
        href: "sunrun",
        nref: "boon-investments-f",
        pref: "bank-of-america",
      },
      {
      name: "Boon Investments",
      image: "boon-investments.png",
      skills: ["Investments", "B2B Sales"],
      href: "boon-investments-f",
      nref: "bank-of-america",
      pref: "sunrun",
      }
    ]
  }
  initialPortfolioLoad = true
  expandTechnologyPortfolio = false
  expandFinancePortfolio = false
  constructor(props){
    super(props);
    this.state = {
      onInitialLoad: false,
      onRemoveName: true,
      activeLink: ""
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
    }
    if (onRemoveName) {
      this.setState(({ onRemoveName }) => ({
        onRemoveName: !onRemoveName
      }));
    }
  }

  renderPortfolio(type) {
    const portfolio = this.portfolios[type];
    var shouldExpand = 'is-expanded'
    if (this.initialPortfolioLoad) {
      shouldExpand = 'is-expanding'
      this.initialPortfolioLoad = false
    }
    const portfolioItemClassNames = `landing-page__portfolio__item ${shouldExpand}  portfolio__item transition-border max-dimensions-is-screen`;
    const portfolioItemStyle = { backgroundColor: "#FFFFFF", width: 0, height:0, boxShadow: "2px 2px 3px rgba(52,71,89,0.15)",  }

    const portfolioItems = _.map(portfolio, item => {
      const imageStyle = {height: "82%", width: "100%", margin: "auto"}
      return (
        <div className={portfolioItemClassNames} style={portfolioItemStyle}>
          <Link to={`portfolio/${item.href}`}>
          {/* <Link to={{
            pathname: '/portfolio',
            selectedPortfolio: item.href,
            nextPortfolio: item.nref,
            previousPortfolio: item.pref,
          }}> */}
          <img style={imageStyle} src={require(`../assets/images/${item.image}`)}></img>
          <div className="portfolio__item__title">
            <h4 className="is-animated">{item.name}</h4>
          </div>
          <div className="portfolio__item__skills ">
            <h5 >{item.skills.reduce((acc, x) => acc === null ? [x] : [acc, ' | ', x], null)}</h5>
          </div>
        </Link>
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
    const initialFadeIn = onInitialLoad ? 'links links--landing-page fade-in': 'links links--landing-page';
    const horizontalStyle = {"float": "left"}
    return (
      <div className="landing-page dimensions-is-screen vert-center">
        <div className="vert-center__child" >
          <div >
            <div className={fadeOutClass}>
              <h2 className="name">
                john borkowski
              </h2>
            </div>
                  <div className={initialFadeIn}>
                    <a onClick={this.changeActiveContainer.bind(this, "technology")} className={activeLink === 'technology' ? "links__link is-active" : "links__link is-inactive"}>
                      <h4 className="margins--remove-default">Technology</h4>
                    </a>
                    <h4 className="links__divide margins--remove-default">|</h4>
                    {/* <a onClick={this.changeActiveContainer.bind(this, "")} className={activeLink === 'applications'  ? "active-link link-2" : "inactive-link link-2"}>Applications</a>
                    <p className="divide">|</p> */}
                    <a onClick={this.changeActiveContainer.bind(this, "finance")} className={ activeLink === 'finance'  ? "links__link is-active" : "links__link is-inactive"}>
                      <h4 className="margins--remove-default">Finance</h4>
                    </a>
                  </div>
            {activeLink != '' ? this.renderPortfolio(activeLink) : ''}
            {/* {activeLink != '' ? this.renderFinancePortfolio((activeLink === 'finance')) : ''} */}

          </div>
        </div>

      </div>
    )
  }
}

export default LandingPage;

// renderFinancePortfolio(rendered) {
//   const portfolioNames = rendered ? "portfolio" : "portfolio minimize no-height";
//
//   const portfolioStyle = rendered ? {} : {width: 0};
//   const portfolioItemStyle = { backgroundColor: "#FFFFFF", width: 0, height:0, padding: 0, boxShadow: "2px 3px 3px rgba(52,71,89,0.15)",  }
//   console.log('on expand finance portfolio', this.expandFinancePortfolio)
//   console.log('finance port', this.initialPortfolioLoad && rendered)
//
//   var shouldMinimize = 'minimize'
//   if (this.initialPortfolioLoad && !rendered) {
//     shouldMinimize = ''
//     this.initialPortfolioLoad = false
//   }
//   const classNames = this.expandFinancePortfolio ? "expand portfolio__item" : `portfolio__item`
//
//   console.log('finance class names', classNames)
//   const portfolioItems = _.map(this.portfolios["finance"], item => {
//     console.log(item)
//     const imageStyle = {height: "82%", width: "100%", margin: "auto"}
//     return (
//       <div className={classNames} style={portfolioItemStyle}>
//         <a href={item.href}>
//         <img style={imageStyle} src={require(`../assets/images/${item.image}`)}></img>
//         <div className="portfolio__item-title">
//           <p>{item.name}</p>
//         </div>
//         <div className="portfolio__item-skills">
//           <h5>{item.skills.reduce((acc, x) => acc === null ? [x] : [acc, ' | ', x], null)}</h5>
//         </div>
//         </a>
//       </div>
//     )
//   })
//
//   return (
//       <div className={portfolioNames}>
//         {portfolioItems}
//       </div>
//
//   );
// }
//
//
// renderTechnologyPortfolio(rendered) {
//   const portfolioNames = rendered ? "portfolio" : "portfolio minimize";
//   console.log("technology names", portfolioNames)
//   const portfolioItemStyle = { backgroundColor: "#FFFFFF", width: 0, height:0, padding: 0, boxShadow: "2px 3px 3px rgba(52,71,89,0.15)",  }
//   console.log('on initial portfolio', this.expandPortfolio)
//   console.log('technology port', this.initialPortfolioLoad && rendered)
//   var shouldMinimize = 'minimize'
//   if (this.initialPortfolioLoad && !rendered) {
//     shouldMinimize = ''
//     this.initialPortfolioLoad = false
//   }
//   const classNames = this.expandTechnologyPortfolio ? "expand portfolio__item" : `portfolio__item`
//   console.log('class names', classNames)
//   const portfolioItems = _.map(this.portfolios["technology"], item => {
//     console.log(item)
//     const imageStyle = {height: "82%", width: "100%", margin: "auto"}
//
//     return (
//       <div className={classNames} style={portfolioItemStyle}>
//         <a href={item.href}>
//
//           <img classNames={classNames} style={imageStyle} src={require(`../assets/images/${item.image}`)}></img>
//           <div className="portfolio__item-title">
//             <p>{item.name}</p>
//           </div>
//           <div className="portfolio__item-skills">
//             <h5>{item.skills.reduce((acc, x) => acc === null ? [x] : [acc, ' | ', x], null)}</h5>
//             {/* _.map(item.skills, skill => {
//               return (
//                 <span>
//                   <h5>skill</h5>
//                 </span>
//
//               )
//             }) */}
//
//           </div>
//         </a>
//       </div>
//     )
//   })
//
//   return (
//       <div className={portfolioNames}>
//         {portfolioItems}
//       </div>
//
//   );
//
// }
