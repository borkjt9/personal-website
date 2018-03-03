import React, {Component} from 'react';
import Footer from '../footer/footer';
import './about.scss';

class About extends Component {
  professionalDesc = "I am a product designer and front-end developer in the financial sector.\n\nMost recently I was co-founder / CEO of Boon Investments, the first robo-advisor in the United States to accept international clients.\n\nI enjoy working on small, dynamic teams that build intuitive products to solve real problems for real people."


  funDesc = "When not working, I spend my time reading and drinking large amounts of burnt coffee.\n\nIf I find myself with a week or more of uninterrupted time, I like to explore. Preferably to places with a high probability of getting lost.\n\nIn all things, Trust the Process."

  renderProfessional() {
    const imageWidth = {"width": "100%"}
    const imageDescription = "My last professional headshot. Taken two years ago.\nA lot has changed.";

    return (
      <div className="about__section row-wrap">
        <div className="about__section__image">
          <img style={imageWidth} src="https://s3.amazonaws.com/jtb-personal-website/images/headshot-700.jpg"
            srcSet="https://s3.amazonaws.com/jtb-personal-website/images/headshot-350.jpg 350w,
            https://s3.amazonaws.com/jtb-personal-website/images/headshot-700.jpg 700w,
            https://s3.amazonaws.com/jtb-personal-website/images/headshot-1050.jpg 1050w"
            sizes="(max-width: 350px) 95vw, 350px"
          />
        <p className="about__section__image__desc">{imageDescription}</p>

        </div>
        <p className="about__section__desc">
          {this.professionalDesc}
        </p>

      </div>
    )
  }

  renderFun() {
    const imageWidth = {"width": "100%"}
    const imageDescription = "Performing a hunting dance on a recent trip to Guinea. This was my least awkward photo.";


    return(
      <div className="about__section row-wrap-reverse">
        <p className="about__section__desc">
          {this.funDesc}
        </p>
        <div className="about__section__image" >
          <img style={imageWidth} src="https://s3.amazonaws.com/jtb-personal-website/images/guinea-700.jpg"
            srcSet="https://s3.amazonaws.com/jtb-personal-website/images/guinea-350.jpg 350w,
            https://s3.amazonaws.com/jtb-personal-website/images/guinea-700.jpg 700w,
            https://s3.amazonaws.com/jtb-personal-website/images/guinea-1050.jpg 1050w"
            sizes="(max-width: 350px) 95vw, 350px"
          />
          <p className="about__section__image__desc">{imageDescription}</p>

        </div>

      </div>
    )
  }

  render() {
    return (
      <div className="about">

        {this.renderProfessional()}
        {this.renderFun()}
      </div>
    )
  }
}

export default About
