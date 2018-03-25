import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from '../about/about';

Enzyme.configure({ adapter: new Adapter() });

describe('about', () => {
  let component;

  beforeEach(() => {
    component = shallow(<About />);
  });

  it('filler', () => {
    // there's nothing really to test. it's a static page.
  });
});
