import React from 'react';
import map from 'lodash/map';
import moize from 'moize';
import './footer.scss';

function Footer() {
  const links = [
    { title: 'Email', href: 'mailto:borkjt9@gmail.com' },
    { title: 'LinkedIn', href: 'https://www.linkedin.com/in/john-borkowski-cfa-8533bb25/' },
    { title: 'Resume', href: 'https://johnborkowski.me/pdfs/resume-john-borkowski.pdf' },
    { title: 'Github', href: 'https://github.com/borkjt9' },
    { title: 'Angelist', href: 'https://angel.co/john-borkowski-1' },
  ];

  const renderLinks = map(links, link => (
    <span key={link.title} className="footer__links__link">
      <a
        className={`${link.title.toLowerCase()} footer__links__link__ref`}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.title}
      </a>
      <h5 className="footer__links__link__name">{link.title}</h5>
    </span>
  ));

  return (
    <div className="footer">
      <div className="footer__links">
        {renderLinks}
      </div>
    </div>
  );
}

const memoizedFooter = moize.react(Footer);

export default memoizedFooter;
