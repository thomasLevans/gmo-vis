import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import ReactDOM, {findDOMNode} from 'react-dom';
import {List, Map} from 'immutable';
import {expect} from 'chai';

import Bar from '../src/components/Bar';

describe('Bar', () => {

  it('renders based on the props', () => {
    const props = {
      color: 'red',
      width: 10,
      height: 75,
      offset: 2,
      availableHeight: 200
    };

    const component = renderIntoDocument(
      <Bar props={props} />
    );

    const bar = scryRenderedDOMComponentsWithTag(component, 'rect');
    expect(bar.length).to.equal(1);
  });

});
