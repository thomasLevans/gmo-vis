import React from 'react';
import d3 from 'd3';

import Bar from './Bar';

export default React.createClass({
  getDefaultProps: function() {
    return {
      title: '',
      data: []
    };
  },

  render: function() {
    const props = this.props;

    let yScale = d3.scale.linear()
      .domain([0, d3.max(this.props.data)])
      .range([0, this.props.height]);

    let xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);

    return (
      <g>
        {d3.map(this.props.data, (d, i) => {
          <Bar height={yScale(d)} width={xScale.rangeBand()}
            offset={xScale(i)} availableHeight={props.height}
            color={props.color} key={i} />
        })}
      </g>
    );
  }
});
