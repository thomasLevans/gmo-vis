/*
* 1.14.2016
* Tom Evans
* Class for generating a d3 stacked bar graph
*/

'use strict';

var deps = [
  'd3'
];

define(deps, function(d3) {

  function StackedBarGraph(data, props) {

    var graph = this,
      n = data.length,
      s = data[0].length;

    graph.data = data || [];
    graph.props = props;

    graph.stack = d3.layout.stack();

    // Note that the data must be in the form of a top level array of length n
    // where n = the number of layers
    // and array[n] = an array of length s containing the series of data points for that layer
    // where s = the total length of the series
    graph.groups = graph.stack(data);

    console.log(graph.groups);

    graph.yGroupMax = d3.max(graph.groups, function(group) { return d3.max(group, function(d) { return d.y; }); });

    graph.x = d3.scale.ordinal()
      .domain(d3.range(s))
      .rangeRoundBands([0, props.width], .08);

    graph.y = d3.scale.linear()
      .domain([0, graph.yGroupMax])
      .range([props.height, 0]);

    graph.color = d3.scale.linear()
      .domain([0, graph.data.length - 1])
      .range(['#aad', '#556']);

    graph.xAxis = d3.svg.axis()
      .scale(graph.x)
      .tickSize(0)
      .tickPadding(6)
      .orient('bottom');

    graph.yAxis = d3.svg.axis()
      .scale(graph.y)
      .tickSize(0)
      .tickPadding(6)
      .orient('left');

    graph.svg = d3.select(graph.props.container)
      .append('svg')
      .attr('width', graph.props.width + graph.props.margin.left + graph.props.margin.right)
      .attr('height', graph.props.height + graph.props.margin.top + graph.props.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + props.margin.left + ',' + props.margin.top + ')');

    graph.group = graph.svg.selectAll('.group')
      .data(graph.groups)
      .enter()
      .append('g')
      .attr('class', 'group')
      .style('fill', function(d, i) { return graph.color(i); });

    graph.rect = graph.group.selectAll('rect')
      .data(function(d) { return d; })
      .enter()
      .append('rect')
      .attr('x', function(d, i, j) { return graph.x(d.x) + graph.x.rangeBand() / n * j; })
      .attr('width', graph.x.rangeBand() / n)
      .transition()
      .attr('y', function(d) { return graph.y(d.y); })
      .attr('height', function(d) { return graph.props.height - graph.y(d.y); });

    graph.svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + graph.props.height + ')')
      .call(graph.xAxis);

    graph.svg.append('g')
      .attr('class', 'y axis')
      // .attr('transform', 'translate(0,' + graph.props.height + ')')
      .call(graph.yAxis);
  }

  StackedBarGraph.prototype.propagateUpdate = function() {
    // body...
  };

  StackedBarGraph.prototype.updateData = function(newData) {
    // body...
  };

  StackedBarGraph.prototype.resize = function() {
    // body...
  };

  return StackedBarGraph;
});