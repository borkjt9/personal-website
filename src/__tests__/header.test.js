import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Header from '../header/header';

Enzyme.configure({ adapter: new Adapter() });

function changePortfolioItem(newPortfolio) {
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
        changePortfolioItem={changePortfolioItem}
        onPortfolioToggle={onPortfolioToggle}
        currentPortfolioIndex={0}/>
      );
  });

  it('portfolio expands/shrinks on click', () => {
    const buttons = component.find('button')
    buttons.forEach((button) => {
      if (button.text() === 'portfolio') {
        button.simulate('click')
        expect(component.state('portfolioShouldExpand')).toBe(true);
        button.simulate('click')
        expect(component.state('portfolioShouldExpand')).toBe(false);
      } else {
        component.setState({'portfolioShouldExpand': true})
        button.simulate('click')
        expect(component.state('portfolioShouldExpand')).toBe(false);
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
