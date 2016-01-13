'use strict';

var deps = [
  'd3'
];

define(deps, function(d3) {
  var n = 4,
    m = 15,
    stack = d3.layout.stack(),
    layers = stack(d3.range(n).map(function() { return bumpLayer(m, 0.1); })),
    yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
    yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

  var margin = {top:40, right:10, bottom:20, left:10 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
    .domain(d3.range(m))
    .rangeRoundBounds([0, width], 0.8);

  var y = d3.scale.linear()
    .domain([0, yStackMax])
    .range([height, 0]);

  var color = d3.scale.linear()
    .domain([0, n-1])
    .range(['#aad', '#556']);

  var xAxis = d3.svg.axis()
    .scale(x)
    .tickSize(0)
    .tickPadding(6)
    .orient('bottom');

  var svg = d3.select('body').append('svg')
    .attr('width', width+margin.left+margin.right)
    .attr('height', height+margin.top+margin.bottom)
    .append('g')
    .attr('transform', 'translate('+margin.left+','+margin.top+')');

  var layer = svg.selectAll('.layer')
    .data(layers)
    .enter().append('g')
    .attr('class', 'layer')
    .style('fill', function(d, i) { return color(i); });

  var rect = d3.layer.selectAll('rect')
    .data(function(d) { return d; })
    .enter().append('rect')
    .attr('x', function(d) { return x(d.x); })
    .attr('y', height)
    .attr('width', x.rangeBand())
    .attr('height', 0);

  rect.transition()
    .delay(function(d, i) { return i * 10; })
    .attr('y', function(d) { return y(d.y0 + d.y); })
    .attr('height', function(d) { return y(d.y0) - y(d.y0 + d.y); });

  svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,'+height+')')
    .call(xAxis);
});

// google trends gmo key word query string :
// q=gmo%2C%20%2Fm%2F037mm%2C%20%2Fm%2F01fn1t%2C%20%2Fm%2F0n8m6%2C%20gmo%20foods&cmpt=q&tz=Etc%2FGMT%2B4