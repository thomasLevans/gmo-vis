deps = ['d3', 'BarGraph']

define deps, (d3, BarGraph) ->
  properties =
    width: 600
    height: 500
    margin:
      right: 50
      left: 50
      top: 50
      bottom: 100
    year: '2000'
    tooltip:
      d3.select 'body'
        .append 'div'
        .attr 'class', 'tooltip'
        .attr 'opacity', 0
  graph = []
  layers = []

  btOnly =
    d3.select '#bt-only'
      .attr 'width', properties.width
      .attr 'height', properties.height
      .append 'g'
      .attr 'transform', 'translate(' + properties.margin.left + ',' + properties.margin.right + ')'

  d3.csv './dat/bt-only.csv', (error, csv) ->

    console.error error if error?

    # console.log csv if csv?
    layers[0] =
      'key': 'btOnly'
      'values': csv

    graph[0] = new BarGraph(csv, properties, btOnly)
    graph[0].propogateUpdate()

  d3.csv './dat/herbicide-only.csv', (error, csv) ->
    console.error error if error?

    layers[1] =
      'key': 'herbicide-only'
      'values': csv

  d3.csv './dat/stacked-gene.csv', (error, csv) ->
    console.error error if error?

    layers[2] =
      'key': 'stacked-gene'
      'values': csv

  d3.csv './dat/all-ge.csv', (error, csv) ->
    console.error error if error?

    layers[3] =
      'key': 'all-ge'
      'values': csv

    # remember the async nature of the .csv calls
    # the call to layers has to be after
    # prolly a good time to learn Observ / Signal
    # from reactjs

    console.log layers
