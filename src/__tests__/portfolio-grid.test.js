import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import PortfolioGrid from '../portfolio/portfolio-grid/portfolio-grid';
import renderer from 'react-test-renderer';
import portfolioArr from '../public-objects/portfolio-arr';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({'adapter': new Adapter() });

function changePortfolioItem() {
  console.log('filler')
}

let wrapper;
let renderedPage;
beforeEach(()=> {
  wrapper = shallow(<PortfolioGrid changePortfolioItem={changePortfolioItem} />)

  renderedPage = TestUtils.renderIntoDocument(
        <PortfolioGrid changePortfolioItem={changePortfolioItem} />
      );


})
describe('PortfolioGrid', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PortfolioGrid
      changePortfolioItem={changePortfolioItem}
    />, div);
  });

  it("includes at least 1 portfolio item", () => {
      expect(wrapper.find("PortfolioItem").exists()).toBe(true);
  });

  it("includes the correct number of portfolio items", () => {
    expect(wrapper.find("PortfolioItem")).toHaveLength(portfolioArr.length);

  });

  it("includes all the portfolio items", () => {
    let portfolioItemNames = [];
    portfolioArr.forEach(item => {
      portfolioItemNames.push(item.name)

    })

    const renderedItems = TestUtils.scryRenderedDOMComponentsWithClass(renderedPage, 'portfolio__item__desc__title')
    renderedItems.forEach((item, i) => {
      expect(item.textContent).toEqual(portfolioItemNames[i])
    });

    // const renderedNames = wrapper.find("portfolio__item__desc__title").forEach(item => {
    //   expect(item.textContent).toEqual("Boon Investments")
    //   //console.log('item', item.find("Boon Investments").toEqual("Boon Investments"))
    // })
    // console.log('rendered names: ', renderedNames);


  });

  it('renders correctly', () => {
    const component = renderer.create(
      <PortfolioGrid
        changePortfolioItem={changePortfolioItem}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})
