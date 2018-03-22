import React, { Component } from 'react';
import TestUtils from 'react-dom/test-utils'; // ES6
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import PortfolioItem from '../portfolio/portfolio-item/portfolio-item';
import portfolioArr from '../public-objects/portfolio-arr';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import map from 'lodash/map';

Enzyme.configure({ adapter: new Adapter() });

function changePortfolioItem(newPortfolio) {
  console.log('filler')
}

describe('Portfolio Item', () => {

  beforeEach(() => {

  });

  it('renders all portfolio items correctly - no carousel', () => {
    portfolioArr.forEach((item) => {
      portfolioArr.forEach((item) => {
        const component = shallow(<PortfolioItem
          changePortfolioItem={changePortfolioItem}
          key={item.name}
          shouldExpand
          item={item}
          isCarousel={false}
        />);
        const renderedTitle = component.find('.portfolio__item__desc__title');
        const expectedTitle = item.name;
        expect(renderedTitle.text()).toEqual(expectedTitle);

        const renderedSkills = component.find('.portfolio__item__desc__skills');
        const expectedSkills = item.skills.join(' | ');

        expect(renderedSkills.text()).toEqual(expectedSkills);

        const renderedImageSrc = component.find('.portfolio__item__image').prop('src');
        const expectedImageSrc = `https://johnborkowski.me/images/${item.image}-250.jpg`;
        expect(renderedImageSrc).toEqual(expectedImageSrc);
      });
    });
  });

  it('renders all portfolio items correctly - with carousel', () => {
    portfolioArr.forEach((item) => {
      const component = shallow(<PortfolioItem
        changePortfolioItem={changePortfolioItem}
        key={item.name}
        shouldExpand
        item={item}
        isCarousel
      />);
      const renderedTitle = component.text();
      const expectedTitle = item.name;
      expect(renderedTitle).toEqual(expectedTitle);

      const renderedSkills = component.find('.portfolio__item__desc__skills');
      expect(renderedSkills.exists()).toBe(false);

      const renderedImageSrc = component.find('.portfolio__item__image').prop('src');
      const expectedImageSrc = `https://johnborkowski.me/images/${item.image}-250.jpg`;
      expect(renderedImageSrc).toEqual(expectedImageSrc);
    });
  });
});
