/*
* 6.14.2015
* Tom Evans
* Class for generating a d3 Bar graph
*/

'use strict';

var dependencies = [
  'd3'
];

define(dependencies, function(d3) {
  function BarGraph(data, props, svg) {
    var graph = this;
    graph.data = data || [];
    graph.props = props;
    graph.svg = svg;

    graph.x = d3.scale.ordinal()
      .domain(data.map(function(d) { return d.State; }))
      .rangeRoundBands([0, (props.width - props.margin.left - props.margin.right)], 0.1);

    graph.y = d3.scale.linear()
      .domain([0, 100])
      .range([(props.height - props.margin.top - props.margin.bottom), 0]);

    graph.fill = d3.scale.linear()
      .domain([0, 100])
      .range(['lightgray', 'red']);

    graph.xAxis = d3.svg.axis()
      .scale(graph.x)
      .orient('bottom');

    graph.yAxis = d3.svg.axis()
      .scale(graph.y)
      .orient('left');

    graph.svg.append('g')
      .attr('class', 'x axis')
      .attr('transform',
        'translate(0,' + (props.height - props.margin.top - props.margin.bottom) +')')
      .call(graph.xAxis)
      .selectAll('text')
      .attr('y', 0)
      .attr('x', -10)
      .attr('dy', '.35em')
      .attr('transform', 'rotate(-90)')
      .style('text-anchor', 'end');

    graph.svg.append('g')
      .attr('class', 'y axis')
      .call(graph.yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -45)
      .attr('dy', '.71em')
      .attr('id', 'yLabel')
      .style('text-anchor', 'end')
      .text('Percent Of All Corn Planted in ' + props.year);


    graph.bars = graph.svg.selectAll('rect')
      .data(graph.data)
      .enter()
      .append('rect');
  };

  BarGraph.prototype.propogateUpdate = function () {
    var graph = this;

    d3.selectAll('#yLabel').text('Percent Of All Corn Planted in ' + graph.props.year);

    graph.bars
      .on('mouseover', function(d) {
        var label = '<h4>'+d.State+'</h4><hr><h5>'+d[graph.props.year]+'%</h5>';

        graph.props.tooltip.transition()
          .duration(300)
          .style('opacity', 1);

        graph.props.tooltip.html(label)
          .attr('width', (label.length + 20) + 'px')
          .style('left', d3.event.pageX + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on('mouseout', function() {
        graph.props.tooltip.transition().duration(300).style('opacity', 0);
      })
      .transition()
      .duration(1500)
      .attr('x', function(d) { return graph.x(d.State); })
      .attr('y', function(d) { return graph.y(d[graph.props.year]); })
      .attr('width', graph.x.rangeBand())
      .attr('height', function(d) {
        return graph.props.height - graph.props.margin.top - graph.props.margin.bottom - graph.y(d[graph.props.year]); })
      .attr('fill', function(d) { return graph.fill(d[graph.props.year]); });
  };

  BarGraph.prototype.updateData = function (newData) {
    // body...
  };

  BarGraph.prototype.resize = function () {
    // body...
  };

  return BarGraph;
});
