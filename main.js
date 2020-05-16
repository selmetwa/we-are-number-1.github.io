const render = data => {

    // let margin = {top: 50, right: 10, bottom: 10, left: 10},
    let width = 1200; 
    let height = 500;

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

    d3.select("svg").remove();
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
    
}

function readData(value) {
    d3.csv("/data/country-data.csv", function(error, data, value) {
        
        let dataToBePassed = []
        console.log('data: ', data)
        console.log('value: ', value)

        for (let i=4; i<data.length; i++) {
            dataToBePassed.push({
                name: data[i].indicator,
                value: parseFloat(data[i][`${value}`])
            })
        }
        
        dataToBePassed.sort((a, b) => (a.value) - (b.value));
        console.log('dataToBePassed: ', dataToBePassed)
        console.log('lowest: ', dataToBePassed[dataToBePassed.length-1])
        render(dataToBePassed)

     });
}


const valueSelect = document.querySelector('.value-select')

function getValue() {
    
    var selected = valueSelect.value;  
    console.log('selected: ', selected);
    d3.csv("/data/country-data.csv", function(error, data) {

        let dataToBePassed = []
        console.log('data: ', data)
        console.log('selected: ', selected)
        
        let test = "health expenditure \n% of GDP"

        for (let i=4; i<data.length; i++) {
            let value

            if (parseFloat(data[i][selected])) {
                dataToBePassed.push({
                    name: data[i].indicator,
                    value: parseFloat(data[i][selected].replace(/,/g, '')) + 4
                })
            }
        }
     
        

        dataToBePassed.sort((a, b) => (a.value) - (b.value));
        console.log('dataToBePassed: ', dataToBePassed)

        render(dataToBePassed)

     });
  }

valueSelect.onchange = getValue 
