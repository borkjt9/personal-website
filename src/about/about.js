import React, {Component} from 'react';
import Footer from '../footer/footer';
import './about.scss';

class About extends Component {
  professionalDesc = "I am a product designer and developer in the financial space. I have worked for both Fortune 500 companies and startups.\n\nI began my career as an analyst for Bank of America before moving out to San Francisco, where I worked on the corporate finance team for Sunrun in preparation of their IPO. Most recently I was co-founder / CEO of Boon Investments, the first robo-advisor in the United States to accept international clients.\n\nI enjoy working on small, dynamic teams that build products to solve real problems for real people."


  funDesc = "When not working, I mainly spend my time reading and drinking large amounts of slightly burnt coffee. I tend to read books that end up becoming HBO series in 2 - 5 years.\n\nWhen I am stumble upon a week or more of uninterrupted time, I like to travel. Preferably to places with a high probability of getting lost.\n\nTrust the Process."

  renderProfessional() {
    const imageWidth = {"width": "100%"}
    const imageDescription = "My last professional headshot. Two years ago.\nA lot has changed.";

    return (
      <div className="about__section">
        <div className="about__section__image">
        <img  style={imageWidth} src={require('../assets/images/headshot.png')}/>
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
      <div className="about__section">
        <p className="about__section__desc">
          {this.funDesc}
        </p>
        <div className="about__section__image" >
          <img style={imageWidth} src={require('../assets/images/guinea.png')}/>
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
