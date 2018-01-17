import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory'

import _ from 'lodash';
import './header.scss';

class Header extends Component {
  history = createHistory()

  portfolios = {
    "technology": [
      {
      name: "Boon Investments",
      image: "boon-investments.png",
      skills: ["UI/UX", "Swift", "Python"],
      href: "boon-investments-t"
      },
      {
        name: "RIA Portal",
        image: "auto-oms.png",
        skills: ["UI/UX", "Angular", "AWS"],
        href: "ria-portal"

      },
      {
      name: "AutoPOOL",
      image: "autopool.png",
      skills: ["UI/UX", "Swift", "App Engine" ],
      href: "autoPOOL"
      }],
    "finance": [
      {
      name: "Bank of America",
      image: "bank-of-america.png",
      skills: ["Modeling", "Forecasting"],
      href: "bank-of-america"
      },
      {
        name: "SunRun",
        image: "sunrun.png",
        skills: ["FP&A", "IPO"],
        href: "sunrun"
      },
      {
      name: "Boon Investments",
      image: "boon-investments.png",
      skills: ["Investments", "B2B Sales"],
      href: "boon-investments-f"
      }]
    }

  constructor(props){
    super(props);
    this.state = {
      'portfolioShouldExpand': false,
      'portfolioToExpand': ''
    }

  }

  technologyLabel = 'technology';
  financeLabel = 'finance';

  expandPortfolio(portfolio, props) {
    var portfolioShouldExpand = true
    if (portfolio === 'finance' && this.financeLabel === 'finance') {
        this.financeLabel = 'close';
        this.technologyLabel = 'technology';
    } else if (portfolio === 'technology' && this.technologyLabel === 'technology') {
      this.financeLabel = 'finance';
      this.technologyLabel = 'close';
    } else {
      if (this.technologyLabel === 'close') {
        this.technologyLabel = 'technology';
        portfolioShouldExpand = false;
      } else {
        this.financeLabel = 'finance';
        portfolioShouldExpand = false;
      }
    }
    this.setState({
      'portfolioShouldExpand': portfolioShouldExpand,
      'portfolioToExpand': portfolio
    })
  }

  changePortfolioItem(selectedPortfolio) {

    console.log(this.history)
    this.props.onPortfolioChange(selectedPortfolio)
  }
  renderPortfolio(type) {
    var shouldExpand = true

    if (!this.state.portfolioShouldExpand) {
      shouldExpand = false
    }
    const portfolio = this.portfolios[type];
    const portfolioClassNames = shouldExpand ? `expand-portfolio portfolio justify-content-around portfolio--wrapped header__portfolio`: 'minimize-portfolio portfolio justify-content-around portfolio--wrapped header__portfolio';

    const portfolioItemClassNames = shouldExpand ? `transition-border portfolio__item header__portfolio__item is-expanding`: 'portfolio__item header__portfolio__item is-minimizing';
    const portfolioItemStyle = { backgroundColor: "#FFFFFF", width: 150,  height:0, boxShadow: "2px 3px 3px rgba(52,71,89,0.15)",  }

    const portfolioItems = _.map(portfolio, item => {
      const imageStyle = {height: "100%", width: "100%", margin: "auto"}
      return (
        <div className={portfolioItemClassNames} style={portfolioItemStyle}>
          <a onClick={this.changePortfolioItem.bind(this, item.href)}>
          <img style={imageStyle} src={require(`../../assets/images/${item.image}`)}></img>
          </a>
        </div>
      )
    })

    return (
        <div className={portfolioClassNames}>
          {portfolioItems}
        </div>

    );


  }



  render() {
    const techClassName = `links__link ${this.technologyLabel}`;
    const financeClassName = `links__link ${this.financeLabel}`;
    return (
      <div className="header">
        <div className="header__top-bar links">
          <a className="text__vert-middle header__home-link links__link" href="../home">
            <h4 className="margins--remove-default" >Home</h4>
          </a>
          <div className="text__vert-middle header__portfolio-links">
            <a className={techClassName} onClick={this.expandPortfolio.bind(this,"technology")}>
              <h4 className="margins--remove-default">{this.technologyLabel}</h4>
            </a>
            <h4 className="links__divide">|</h4>
            <a className={financeClassName} onClick={this.expandPortfolio.bind(this,"finance")}>
              <h4 className="margins--remove-default">{this.financeLabel}</h4>
            </a>
          </div>
        </div>
        {(this.state.portfolioToExpand != '') ? this.renderPortfolio(this.state.portfolioToExpand) : ''}

      </div>
    )
  }
}

export default Header;
