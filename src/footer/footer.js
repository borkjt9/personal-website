import React from 'react';
import map from 'lodash/map';
import './footer.scss';


function Footer() {

  const items = [
    {'name': 'Email', 'href': "mailto:borkjt9@gmail.com"},
    {'name': 'LinkedIn', 'href': "https://www.linkedin.com/in/john-borkowski-cfa-8533bb25/"},
    {'name': 'Resume', 'href': "https://johnborkowski.me/pdfs/resume-john-borkowski.pdf"},
    {'name': 'Github', 'href': "https://github.com/borkjt9"},
    {'name': 'Angelist', 'href': "https://angel.co/john-borkowski-1"}
  ]
  const renderedItems = map(items, item => (
    <span className="footer-link">
      <a className={`${item.name.toLowerCase()} footer-link__image`} href={item.href} target="_blank" rel="noopener noreferrer" />
      <h5 className="footer-link__name">{item.name}</h5>
    </span>
  ));
  return (
    <div className="footer">
      <div className="footer-links">
        {renderedItems}
      </div>
    </div>
  )
};

export default Footer;
