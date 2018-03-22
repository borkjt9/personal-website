import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Header from '../header/header';

Enzyme.configure({ adapter: new Adapter() });

function changePortfolioItem(newPortfolio) {
  console.log('filler')
}
function onPortfolioToggle() {
  console.log('filler');
}
describe('header', () => {
  it('switches to about on click', () => {
    const component1 = shallow(
      <div>
        <Header
          changePortfolioItem={changePortfolioItem}
          onPortfolioToggle={onPortfolioToggle}
          currentPortfolioIndex={1}/>
      </div>);
  });
});
