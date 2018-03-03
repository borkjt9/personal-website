import React, { Component } from 'react';
import resumePDF from '../assets/pdfs/resume-john-borkowski.pdf';

import './footer.scss';

class Footer extends Component {
  render() {
    return (

      <div className="footer">
        <div className="footer-links">
          <span className="footer-link">
            <a className="mail footer-link__image" href="mailto:borkjt9@gmail.com" />
            <h5 className="footer-link__name">Email</h5>
          </span>
          <span className="footer-link">
            <a className="linkedin footer-link__image" href="https://www.linkedin.com/in/john-borkowski-cfa-8533bb25/" />
            <h5 className="footer-link__name">LinkedIn</h5>
          </span>
          <span className="footer-link">
            <a className="resume footer-link__image" href={resumePDF} target="_blank" />
            <h5 className="footer-link__name">Resume</h5>

          </span>
          <span className="footer-link">
            <a className="github footer-link__image" href="https://github.com/borkjt9" />
            <h5 className="footer-link__name">Github</h5>

          </span>
          <span className="footer-link">
            <a className="angel-list footer-link__image" href="https://angel.co/john-borkowski-1" />
            <h5 className="footer-link__name">Angelist</h5>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
