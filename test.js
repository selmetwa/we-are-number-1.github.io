const render = data => {

    var w = 20, h = 50;

    var chart = d3.select(".charts").append("svg")
    .attr("class", "chart")
    .attr("width", w * data.length)
    .attr("height", h);

    var x = d3.scale.linear()
    .domain([0, 1])
    .range([0, w]);

    var y = d3.scale.linear()
    .domain([0, 50])
    .rangeRound([0, h]); //rangeRound is used for antialiasing

    // x and y are the lower-left position of the bar
    // width is the width of the bar
    // height is the height of the bar
    // for crisp edges use -.5 (antialiasing)
    chart.selectAll("rect")
    .data(data)
    .enter().append("rect")
    .attr("x", function(d, i) { return x(i) - .5; })
    .attr("y", function(d) { return h - y(d) - .5; })
    .attr("width", w)
    .attr("height", function(d) { return y(d); } );

    // horizontal line for the x-axis
    chart.append("line")
    .attr("x1", 0)
    .attr("x2", w * data.length)
    .attr("y1", h - .5)
    .attr("y2", h - .5)
    .style("stroke", "#000");

}