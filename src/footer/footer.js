import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer-links">
      <span className="footer-link">
        <a className="mail footer-link__image" href="mailto:borkjt9@gmail.com">Mail</a>
        <h5 className="footer-link__name">Email</h5>
      </span>
      <span className="footer-link">
        <a className="linkedin footer-link__image" href="https://www.linkedin.com/in/john-borkowski-cfa-8533bb25/">LinkedIn</a>
        <h5 className="footer-link__name">LinkedIn</h5>
      </span>
      <span className="footer-link">
        <a className="resume footer-link__image" href="https://johnborkowski.me/pdfs/resume-john-borkowski.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <h5 className="footer-link__name">Resume</h5>
      </span>
      <span className="footer-link">
        <a className="github footer-link__image" href="https://github.com/borkjt9">Github</a>
        <h5 className="footer-link__name">Github</h5>
      </span>
      <span className="footer-link">
        <a className="angel-list footer-link__image" href="https://angel.co/john-borkowski-1">Angel List</a>
        <h5 className="footer-link__name">Angelist</h5>
      </span>
    </div>
  </div>
);

export default Footer;
