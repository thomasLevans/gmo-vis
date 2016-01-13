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

  function StackedBarGraph(data, props, svg) {

    var graph = this;

    graph.data = data || [];
    graph.props = props;
    graph.svg = svg;

    graph.stack = d3.layout.stack();

    // Note that the data must be in the form of a top level array of length n
    // where n = the number of layers
    // and array[n] = an array of length m containing the series of data points for that layer
    // where m = the total length of the series
    graph.groups = graph.stack(data);

    graph.yGroupMax = d3.max(data, function(d) { return d3.max(d, function(d0) { return d0.y; }); });

    graph.x = d3.scale.ordinal()
      .domain(d3.range(data[0].length))
      .rangeRoundBands([0, props.width], .08);

    graph.y = d3.scale.linear()
      .domain([0, graph.yGroupMax])
      .range([props.height, 0]);



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