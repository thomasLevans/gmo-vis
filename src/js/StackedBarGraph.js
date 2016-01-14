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

    var graph = this;

    graph.data = data || [];
    graph.props = props;

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

    graph.color = d3.scale.linear()
      .domain([0, n - 1])
      .range(["#aad", "#556"]);

    graph.xAxis = d3.svg.axis()
      .scale(x)
      .tickSize(0)
      .tickPadding(6)
      .orient("bottom");

    graph.svg = d3.select(graph.props.container)
      .append("svg")
      .attr("width", graph.props.width + graph.props.margin.left + graph.props.margin.right)
      .attr("height", graph.props.height + graph.props.margin.top + graph.props.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + props.margin.left + "," + props.margin.top + ")");

    graph.group = svg.selectAll(".group")
      .data(graph.groups)
      .enter()
      .append("g")
      .attr("class", "group")
      .style("fill", function(d, i) { return graph.color(i); });

    graph.rect = graph.group.selectAll("rect")
      .data(function(d) { return d; })
      .enter()
      .append("rect")
      .attr("x", function(d) { return graph.x(d.x); })
      .attr("y", graph.props.height)
      .attr("width", graph.x.rangeBand())
      .attr("height", 0);

    graph.rect.transition()
      .delay(function(d, i) { return i * 10; })
      .attr("y", function(d) { return graph.y(d.y0 + d.y); })
      .attr("height", function(d) { return graph.y(d.y0) - graph.y(d.y0 + d.y); });

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + graph.props.height + ")")
      .call(graph.xAxis);
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