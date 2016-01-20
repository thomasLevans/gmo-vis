/*
*
*
*
*/

'use strict';

require.config({
  baseUrl:'src',
  paths: {
    'jquery':'../../node_modules/jquery/dist/jquery.min',
    'underscore':'../../node_modules/underscore/underscore-min',
    'd3':'../../node_modules/d3/d3.min',
    'app':'app'
  },
  deps: ['app']
});
