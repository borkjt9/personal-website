import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Portfolio from '../portfolio/portfolio';
import portfolioArr from '../public-objects/portfolio-arr';

Enzyme.configure({ adapter: new Adapter() });

describe('portfolio', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Portfolio />);
  });

  it('renders correct portfolio pages on next nav cycle', () => {
    const navButtons = component.find('button');

    // next nav button cycle
    const nextButton = navButtons.find('.portfolio__nav__link--next');
    for (let i = 0; i < portfolioArr.length; i += 1) {
      nextButton.simulate('click');
      expect(component.find(portfolioArr[i].component).exists()).toBe(true);
    }

    // goes back to the first in the loop
    nextButton.simulate('click');
    expect(component.find(portfolioArr[0].component).exists()).toBe(true);
  });

  it('renders correct portfolioPages on prev nav cycles', () => {
    const navButtons = component.find('button');
    const prevButton = navButtons.find('.portfolio__nav__link--previous');

    // prev nav button cycle
    prevButton.simulate('click');
    expect(component.find(portfolioArr[0].component).exists()).toBe(true);

    for (let i = portfolioArr.length - 1; i >= 0; i -= 1) {
      prevButton.simulate('click');
      expect(component.find(portfolioArr[i].component).exists()).toBe(true);
    }
  });
});
