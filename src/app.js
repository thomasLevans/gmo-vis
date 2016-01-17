/*
*
*
*
*/

'use strict';

var dependencies = [
  'd3',
  'StackedBarGraph'
];

define(dependencies, function(d3, StackedBarGraph) {
  var properties = {
    width : 600,   // make width and height dynamic to client!
    height : 500,
    container: 'body',
    margin : {right: 50, left: 50, top: 50, bottom: 100}
  },
  dataLayers = [ // n = 7, s = 10
    [
      { x : 0, y : Math.random() * 100 },
      { x : 1, y : Math.random() * 100 },
      { x : 2, y : Math.random() * 100 },
      { x : 3, y : Math.random() * 100 },
      { x : 4, y : Math.random() * 100 },
      { x : 5, y : Math.random() * 100 },
      { x : 6, y : Math.random() * 100 },
      { x : 7, y : Math.random() * 100 },
      { x : 8, y : Math.random() * 100 },
      { x : 9, y : Math.random() * 100 }
    ],
    [
      { x : 0, y : Math.random() * 100 },
      { x : 1, y : Math.random() * 100 },
      { x : 2, y : Math.random() * 100 },
      { x : 3, y : Math.random() * 100 },
      { x : 4, y : Math.random() * 100 },
      { x : 5, y : Math.random() * 100 },
      { x : 6, y : Math.random() * 100 },
      { x : 7, y : Math.random() * 100 },
      { x : 8, y : Math.random() * 100 },
      { x : 9, y : Math.random() * 100 }
    ],
    [
      { x : 0, y : Math.random() * 100 },
      { x : 1, y : Math.random() * 100 },
      { x : 2, y : Math.random() * 100 },
      { x : 3, y : Math.random() * 100 },
      { x : 4, y : Math.random() * 100 },
      { x : 5, y : Math.random() * 100 },
      { x : 6, y : Math.random() * 100 },
      { x : 7, y : Math.random() * 100 },
      { x : 8, y : Math.random() * 100 },
      { x : 9, y : Math.random() * 100 }
    ],
    [
      { x : 0, y : Math.random() * 100 },
      { x : 1, y : Math.random() * 100 },
      { x : 2, y : Math.random() * 100 },
      { x : 3, y : Math.random() * 100 },
      { x : 4, y : Math.random() * 100 },
      { x : 5, y : Math.random() * 100 },
      { x : 6, y : Math.random() * 100 },
      { x : 7, y : Math.random() * 100 },
      { x : 8, y : Math.random() * 100 },
      { x : 9, y : Math.random() * 100 }
    ],
    [
      { x : 0, y : Math.random() * 100 },
      { x : 1, y : Math.random() * 100 },
      { x : 2, y : Math.random() * 100 },
      { x : 3, y : Math.random() * 100 },
      { x : 4, y : Math.random() * 100 },
      { x : 5, y : Math.random() * 100 },
      { x : 6, y : Math.random() * 100 },
      { x : 7, y : Math.random() * 100 },
      { x : 8, y : Math.random() * 100 },
      { x : 9, y : Math.random() * 100 }
    ],
    [
      { x : 0, y : Math.random() * 100 },
      { x : 1, y : Math.random() * 100 },
      { x : 2, y : Math.random() * 100 },
      { x : 3, y : Math.random() * 100 },
      { x : 4, y : Math.random() * 100 },
      { x : 5, y : Math.random() * 100 },
      { x : 6, y : Math.random() * 100 },
      { x : 7, y : Math.random() * 100 },
      { x : 8, y : Math.random() * 100 },
      { x : 9, y : Math.random() * 100 }
    ],
    [
      { x : 0, y : Math.random() * 100 },
      { x : 1, y : Math.random() * 100 },
      { x : 2, y : Math.random() * 100 },
      { x : 3, y : Math.random() * 100 },
      { x : 4, y : Math.random() * 100 },
      { x : 5, y : Math.random() * 100 },
      { x : 6, y : Math.random() * 100 },
      { x : 7, y : Math.random() * 100 },
      { x : 8, y : Math.random() * 100 },
      { x : 9, y : Math.random() * 100 }
    ]
  ];


  console.log(dataLayers);

  var graph = new StackedBarGraph(dataLayers, properties);

});
