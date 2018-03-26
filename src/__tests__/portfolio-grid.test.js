import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PortfolioGrid from '../portfolio/portfolio-grid/portfolio-grid';
import portfolioArr from '../public-objects/portfolio-arr';

Enzyme.configure({ adapter: new Adapter() });

function selectPortfolioItem() {
  // console.log('filler');
}

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PortfolioGrid selectPortfolioItem={selectPortfolioItem} />);
});

describe('PortfolioGrid', () => {
  it('includes at least 1 portfolio item', () => {
    expect(wrapper.find('PortfolioItem').exists()).toBe(true);
  });

  it('includes the correct number of portfolio items', () => {
    expect(wrapper.find('PortfolioItem')).toHaveLength(portfolioArr.length);
  });

  it('includes all the portfolio items', () => {
    const renderedItemNames = wrapper.find('PortfolioItem');
    renderedItemNames.forEach((item, i) => {
      expect(item.key()).toEqual(portfolioArr[i].name);
    });
  });
});
