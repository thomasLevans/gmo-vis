/*
*
*
*
*/

'use strict';

var dependencies = [
  'd3',
  'BarGraph'
];

define(dependencies, function(d3, BarGraph) {
  var properties = {
    width : 600,   // make width and height dynamic to client!
    height : 500,
    margin : {right: 50, left: 50, top: 50, bottom: 100},
    year : '2000',
    tooltip : d3.select('body')
      .append('div')
      .attr('class', 'tooltip')
      .attr('opacity', 0)
  },
  graph = [];

  var btOnly = d3.select('#bt-only')
    .attr('width', properties.width)
    .attr('height', properties.height)
    .append('g')
    .attr('transform', 'translate(' + properties.margin.left + ',' + properties.margin.top + ')');

  var herbicideOnly = d3.select('#herbicide-only')
    .attr('width', properties.width)
    .attr('height', properties.height)
    .append('g')
    .attr('transform', 'translate(' + properties.margin.left + ',' + properties.margin.top + ')');

  var stackedGene = d3.select('#stacked-gene')
    .attr('width', properties.width)
    .attr('height', properties.height)
    .append('g')
    .attr('transform', 'translate(' + properties.margin.left + ',' + properties.margin.top + ')');

  var allGE = d3.select('#all-ge')
    .attr('width', properties.width)
    .attr('height', properties.height)
    .append('g')
    .attr('transform', 'translate(' + properties.margin.left + ',' + properties.margin.top + ')');


  d3.csv('../dat/bt-only.csv', function(error, csv) {
    if (error) {
      console.error(error);
    }

    // chart stuff
    graph[0] = new BarGraph(csv, properties, btOnly);
    graph[0].propogateUpdate();
  });

  d3.csv('../dat/herbicide-only.csv', function(error, csv) {
    if (error) {
      console.error(error);
    }

    graph[1] = new BarGraph(csv, properties, herbicideOnly);
    graph[1].propogateUpdate();
  });

  d3.csv('../dat/stacked-gene.csv', function(error, csv) {
    if (error) {
      console.error(error);
    }

    graph[2] = new BarGraph(csv, properties, stackedGene);
    graph[2].propogateUpdate();
  });

  d3.csv('../dat/all-ge.csv', function(error, csv) {
    if (error) {
      console.error(error);
    }

    graph[3] = new BarGraph(csv, properties, allGE);
    graph[3].propogateUpdate();
  });

  setInterval(transition, 2000);

  function transition() {
    if (properties.year != 2014) {
      properties.year++;
    } else {
      properties.year = 2000;
    }

    graph[0].propogateUpdate();
    graph[1].propogateUpdate();
    graph[2].propogateUpdate();
    graph[3].propogateUpdate();

    // graph.forEach(function(g) {
    //   g.propogateUpdate();
    // });
  };
});
