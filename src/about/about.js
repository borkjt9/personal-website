import React from 'react';
import './about.scss';
import headshot350 from '../assets/images/headshot-350.jpg';
import headshot700 from '../assets/images/headshot-700.jpg';
import headshot1050 from '../assets/images/headshot-1050.jpg';
import guinea350 from '../assets/images/guinea-350.jpg';
import guinea700 from '../assets/images/guinea-700.jpg';
import guinea1050 from '../assets/images/guinea-1050.jpg';
function About() {
  function renderWorkSection() {
    const workDesc = 'I am a product designer and front-end developer in the financial sector.\n\nI currently work as senior software engineer for Bloomberg, where I build trading blotters for the Bloomberg Terminal.\n\nI enjoy working on small, dynamic teams that build intuitive products to solve real problems for real people.';
    const imageCaption = 'My last professional headshot. Taken two years ago.\nA lot has changed.';

    return (
      <div className="about__section row-wrap">
        <div className="about__section__image">
          <img
            alt="My headshot"
            src={headshot350}
            srcSet={`${headshot350} 350w,
            ${headshot700} 700w,
            ${headshot1050} 1050w`}
            sizes="(max-width: 350px) 95vw, 350px"
          />
          <p className="about__section__image__desc">{imageCaption}</p>
        </div>
        <p className="about__section__desc">
          {workDesc}
        </p>
      </div>
    );
  }

  function renderHobbiesSection() {
    const hobbiesDesc = 'When not working, I spend my time reading and drinking large amounts of burnt coffee.\n\nIf I find myself with a week or more of uninterrupted time, I like to explore. Preferably to places with a high probability of getting lost.\n\nIn all things, Trust the Process.';
    const imageCaption = 'Performing a hunting dance on a recent trip to Guinea. This was my least awkward photo.';

    return (
      <div className="about__section row-wrap-reverse">
        <p className="about__section__desc">
          {hobbiesDesc}
        </p>
        <div className="about__section__image" >
          <img
            alt="Me dancing in Guinea, Africa"
            src={guinea350}
            srcSet={`${guinea350} 350w,
            ${guinea700} 700w,
            ${guinea1050} 1050w`}
            sizes="(max-width: 350px) 95vw, 350px"
          />
          <p className="about__section__image__desc">{imageCaption}</p>

        </div>

      </div>
    );
  }

  return (
    <div className="about">
      {renderWorkSection()}
      {renderHobbiesSection()}
    </div>
  );
}

export default About;
