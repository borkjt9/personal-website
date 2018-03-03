import React, { Component } from 'react';
import Slider from "react-slick";
import {connect} from 'react-redux';
import _ from 'lodash';
import './carousel.scss'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const imageStyle = {width: "100%", top:0, left:0, position: "absolute", opacity: 0.55};

  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
      >
        <img style={imageStyle}
          src="https://s3.amazonaws.com/jtb-personal-website/images/right-chevron-40.png"
          srcSet="https://s3.amazonaws.com/jtb-personal-website/images/right-chevron-20.png 20w,
          https://s3.amazonaws.com/jtb-personal-website/images/right-chevron-40.png 40w,
          https://s3.amazonaws.com/jtb-personal-website/images/right-chevron-60.png 60w"
          sizes="20px"
        />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const imageStyle = {width: "100%", top:0, left:0, position: "absolute", opacity: 0.55};
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
      >
      <img style={imageStyle}
        src="https://s3.amazonaws.com/jtb-personal-website/images/left-chevron-40.png"
        srcSet="https://s3.amazonaws.com/jtb-personal-website/images/left-chevron-20.png 20w,
        https://s3.amazonaws.com/jtb-personal-website/images/left-chevron-40.png 40w,
        https://s3.amazonaws.com/jtb-personal-website/images/left-chevron-60.png 60w"
        sizes="20px"
      />
    </div>
  );
}

class Carousel extends Component {
  constructor(props){
    super(props);

  }
  changePortfolioItem(selectedPortfolio) {

    this.props.onPortfolioChange(selectedPortfolio)

  }


  render() {
    console.log('carousel props', this.props)
    var settings = {
      dots: false,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 3,
      swipe: false,
      initialSlide: this.props.currentPortfolioIndex-1,
    };

    const portfolio = this.props.portfolios;
    var shouldExpand = false
    if (this.props.shouldExpand) {
      shouldExpand = true
    }
    const portfolioItemClassNames = shouldExpand ? `transition-border portfolio__item header__portfolio__item is-expanding`: 'portfolio__item header__portfolio__item is-minimizing';
    const portfolioItemStyle = { marginLeft: "calc(50% - 98.5px)", border: 1, borderColor: "rgba(52,71,89,0.05)", borderStyle: "solid",  backgroundColor: "#FFFFFF", width: 175,  height:0, boxShadow: "2px 3px 3px rgba(52,71,89,0.15)"}
    const portfolioItems = _.map(portfolio, item => {
      const imageStyle = {height: "90%", width: "90%", margin: "auto", marginLeft: "5%"}
      const descriptionStyle = {bottom: "4px", textAlign: "center", margin: "0px", marginLeft: "5px", width: "calc(100% - 5px)"}
      const slickSlideStyle = {minHeight:"0"}
      return (
        <div style={slickSlideStyle} >
          <div className={portfolioItemClassNames} style={portfolioItemStyle}>
            <a onClick={this.changePortfolioItem.bind(this, item.href)}>
            <img style={imageStyle}
                src={`https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-250.jpg`}
                srcSet={`https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-250.jpg 250w,
                https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-500.jpg 500w,
                https://s3.amazonaws.com/jtb-personal-website/images/${item.image}-750.jpg 750w`}
                sizes="160px"
              ></img>
            <h5 className="portfolio__item__desc__title" style={descriptionStyle}>{item.name}</h5>
            </a>
          </div>

        </div>
      )
    })
    console.log('rerendering slider')
    return (
        <Slider {...settings}>
          {portfolioItems}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>

          </div>
          <div>
            <h3>3</h3>

          </div>
          <div>
            <h3>4</h3>

          </div> */}
        </Slider>
    );
  }
}

function mapStateToProps(state) {
  return {portfolios: state.portfolios };

}
export default connect(mapStateToProps)(Carousel);
