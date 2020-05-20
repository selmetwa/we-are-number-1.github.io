
let continentKeys = {
    africaKeyActive: false,
    asiaKeyActive: false,
    europeKeyActive: false,
    oceaniaKeyActive: false,
    southAmericaKeyActive: false,
    northAmericaKeyActive: false,
}

const keys = document.querySelectorAll('.key')
const africaKey = document.querySelector('.africa-key')
const asiaKey = document.querySelector('.asia-key')
const europeKey = document.querySelector('.europe-key')
const southAmericaKey = document.querySelector('.south-america-key')
const northAmericaKey = document.querySelector('.north-america-key')
const oceaniaKey = document.querySelector('.oceania-key')
const clearKey = document.querySelector('.clear-key')

clearKey.addEventListener('click', () => {
    continentKeys.africaKeyActive = false
    continentKeys.asiaKeyActive = false
    continentKeys.europeKeyActive = false
    continentKeys.southAmericaKeyActive = false
    continentKeys.northAmericaKeyActive = false
    continentKeys.oceaniaKeyActive = false

    keys.forEach(key => {
        key.style.backgroundColor = '#fff'
    })
    northAmericaKey.style.color = '#1D1E2C'
    getValue()
})
africaKey.addEventListener('click', () => {
    continentKeys.africaKeyActive == true ? continentKeys.africaKeyActive = false : continentKeys.africaKeyActive = true
    continentKeys.africaKeyActive == true ? africaKey.style.backgroundColor = '#242D2F' : africaKey.style.backgroundColor = '#fff'
    getValue()
})
asiaKey.addEventListener('click', () => {
    continentKeys.asiaKeyActive == true ? continentKeys.asiaKeyActive = false : continentKeys.asiaKeyActive = true
    continentKeys.asiaKeyActive == true ? asiaKey.style.backgroundColor = '#242D2F' : asiaKey.style.backgroundColor = '#fff'
    getValue()
})
europeKey.addEventListener('click', () => {
    continentKeys.europeKeyActive == true ? continentKeys.europeKeyActive = false : continentKeys.europeKeyActive = true
    continentKeys.europeKeyActive == true ? europeKey.style.backgroundColor = '#242D2F' : europeKey.style.backgroundColor = '#fff'
    getValue()
})
southAmericaKey.addEventListener('click', () => {
    continentKeys.southAmericaKeyActive == true ? continentKeys.southAmericaKeyActive = false : continentKeys.southAmericaKeyActive = true
    continentKeys.southAmericaKeyActive == true ? southAmericaKey.style.backgroundColor = '#242D2F' : southAmericaKey.style.backgroundColor = '#fff'
    getValue()
})
northAmericaKey.addEventListener('click', () => {
    continentKeys.northAmericaKeyActive == true ? continentKeys.northAmericaKeyActive = false : continentKeys.northAmericaKeyActive = true
    if (continentKeys.northAmericaKeyActive) {
        northAmericaKey.style.backgroundColor = '#242D2F'
        northAmericaKey.style.color = '#fafafa'
    } else {
        northAmericaKey.style.backgroundColor = '#fff'
        northAmericaKey.style.color = '#1D1E2C'
    }
    getValue()
})
oceaniaKey.addEventListener('click', () => {
    continentKeys.oceaniaKeyActive == true ? continentKeys.oceaniaKeyActive = false : continentKeys.oceaniaKeyActive = true
    continentKeys.oceaniaKeyActive == true ? oceaniaKey.style.backgroundColor = '#242D2F' : oceaniaKey.style.backgroundColor = '#fff'
    getValue()
})
let all = true

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

    if (continentKeys.africaKeyActive) {
        d3.selectAll(".bar")
        .data(data)
        .style("fill", "orange")
        .classed('africaActive', function(d) { return d.continent == 'africa'; })
    }
    if (continentKeys.asiaKeyActive) {
        d3.selectAll(".bar")
        .data(data)
        .style("fill", "orange")
        .classed('asiaActive', function(d) { return d.continent == 'asia'; })
    }
    if (continentKeys.europeKeyActive) {
        d3.selectAll(".bar")
        .data(data)
        .style("fill", "orange")
        .classed('europeActive', function(d) { return d.continent == 'europe'; })
    }
    if (continentKeys.southAmericaKeyActive) {
        d3.selectAll(".bar")
        .data(data)
        .style("fill", "orange")
        .classed('southAmericaActive', function(d) { return d.continent == 'south-america'; })
    }
    if (continentKeys.northAmericaKeyActive) {
        d3.selectAll(".bar")
        .data(data)
        .style("fill", "orange")
        .classed('northAmericaActive', function(d) { return d.continent == 'north-america'; })
    }
    if (continentKeys.oceaniaKeyActive) {
        d3.selectAll(".bar")
        .data(data)
        .style("fill", "orange")
        .classed('oceaniaActive', function(d) { return d.continent == 'oceania'; })
    }

    let test = getSpecificCountries()
    d3.selectAll(".bar")
    .filter(function(d) { return test.includes(d.name) })
    .classed('specificCountry', function(d) { return test.includes(d.name) })

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

        const africa = ['Egypt', 'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso',
        'Burundi', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'Congo (Dem. Rep.)'
        , 'Congo (Rep.)', "Cote d'Ivoire", 'Djibouti', 'Equatorial Guinea',
        'Eritrea', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea',
        'Guinea-Bissau', 'Kenya', 'Lesotho', 'Liberia', 'Libya',
        'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco',
        'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda',
        'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone',
        'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania',
        'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe']

        const asia = ['Afghanistan', 'Armenia', 'Azerbaijan',
        'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'India', 
        'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 
        "Korea (Dem. People’s Rep.)", 'Korea (Rep.)', 'Kuwait', 'Kyrgyzstan', 
        'Laos', 'Lebanon', 'Madagascar', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar',
        'Nepal', 'Oman', 'Pakistan', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore',
        'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey',
        'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen']
        
        const europe = ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium',
        'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
        'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece',
        'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Liechtenstein',
        'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova', 'Monaco', 
        'Montenegro', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia',
        'San Marino', 'Serbia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Ukraine',
        'United Kingdom']
        const southAmerica = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia',
        'Costa Rica', 'Ecuador', 'Guyana', 'Paraguay', 'Peru', 'Suriname','Uruguay',
        'Venezuela']
        const northAmerica = ['Antigua & Barbuda', 'Bahamas', 'Barbados', 'Belize',
        'Canada', 'Cuba', 'Dominican Republic', 'El Salvador', 'Grenada', 'Guatemala',
        'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Nicaragua', 'Panama',
        'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
        'Trinidad and Tobago', 'United States']
        const oceania = ['Australia', 'Fiji', 'Kiribati', 'Marshall Islands',
        'Micronesia', 'Nauru', 'New Zealand', 'Palau', 'Papua New Guinea',
        'Samoa', 'Solomon Islands', 'Tonga', 'Tuvalu', 'Vanuatu']

        selected = outliers(selected)
        for (let i=4; i<data.length; i++) {
            let continent
            if (africa.includes(data[i].indicator)) {
                continent = 'africa'
            } else if (asia.includes(data[i].indicator)) {
                continent = 'asia'
            } else if (europe.includes(data[i].indicator)) {
                continent = 'europe'
            } else if (southAmerica.includes(data[i].indicator)) {
                continent = 'south-america'
            } else if (northAmerica.includes(data[i].indicator)) {
                continent = 'north-america'
            } else if (oceania.includes(data[i].indicator)) {
                continent = 'oceania'
            }
            if (parseFloat(data[i][selected])) {
                dataToBePassed.push({
                    name: data[i].indicator,
                    continent: continent,
                    value: parseFloat(data[i][selected].replace(/,/g, '')) + 4
                })
            }
        }

        let newData = []
        // poor solution until i can think of a better way
        if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }

        // n=5 
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'africa' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }

        // quadruples ?
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'africa' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'africa' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.africaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'africa' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'south-america' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.asiaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'asia' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'africa' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'africa' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }

        // triples 
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'asia' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.africaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'africa' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.northAmericaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'north-america' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'asia' || datum.continent == 'africa' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.asiaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'asia' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.asiaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'asia' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'africa' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.africaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'africa' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.africaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'africa' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'asia' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'africa' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.africaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'africa' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.asiaKeyActive && continentKeys.africaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'asia' || datum.continent == 'africa' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.asiaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'asia' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'africa' || datum.continent == 'oceania' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }

        // doubles
        else if (continentKeys.africaKeyActive && continentKeys.asiaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'africa' || datum.continent == 'asia' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.africaKeyActive && continentKeys.europeKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'africa' || datum.continent == 'europe' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.africaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'africa' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.africaKeyActive && continentKeys.northAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'africa' || datum.continent == 'north-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.africaKeyActive && continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'africa' || datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.southAmericaKeyActive && continentKeys.europeKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'south-america' || datum.continent == 'europe' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.southAmericaKeyActive && continentKeys.northAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'south-america' || datum.continent == 'north-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.southAmericaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'south-america' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.southAmericaKeyActive && continentKeys.asiaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'south-america' || datum.continent == 'asia' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.europeKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'europe' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive && continentKeys.asiaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' || datum.continent == 'asia' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.oceaniaKeyActive && continentKeys.asiaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'oceania' || datum.continent == 'asia' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.oceaniaKeyActive && continentKeys.europeKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'oceania' || datum.continent == 'europe' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive && continentKeys.asiaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'oceania' || datum.continent == 'asia' ? newData.push(datum) : '' }); dataToBePassed = newData }
        
        // singles 6
        else if (continentKeys.africaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'africa' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.asiaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'asia' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.europeKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'europe' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.southAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'south-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.northAmericaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'north-america' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if (continentKeys.oceaniaKeyActive) { dataToBePassed.forEach(datum => { datum.continent == 'oceania' ? newData.push(datum) : '' }); dataToBePassed = newData }
        else if  (all) {
            newData = dataToBePassed
        }
        dataToBePassed = newData 
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
    return values
}

countrySelect.onchange = getValue

