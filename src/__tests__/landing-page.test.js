import React from 'react';
// import Enzyme, { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils'; // ES6
//import {renderComponent} from '../test_helper';
// import { shallowToJson } from 'enzyme-to-json';
// import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import LandingPage from '../landing-page/landing-page';

// Enzyme.configure({ adapter: new Adapter() });

describe('Landing Page', () => {

  let component;
  let tree;
  let renderedPage;

  beforeEach(() => {
    component = renderer.create(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>

    )
    tree = component.toJSON()

    renderedPage = TestUtils.renderIntoDocument(
          <BrowserRouter>
            <LandingPage />
          </BrowserRouter>
        );

  });

  it('renders john borkowski', () => {
    const name_class = TestUtils.findRenderedDOMComponentWithClass(renderedPage, 'header__home-link__text')
    // const wrapper = shallow(name_class)
    expect(name_class.textContent).toEqual('john borkowski');
    // expect(component).toContain('john borkowski')
  });

  it('renders header', () => {

    const name_class = TestUtils.scryRenderedDOMComponentsWithClass(renderedPage, 'header')
    // const wrapper = shallow(name_class)
    expect(name_class.length).toEqual(1);
    // expect(component).toContain('john borkowski')
  });

  // it('renders correctly', () => {
  //
  //   expect(tree).toMatchSnapshot()
  // });
});

// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
//
// import { shallowToJson } from 'enzyme-to-json';
// import Adapter from 'enzyme-adapter-react-16';
//
// import App from '../jest_examples/app';
//
// Enzyme.configure({ adapter: new Adapter() });
//
// describe('App Jest Example', () => {
//   it('contains React text', () => {
//     const component = shallow(<App />);
//     expect(component.text()).toContain('React Simple Starter');
//     // expect(component).toContain('john borkowski')
//   });
//   it('should render correctly', () => {
//     const output = shallow(<App />);
//     expect(shallowToJson(output)).toMatchSnapshot();
//   });
// });
