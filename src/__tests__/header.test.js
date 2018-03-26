import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Header from '../header/header';

Enzyme.configure({ adapter: new Adapter() });

function selectSubSection() {
  //filler
}

function onPortfolioToggle() {
  //filler
}

describe('header', () => {

  let component;

  beforeEach(() => {
    component = shallow(
      <Header
        selectSubSection={selectSubSection}
        onPortfolioToggle={onPortfolioToggle}
        currentPortfolioIndex={0}/>
      );
  });

  it('portfolio expands/shrinks on click', () => {
    const buttons = component.find('button')
    buttons.forEach((button) => {
      if (button.text() === 'portfolio') {
        button.simulate('click')
        expect(component.state('carouselShouldExpand')).toBe(true);
        button.simulate('click')
        expect(component.state('carouselShouldExpand')).toBe(false);
      } else {
        component.setState({'carouselShouldExpand': true})
        button.simulate('click')
        expect(component.state('carouselShouldExpand')).toBe(false);
      }
    });
  });

  it('carousel resets after portfolio expands and shrinks', () => {
    component.setState({'portfolioShouldExpand': true, clearCarousel: true});
    const portfolioButton = component.findWhere(n => n.name() === 'button' && n.text() === 'portfolio');
    portfolioButton.simulate('click')
    expect(component.state('clearCarousel')).toBe(false)
  });
});
