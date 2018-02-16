import React, { Component } from 'react';
import Header from './header/header';
import createHistory from 'history/createBrowserHistory'
import BankOfAmerica from './portfolio-pages/bank-of-america/bank-of-america';
import SunRun from './portfolio-pages/sunrun/sunrun';
import RiaPortal from './portfolio-pages/ria-portal/ria-portal';
import AutoPOOL from './portfolio-pages/autopool/autopool';
import BoonInvestments from './portfolio-pages/boon-investments/boon-investments';

import _ from 'lodash';
import './portfolio.scss';


class Portfolio extends Component {


  constructor(props) {
    super(props)
    this.handlePortfolioChange = this.handlePortfolioChange.bind(this);
    console.log(props.match.params.portfolioID)
    const selectedPortfolio = props.match.params.portfolioID ? props.match.params.portfolioID: "boon-investments-t"
    this.state = {
      'selectedPortfolio': selectedPortfolio,
      'nextPortfolio': this.navRefs[selectedPortfolio].nref,
      'previousPortfolio': this.navRefs[selectedPortfolio].pref
    }
  }

  history = createHistory()

  navRefs = {
    'bank-of-america': {
      pref: 'boon-investments-f',
      nref: 'sunrun'
    },
    'boon-investments-f': {
      pref: 'sunrun',
      nref: 'bank-of-america'
    },
    'sunrun': {
      pref: 'bank-of-america',
      nref: 'boon-investments-f'
    },
    'ria-portal': {
      pref: 'boon-investments-t',
      nref: 'autoPOOL'
    },
    'autoPOOL': {
      pref: 'ria-portal',
      nref: 'boon-investments-t'
    },
    'boon-investments-t': {
      pref: 'autoPOOL',
      nref: 'ria-portal'
    },
  }
  renderSelectedPortfolio() {
    console.log('state 2', this.state)
    const selectedPortfolio = this.state.selectedPortfolio;
    console.log('selected port', selectedPortfolio)
    switch(selectedPortfolio) {
      case "bank-of-america":
        return <BankOfAmerica />
        break
      case "ria-portal":
        return <RiaPortal />
        break
      case "boon-investments-t":
        return <BoonInvestments />
        break
        case "boon-investments-f":
          return <BoonInvestments />
          break
      case "sunrun":
        return <SunRun />
        break
      case "autoPOOL":
        return <AutoPOOL />
        break
    }
  }

  handlePortfolioChange(newPortfolio) {
    this.history.push({
      pathname: newPortfolio
    })
    this.setState({
      'nextPortfolio': this.navRefs[newPortfolio].nref,
      'previousPortfolio': this.navRefs[newPortfolio].pref,

      'selectedPortfolio': newPortfolio}, ()=>{
      })
  }

  renderPortfolioNavs() {

    return(
      <div className="portfolio__nav">
        <a onClick={this.handlePortfolioChange.bind(this, this.state.previousPortfolio)} className="portfolio__nav__link portfolio__nav__link--previous">
          <img className="portfolio__nav__chevron" src={require("../assets/images/left-chevron.png")}/>
          <h5 className="portfolio__nav__link__title">Previous Project</h5>
        </a>

        <a onClick={this.handlePortfolioChange.bind(this, this.state.nextPortfolio)} className="portfolio__nav__link portfolio__nav__link--next">
          <h5 className="portfolio__nav__link__title">Next Project</h5>
          <img className="portfolio__nav__chevron" src={require("../assets/images/right-chevron.png")}/>
        </a>
      </div>
    )
  }
  render() {
      return (
        <div className="portfolio">
          <Header onPortfolioChange={this.handlePortfolioChange}></Header>
          {this.renderSelectedPortfolio()}
          {this.renderPortfolioNavs()}
        </div>

      );

  }
}

export default Portfolio;

// portfolios = {
//   "technology": [
//     {
//     name: "Boon Investments",
//     image: "boon-investments.png",
//     skills: ["UI/UX", "Swift", "Python"],
//     href: this.techRefs[0],
//     nref: this.techRefs[1],
//     lref: this.techRefs[2],
//     },
//     {
//       name: "RIA Portal",
//       image: "auto-oms.png",
//       skills: ["UI/UX", "Angular", "AWS"],
//       href: "ria-portal"
//
//     },
//     {
//     name: "UberPOOL",
//     image: "boon-investments.png",
//     skills: ["UI/UX", "Swift", "App Engine" ],
//     href: "uberPOOL"
//     }],
//   "finance": [
//     {
//     name: "Bank of America",
//     image: "bank-of-america.png",
//     skills: ["Modeling", "Forecasting"],
//     href: "bank-of-america"
//     },
//     {
//       name: "SunRun",
//       image: "sunrun.png",
//       skills: ["FP&A", "IPO"],
//       href: "sunrun"
//     },
//     {
//     name: "Boon Investments",
//     image: "boon-investments.png",
//     skills: ["Investments", "B2B Sales"],
//     href: "boon-investments"
//     }]
// }
