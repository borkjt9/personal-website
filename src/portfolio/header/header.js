import React, { Component } from 'react';
import Slider from 'react-slick'
import createHistory from 'history/createBrowserHistory'
import {connect} from 'react-redux';
import _ from 'lodash';
import './header.scss';
import Carousel from '../carousel/carousel';

class Header extends Component {
  history = createHistory()

  constructor(props){
    super(props);
    console.log('header props', this.props)
    this.state = {
      'portfolioShouldExpand': false,
      'initialLoad': true,
    }
  }

  workLabel = 'work';
  aboutLabel = 'about';

  expandPortfolio(portfolio, props) {
    var portfolioShouldExpand = true
    if (this.workLabel === 'work') {
      this.workLabel = 'close';
    } else {
      this.workLabel = 'work';
      portfolioShouldExpand = false;
    }

    this.props.onWorkToggle(portfolioShouldExpand)


    this.setState({
      initialLoad: false,
      'portfolioShouldExpand': portfolioShouldExpand,
    })

  }

  changePortfolioItem(selectedPortfolio) {

    this.props.onPortfolioChange(selectedPortfolio)
  }
  renderPortfolio() {
    var shouldExpand = false
    if (this.state.portfolioShouldExpand) {
      shouldExpand = true
    }
    const portfolio = this.props.portfolios;
    const portfolioClassNames = shouldExpand ? `portfolio portfolio--wrapped header__portfolio`: 'portfolio portfolio--wrapped header__portfolio';

    const portfolioItemClassNames = shouldExpand ? `transition-border portfolio__item header__portfolio__item is-expanding`: 'portfolio__item header__portfolio__item is-minimizing';
    const portfolioItemStyle = { border: 1, borderColor: "rgba(52,71,89,0.05)", borderStyle: "solid",  backgroundColor: "#FFFFFF", width: 175,  height:0, boxShadow: "2px 3px 3px rgba(52,71,89,0.15)",  }

    const portfolioItems = _.map(portfolio, item => {
      const imageStyle = {height: "90%", width: "90%", margin: "auto", marginLeft: "5%"}
      const descriptionStyle = {bottom: "4px", textAlign: "center", margin: "0px", marginLeft: "5px", width: "calc(100% - 5px)"}
      return (
        <div className={portfolioItemClassNames} style={portfolioItemStyle}>
          <a onClick={this.changePortfolioItem.bind(this, item.href)}>
          <img style={imageStyle} src={require(`../../assets/images/${item.image}`)}></img>
          <h5 className="portfolio__item__desc__title" style={descriptionStyle}>{item.name}</h5>
          </a>
        </div>
      )
    })

    if (!this.state.portfolioShouldExpand) {
      setTimeout(() => {
                  this.setState({
                  initialLoad: true
                })
              }, 501)
    }


    return (

      <div className={portfolioClassNames}>
        <Carousel  onPortfolioChange={this.props.onPortfolioChange} currentPortfolioIndex={this.props.currentPortfolioIndex} shouldExpand={shouldExpand}/>
        {/* {portfolioItems} */}
      </div>

    );


  }



  render() {
    const workClassName = `links__link ${this.workLabel}`;
    return (
      <div className="header">
        <div className="header__top-bar links">
          <a className="text__vert-middle header__home-link links__link" href="../home">
            <h4 className="margins--remove-default" >Home</h4>
          </a>
          <div className="text__vert-middle header__portfolio-links">
            <a className={workClassName} onClick={this.expandPortfolio.bind(this,"work")}>
              <h4 className="margins--remove-default">{this.workLabel}</h4>
            </a>
            {/* <h4 className="links__divide">|</h4>
            <a className='links__link' onClick={this.expandPortfolio.bind(this,"about")}>
              <h4 className="margins--remove-default">About</h4>
            </a> */}
          </div>
        </div>
        {this.state.initialLoad ? '': this.renderPortfolio()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {portfolios: state.portfolios };

}
export default connect(mapStateToProps)(Header);
