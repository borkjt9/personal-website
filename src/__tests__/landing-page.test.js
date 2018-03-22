import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '../landing-page/landing-page';
import Enzyme, { shallow, mount, simulate } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Landing Page', () => {
  let component;

  beforeEach(() => {
    component = mount(<BrowserRouter>
      <LandingPage />
                      </BrowserRouter>);
  });

  it('renders john borkowski', () => {
    const title = component.find('.header__home-link__text');
    expect(title.text()).toEqual('john borkowski');
  });

  it('renders correct header at start', () => {
    const header = component.find('.header .not-top-bar');
    expect(header.exists()).toBe(true);
  });

  it('renders correct header on scroll', () => {
    component.find('LandingPage').instance().setState({ scrollPositionY: 200 });
    component.update();
    expect(component.find('.header .is-top-bar').exists()).toBe(true);
    component.find('LandingPage').instance().setState({ scrollPositionY: 0 });
    component.update();
    expect(component.find('.header .is-top-bar').exists()).toBe(false);
  });

  it('switches to correct section on click', () => {
    const buttons = component.find('button');
    buttons.forEach((button) => {
      button.simulate('click');
      const portfolioSection = component.find('.portfolio');
      const aboutSection = component.find('.about');
      if (button.text() === 'Portfolio') {
        expect(portfolioSection.length).toEqual(1);
        expect(aboutSection.length).toEqual(0);
      } else {
        expect(portfolioSection.length).toEqual(0);
        expect(aboutSection.length).toEqual(1);
      }
    });
  });
});
