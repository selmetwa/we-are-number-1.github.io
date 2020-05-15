const render = data => {

    // let margin = {top: 50, right: 10, bottom: 10, left: 10},
    let width = 1500; 
    let height = 600;

    const x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    const y = d3.scale.linear()
        .range([height, 0]);

    const xAxis = d3.svg.axis()
        .scale(x)

    const yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")

    const tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<strong>"+d.name+":</strong> <span style='color:red'>" + d.value + "</span>";
    })

    const svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")

    svg.call(tip);

        x.domain(data.map(function(d) { return d.name; }));
        y.domain([0, d3.max(data, function(d) { return d.value; })]);

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.name); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.value); })
            .attr("height", function(d) { return height - y(d.value); })
                
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
    
    d3.selectAll('rect')
    .on('click', function(d, i) {
        console.log('d: ', d)
        console.log('i: ', i)
        console.log('i.style("fill"): ', d3.select(this).style('fill'))
        let color = d3.select(this).style('fill')
        color = d3.rgb(color)
        console.log('color: ', color)
        console.log('color: ', color.r)

        if (color.r == 255 && color.g == 69 && color.b == 0) {
            console.log('what')
            d3.select(this)
            .style('fill', 'orangered');
        } 
        else {
            console.log('else')
            d3.select(this)
            .style('fill', 'orange');
        }
})}

// d3.csv("/data/country-data.csv").then(function(data) {
d3.csv("/data/country-data.csv", function(error, data) {
   let population = []
   let healthExpenditureAsPercentOfGDP = []
   console.log('data: ', data)

   for (let i=4; i<data.length; i++) {
       population.push({
           name: data[i].indicator,
           value: parseFloat(data[i].population.replace(/,/g, ''))
       })
       if (parseFloat(data[i]["health expenditure \n% of GDP"])) {
        healthExpenditureAsPercentOfGDP.push({
            name: data[i].indicator,
            value: parseFloat(data[i]["health expenditure \n% of GDP"])
        })
       }
       
   }

   healthExpenditureAsPercentOfGDP.sort((a,b) => (a.value) - (b.value))
   population.sort((a, b) => (a.value) - (b.value));

   render(healthExpenditureAsPercentOfGDP)
 
   console.log('population: ', population)
   console.log('healthExpenditureAsPercentOfGDP: ', healthExpenditureAsPercentOfGDP)
});
