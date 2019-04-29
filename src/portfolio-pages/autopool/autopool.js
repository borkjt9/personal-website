import React from 'react';
import {
  renderSkillsList,
  renderSummary,
  renderBanner,
  renderProduct,
} from '../portfolio-page';

import './autopool.scss';

import autopoolSetRide200 from '../../assets/images/autopool-set-ride-200.jpg';
import autopoolSetRide400 from '../../assets/images/autopool-set-ride-400.jpg';
import autopoolSetRide600 from '../../assets/images/autopool-set-ride-600.jpg';
import autopoolCreateAlert200 from '../../assets/images/autopool-create-alert-200.jpg';
import autopoolCreateAlert400 from '../../assets/images/autopool-create-alert-400.jpg';
import autopoolCreateAlert600 from '../../assets/images/autopool-create-alert-600.jpg';
import autopoolReceieveAlert200 from '../../assets/images/autopool-receive-alert-200.jpg';
import autopoolReceieveAlert400 from '../../assets/images/autopool-receive-alert-400.jpg';
import autopoolReceieveAlert600 from '../../assets/images/autopool-receive-alert-600.jpg';

import banner400 from '../../assets/images/autopool-banner-400.jpg';
import banner800 from '../../assets/images/autopool-banner-800.jpg';
import banner1200 from '../../assets/images/autopool-banner-1200.jpg';
import banner1600 from '../../assets/images/autopool-banner-1600.jpg';

const bannerImgSet = {
  banner400,
  banner800,
  banner1200,
  banner1600,
};

function AutoPOOL() {
  const summaryBody = "AutoPOOl was a fun iOS application I built to solve an incredibly significant painpoint in today’s society: the highly volatile prices of UberPOOL rides.\n\nAutoPOOL sends users automatic push notifications containing UberPOOL price updates at time intervals they set. Once the price is in the user’s desired range, Auto-POOL alerts the user with a fun pokemon-themed notifications.\n\nI developed AutoPOOL in Swift, and used Google's App Engine to schedule cron jobs and send push notifications.";

  const skillsDictionary = {
    Development: ['Swift', 'APIs'],
    Technology: ['Xcode', 'Firebase', 'App Engine', 'Sketch'],
  };

  const productInputs = [
    {
      caption: 'Born out of Pain',
      description: 'Through large amounts of very scientific research, UberPOOL prices were found to rise and fall upwards of 100% in very short periods of time.\n\nIt was reported from a reliable source (definitely not me) that a ride from San Mateo, CA to Mountain View, CA at 5:00pm would cost $25, and then not 5 minutes later cost only $11.50.',
      img: {
        alt: 'autopool screen that lets you set your destination and current location',
        className: 'autopool__product__iphone-image',
        src: autopoolSetRide400,
        srcSet: `${autopoolSetRide200} 200w, ${autopoolSetRide400} 400w, ${autopoolSetRide600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
    {
      caption: 'Set and Forget',
      description: "The huge swings in prices began to cause severe migraines in many UberPOOL users (again, not me).\n\nAutoPOOL solves this serious health risk by monitering UberPOOL prices so users don't have to.\n\nAutoPOOL sends users automatic price alerts at intervals they specify in fun pokemon-themed messages. Epidemic Averted.",
      img: {
        alt: 'autopool screen that creates your alert',
        className: 'autopool__product__iphone-image',
        src: autopoolCreateAlert400,
        srcSet: `${autopoolCreateAlert200} 200w, ${autopoolCreateAlert400} 400w, ${autopoolCreateAlert600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
    {
      caption: 'Wild UberPOOL was Caught!',
      description: "Once the UberPOOL price is in the user's desired range, the user will receive a notification with a special pokemon-themed catchphrase.\n\nThe user can then book an uber directly in the application.",
      img: {
        alt: 'iphone homescreen showing a push notification sent from autopool',
        classNames: 'autopool__product__iphone-image',
        src: autopoolReceieveAlert400,
        srcSet: `${autopoolReceieveAlert200} 200w, ${autopoolReceieveAlert400} 400w, ${autopoolReceieveAlert600} 600w`,
        sizes: '(max-width: 200px) 95vw, 200px',
      },
    },
  ];

  return (
    <div className="portfolio-page autopool">
      <div className="portfolio-page__body">
        {renderBanner(bannerImgSet, 'autopool')}
        {renderSummary(summaryBody)}
        {renderProduct(productInputs)}
        {renderSkillsList(skillsDictionary)}
      </div>
    </div>
  );
}

export default AutoPOOL;
