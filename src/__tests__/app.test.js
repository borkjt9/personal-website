import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import App from '../jest_examples/app';

Enzyme.configure({ adapter: new Adapter() });

describe('App Jest Example', () => {
  it('contains React text', () => {
    const component = shallow(<App />);
    expect(component.text()).toContain('React Simple Starter');
    // expect(component).toContain('john borkowski')
  });
  it('should render correctly', () => {
    const output = shallow(<App />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
