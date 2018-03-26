import React from 'react';
import './about.scss';

function About() {
  function renderWorkSection() {
    const workDesc = 'I am a product designer and front-end developer in the financial sector.\n\nMost recently I was co-founder / CEO of Boon Investments, the first robo-advisor in the United States to accept international clients.\n\nI enjoy working on small, dynamic teams that build intuitive products to solve real problems for real people.';
    const imageCaption = 'My last professional headshot. Taken two years ago.\nA lot has changed.';

    return (
      <div className="about__section row-wrap">
        <div className="about__section__image">
          <img
            alt="My headshot"
            src="https://johnborkowski.me/images/headshot-700.jpg"
            srcSet="https://johnborkowski.me/images/headshot-350.jpg 350w,
            https://johnborkowski.me/images/headshot-700.jpg 700w,
            https://johnborkowski.me/images/headshot-1050.jpg 1050w"
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
            src="https://johnborkowski.me/images/guinea-700.jpg"
            srcSet="https://johnborkowski.me/images/guinea-350.jpg 350w,
            https://johnborkowski.me/images/guinea-700.jpg 700w,
            https://johnborkowski.me/images/guinea-1050.jpg 1050w"
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
