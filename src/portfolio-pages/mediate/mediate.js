import React from 'react';
import {
  renderSkillsList,
  renderTimeline,
  renderSummary,
  renderBanner,
  renderProduct,
} from '../portfolio-page';
import './mediate.scss';

import banner400 from '../../assets/images/mediate-banner-400.jpg';
import banner800 from '../../assets/images/mediate-banner-800.jpg';
import banner1200 from '../../assets/images/mediate-banner-1200.jpg';
import banner1600 from '../../assets/images/mediate-banner-1600.jpg';

import screenshotOne200 from '../../assets/images/mediate-screenshot-one-200.jpg';
import screenshotOne400 from '../../assets/images/mediate-screenshot-one-400.jpg';
import screenshotOne600 from '../../assets/images/mediate-screenshot-one-600.jpg';
import screenshotTwo200 from '../../assets/images/mediate-screenshot-two-200.jpg';
import screenshotTwo400 from '../../assets/images/mediate-screenshot-two-400.jpg';
import screenshotTwo600 from '../../assets/images/mediate-screenshot-two-600.jpg';

import imgTD400 from '../../assets/images/mediate-timeline-desktop-400.jpg';
import imgTD800 from '../../assets/images/mediate-timeline-desktop-800.jpg';
import imgTD1600 from '../../assets/images/mediate-timeline-desktop-1600.jpg';
import imgTM400 from '../../assets/images/mediate-timeline-mobile-400.jpg';
import imgTM800 from '../../assets/images/mediate-timeline-mobile-800.jpg';
import imgTM1600 from '../../assets/images/mediate-timeline-mobile-1600.jpg';

const bannerImgSet = {
  banner400,
  banner800,
  banner1200,
  banner1600,
};

const timelineImgSet = {
  imgTD400,
  imgTD800,
  imgTD1600,
  imgTM400,
  imgTM800,
  imgTM1600,
};

function Mediate() {
  const summaryBody = "Mediate is a browser extension that lets you rate articles you have read so that you can keep track of journalists who write quality articles and stay away from those who don't.\n\nMediate's user interface was developed in Javascript using the React / Redux frameworks. On the back-end, Mediate uses Google's Firebase services, primarily Firebase's Firestore, Functions and Cloud Storage services.";
  const productInputs = [
    {
      caption: 'Take control of your news',
      description: 'Mediate lets you rate and track the news articles you read. After you have read a news article, you can rate it one to five stars based on its quality.\n\nMediate will then aggregate and store the rating by journalist in a database.',
      img: {
        alt: 'screenshot one for mediate',
        classNames: 'portfolio-page__product__portal-image',
        src: screenshotOne400,
        srcSet: `${screenshotOne200} 200w, ${screenshotOne400} 400w, ${screenshotOne600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
    {
      caption: 'Clients pick the companies\nWe optimize the portfolios',
      description: 'Whenever you visit an article written by a journalist you have read, Mediate will display the journalist\'s average rating next to their name.\n\nThis way, you can keep track of which journalists you like and do not like to read.',
      img: {
        alt: 'screenshot two for mediate',
        classNames: 'portfolio-page__product__portal-image',
        src: screenshotTwo400,
        srcSet: `${screenshotTwo200} 200w, ${screenshotTwo400} 400w, ${screenshotTwo600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
  ];
  const skillsDictionary = {
    Development: ['Javascript', 'HTML/CSS', 'React', 'Firebase'],
    Technology: ['Cloud Services', 'Database Architecture', 'Sketch'],
    General: ['Product Management', 'UI/UX Design', 'Browser Extensions'],
  };
  return (
    <div className="portfolio-page mediate">
      <div className="portfolio-page__body">
        {renderBanner(bannerImgSet, 'mediate')}
        {renderSummary(summaryBody)}
        {renderProduct(productInputs)}
        {renderTimeline('mediate', timelineImgSet)}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default Mediate;