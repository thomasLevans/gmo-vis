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

import DataSeries from '../src/components/DataSeries';

describe('DataSeries', () => {

  it('renders a Bar for every datum', () => {
    const props = {
      color: 'red',
      height: 200,
      title: '',
      data: [
        84,23,67,13,17,92,48
      ]
    };

    const component = renderIntoDocument(
      <DataSeries props={props} />
    );

    const bars = scryRenderedDOMComponentsWithTag(component, 'rect');
    expect(bars.length).to.equal(7);
  });

});
