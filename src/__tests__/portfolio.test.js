import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Portfolio from '../portfolio/portfolio';
import portfolioArr from '../public-objects/portfolio-arr';

Enzyme.configure({'adapter': new Adapter()});

describe('portfolio', () => {

  let component;

  beforeEach(() => {
    component = shallow(<Portfolio />)
  });

  // it('scrolls to top on new portfolio', () => {
  //   const navButtons = component.find('button')
  //   //next nav button cycle
  //   const nextButton = navButtons.find('.portfolio__nav__link--next')
  //
  //   //moves to top on next
  //   nextButton.simulate('click');
  //
  //
  // });

  it('renders correct portfolio pages on next nav cycle', () => {
    const navButtons = component.find('button')

    //next nav button cycle
    const nextButton = navButtons.find('.portfolio__nav__link--next')
    for (var i = 0; i < portfolioArr.length; ++i) {
      nextButton.simulate('click');
      expect(component.find(portfolioArr[i]['component']).exists()).toBe(true);
    }

    //goes back to the first in the loop
    nextButton.simulate('click');
    expect(component.find(portfolioArr[0]['component']).exists()).toBe(true);
  });

  it('renders correct portfolioPages on prev nav cycles', () => {
    const navButtons = component.find('button')
    const prevButton = navButtons.find('.portfolio__nav__link--previous')

    //prev nav button cycle
    prevButton.simulate('click');
    expect(component.find(portfolioArr[0]['component']).exists()).toBe(true);

    for (var i = portfolioArr.length-1; i >= 0; --i) {
      prevButton.simulate('click');
      expect(component.find(portfolioArr[i]['component']).exists()).toBe(true);
    }
  });
})
