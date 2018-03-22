import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import ReactDom, { TestUtils } from 'react-dom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

const { JSDOM } = jsdom;
// Set up testing environment to rul like a browser in the command line
global.document = new JSDOM('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react className
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass {...props} />);

  return $(ReactDom.findDOMNode(componentInstance)); // produces HTML
}

// Build helper for simulating events
$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// Set up chai jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
