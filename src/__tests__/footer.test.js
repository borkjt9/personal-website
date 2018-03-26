import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../footer/footer';

Enzyme.configure({ adapter: new Adapter() });

const items = [
  { name: 'Email', href: 'mailto:borkjt9@gmail.com' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/john-borkowski-cfa-8533bb25/' },
  { name: 'Resume', href: 'https://johnborkowski.me/pdfs/resume-john-borkowski.pdf' },
  { name: 'Github', href: 'https://github.com/borkjt9' },
  { name: 'Angelist', href: 'https://angel.co/john-borkowski-1' },
];

describe('footer', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Footer />);
  });

  it('renders all items', () => {
    items.forEach((item) => {
      const componentSlice = (
        <span className="footer-link">
          <a
            className={`${item.name.toLowerCase()} footer-link__image`}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
          <h5 className="footer-link__name">{item.name}</h5>
        </span>
      );
      component.contains(componentSlice);
    });

    it('item images change on hover', () => {

    });
  });
});
