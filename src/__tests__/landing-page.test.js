import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import LandingPage from '../landing-page/landing-page';

Enzyme.configure({ adapter: new Adapter() });

describe('Landing Page', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<LandingPage />);
    expect(shallowToJson(component)).toMatchSnapshot();
    // expect(component).toContain('john borkowski')
  });
  it('should render correctly', () => {
    const output = shallow(<LandingPage />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
