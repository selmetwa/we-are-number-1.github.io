
const outliers = (value) => {

    if (value == 1) {
        let selected = "health expenditure \n% of GDP"
        return selected
    } else if (value == 2) {
        let selected = "health expenditure \nper person"
        return selected
    } else if (value == 3) {
        let selected = "GDP growth\n(annual %)"
        return selected
    } else if (value == 4) {
        let selected = "civil liberties score "
        return selected
    } else if (value == 5) {
        let selected = "political rights score "
        return selected
    } else if (value == 6){
        let selected = "education expenditure \nper person "
        return selected
    } else if (value == 7) {
        let selected = "education expenditure\n% of GDP"
        return selected
    }
    else {
        return value
    }
}

const render = data => {

    let width = 1400; 
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
        return "<strong>"+d.name+":</strong> <span style='color:orange'>" + d.value + "</span>";
    })

    const activeTip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<strong>"+d.name+":</strong> <span style='color:orange'>" + d.value + "</span>";
    })

    d3.select("svg").remove();
    const svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")

    svg.call(tip);
    svg.call(activeTip);

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


    // let test = ['Australia', 'Brazil', 'United States']
    let test = getSpecificCountries()
    // document.querySelector('.countries-selected').innerHTML = test
    console.log('test: ', test)
    d3.selectAll(".bar")
    .filter(function(d) { return test.includes(d.name) })
    .style("fill", "#7692FF")
    .activeTip.show

    const names = data.map(function(d) { return d.name})

}

const valueSelect = document.querySelector('.value-select')

function getValue() {
    
    let selected
    if (valueSelect.value) {
        selected = valueSelect.value;  
    } else {
        selected = 'population'
    }

    d3.csv("/data/country-data.csv", function(error, data) {

        let dataToBePassed = []            

        selected = outliers(selected)
        for (let i=4; i<data.length; i++) {
            if (parseFloat(data[i][selected])) {
                dataToBePassed.push({
                    name: data[i].indicator,
                    value: parseFloat(data[i][selected].replace(/,/g, '')) + 4
                })
            }
        }
        
        dataToBePassed.sort((a, b) => (a.value) - (b.value));
        document.querySelector('.sample-size').innerHTML = `ranking ${dataToBePassed.length}/199 countries by`;
        document.querySelector('.sample-size-metric').innerHTML = `${selected}`;

        
        render(dataToBePassed)

     });
  }

window.onload = function() {
    getValue();
};

valueSelect.onchange = getValue 

const countrySelect = document.querySelector('.country-select')

$('.country-select').selectpicker();
$('.value-select').selectpicker();

function getSpecificCountries() {
    const values = Array.from(document.querySelectorAll('.country-select option:checked')).map(el => el.value);
    console.log('values: ', values)
    return values
}

countrySelect.onchange = getValue

