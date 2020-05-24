
const human_development_index_array = []
const GDP_percent_billions_array = []
const GDP_capita_billions_array = []
const GDP_growth_annual_array = []
const health_expenditure_percent_array = []
const health_expenditure_capita_array = []
const school_life_years_array = []
const unemployment_array = []
const government_spending_score_array = []
const government_expenditure_GDP_array = []
const political_rights_score_array = []
const civil_liberties_score_array = []
const political_stability_absence_array = []
const government_effectiveness_array = []
const regulatory_quality_array = []
const rule_of_law_array = []
const control_of_corruption_array = []
const judicial_effectiveness_array = []
const government_integrity_array = []
const property_rights_array = []
const tax_burden_array = []
const economic_freedom_array = []
const financial_freedom_array = []
const women_MPS_array = []
const education_expenditure_person_array = []
const education_expenditure_GDP_array = []
const population_array = []
const surface_area_array = []
const happy_planet_array = []
const world_happiness_score_array = []

d3.csv("/data/country-data.csv", function(error, data) {
    let dataWithValues = []              
    for (let i=4; i<data.length; i++) {
        let value = []
        parseFloat(data[i]['human development index']) ? value.push(parseFloat(data[i]['human development index'])) : value.push(0)
        parseFloat(data[i]['human development index']) ? human_development_index_array.push(parseFloat(data[i]['human development index'])) : human_development_index_array.push(0)

        parseFloat(data[i]['GDP \n(billions PPP)']) ? value.push(parseFloat(data[i]['GDP \n(billions PPP)'])) : value.push(0)
        parseFloat(data[i]['GDP \n(billions PPP)']) ? GDP_percent_billions_array.push(parseFloat(data[i]['GDP \n(billions PPP)'])) : GDP_percent_billions_array.push(0)

        parseFloat(data[i]['GDP per capita (PPP)']) ? value.push(parseFloat(data[i]['GDP per capita (PPP)'])) : value.push(0)
        parseFloat(data[i]['GDP per capita (PPP)']) ? GDP_capita_billions_array.push(parseFloat(data[i]['GDP per capita (PPP)'])) : GDP_capita_billions_array.push(0)

        parseFloat(data[i]['GDP growth\n(annual %)']) ? value.push(parseFloat(data[i]['GDP growth\n(annual %)'])) : value.push(0)
        parseFloat(data[i]['GDP growth\n(annual %)']) ? GDP_growth_annual_array.push(parseFloat(data[i]['GDP growth\n(annual %)'])) : GDP_growth_annual_array.push(0)

        parseFloat(data[i]['health expenditure \n% of GDP']) ? value.push(parseFloat(data[i]['health expenditure \n% of GDP'])) : value.push(0)
        parseFloat(data[i]['health expenditure \n% of GDP']) ? health_expenditure_percent_array.push(parseFloat(data[i]['health expenditure \n% of GDP'])) : health_expenditure_percent_array.push(0)

        parseFloat(data[i]['health expenditure \nper person']) ? value.push(parseFloat(data[i]['health expenditure \nper person'])) : value.push(0)
        parseFloat(data[i]['health expenditure \nper person']) ? health_expenditure_capita_array.push(parseFloat(data[i]['health expenditure \nper person'])) : health_expenditure_capita_array.push(0)

        parseFloat(data[i]['school life expectancy (YEARS)']) ? value.push(parseFloat(data[i]['school life expectancy (YEARS)'])) : value.push(0)
        parseFloat(data[i]['school life expectancy (YEARS)']) ? school_life_years_array.push(parseFloat(data[i]['school life expectancy (YEARS)'])) : school_life_years_array.push(0)

        parseFloat(data[i]['unemployment (%)']) ? value.push(parseFloat(data[i]['unemployment (%)'])) : value.push(0)
        parseFloat(data[i]['unemployment (%)']) ? unemployment_array.push(parseFloat(data[i]['unemployment (%)'])) : unemployment_array.push(0)

        parseFloat(data[i]['government spending score']) ? value.push(parseFloat(data[i]['government spending score'])) : value.push(0)
        parseFloat(data[i]['government spending score']) ? government_spending_score_array.push(parseFloat(data[i]['government spending score'])) : government_spending_score_array.push(0)

        parseFloat(data[i]['government expenditure (% of GDP)']) ? value.push(parseFloat(data[i]['government expenditure (% of GDP)'])) : value.push(0)
        parseFloat(data[i]['government expenditure (% of GDP)']) ? government_expenditure_GDP_array.push(parseFloat(data[i]['government expenditure (% of GDP)'])) : government_expenditure_GDP_array.push(0)

        parseFloat(data[i]['political rights score ']) ? value.push(parseFloat(data[i]['political rights score '])) : value.push(0)
        parseFloat(data[i]['political rights score ']) ? political_rights_score_array.push(parseFloat(data[i]['political rights score '])) : political_rights_score_array.push(0)

        parseFloat(data[i]['civil liberties score ']) ? value.push(parseFloat(data[i]['civil liberties score '])) : value.push(0)
        parseFloat(data[i]['civil liberties score ']) ? civil_liberties_score_array.push(parseFloat(data[i]['civil liberties score '])) : civil_liberties_score_array.push(0)

        parseFloat(data[i]['political stability & absence of violence']) ? value.push(parseFloat(data[i]['political stability & absence of violence'])) : value.push(0)
        parseFloat(data[i]['political stability & absence of violence']) ? political_stability_absence_array.push(parseFloat(data[i]['political stability & absence of violence'])) : political_stability_absence_array.push(0)

        parseFloat(data[i]['government effectiveness']) ? value.push(parseFloat(data[i]['government effectiveness'])) : value.push(0)
        parseFloat(data[i]['government effectiveness']) ? government_effectiveness_array.push(parseFloat(data[i]['government effectiveness'])) : government_effectiveness_array.push(0)

        parseFloat(data[i]['regulatory quality']) ? value.push(parseFloat(data[i]['regulatory quality'])) : value.push(0)
        parseFloat(data[i]['regulatory quality']) ? regulatory_quality_array.push(parseFloat(data[i]['regulatory quality'])) : regulatory_quality_array.push(0)

        parseFloat(data[i]['rule of law']) ? value.push(parseFloat(data[i]['rule of law'])) : value.push(0)
        parseFloat(data[i]['rule of law']) ? rule_of_law_array.push(parseFloat(data[i]['rule of law'])) : rule_of_law_array.push(0)

        parseFloat(data[i]['control of corruption']) ? value.push(parseFloat(data[i]['control of corruption'])) : value.push(0)
        parseFloat(data[i]['control of corruption']) ? control_of_corruption_array.push(parseFloat(data[i]['control of corruption'])) : control_of_corruption_array.push(0)

        parseFloat(data[i]['judicial effectiveness score']) ? value.push(parseFloat(data[i]['judicial effectiveness score'])) : value.push(0)
        parseFloat(data[i]['judicial effectiveness score']) ? judicial_effectiveness_array.push(parseFloat(data[i]['judicial effectiveness score'])) : judicial_effectiveness_array.push(0)

        parseFloat(data[i]['government integrity score']) ? value.push(parseFloat(data[i]['government integrity score'])) : value.push(0)
        parseFloat(data[i]['government integrity score']) ? government_integrity_array.push(parseFloat(data[i]['government integrity score'])) : government_integrity_array.push(0)

        parseFloat(data[i]['property rights score']) ? value.push(parseFloat(data[i]['property rights score'])) : value.push(0)
        parseFloat(data[i]['property rights score']) ? property_rights_array.push(parseFloat(data[i]['property rights score'])) : property_rights_array.push(0)

        parseFloat(data[i]['tax burden score']) ? value.push(parseFloat(data[i]['tax burden score'])) : value.push(0)
        parseFloat(data[i]['tax burden score']) ? tax_burden_array.push(parseFloat(data[i]['tax burden score'])) : tax_burden_array.push(0)
        
        parseFloat(data[i]['overall economic freedom score']) ? value.push(parseFloat(data[i]['overall economic freedom score'])) : value.push(0)
        parseFloat(data[i]['overall economic freedom score']) ? economic_freedom_array.push(parseFloat(data[i]['overall economic freedom score'])) : economic_freedom_array.push(0)

        parseFloat(data[i]['financial freedom score']) ? value.push(parseFloat(data[i]['financial freedom score'])) : value.push(0)
        parseFloat(data[i]['financial freedom score']) ? financial_freedom_array.push(parseFloat(data[i]['financial freedom score'])) : financial_freedom_array.push(0)

        parseFloat(data[i]['women MPs (% of all MPs)']) ? value.push(parseFloat(data[i]['women MPs (% of all MPs)'])) : value.push(0)
        parseFloat(data[i]['women MPs (% of all MPs)']) ? women_MPS_array.push(parseFloat(data[i]['women MPs (% of all MPs)'])) : women_MPS_array.push(0)

        parseFloat(data[i]['population']) ? value.push(parseFloat(data[i]['population'])) : value.push(0)
        parseFloat(data[i]['population']) ? population_array.push(parseFloat(data[i]['population'])) : population_array.push(0)

        parseFloat(data[i]['surface area (Km2)']) ? value.push(parseFloat(data[i]['surface area (Km2)'])) : value.push(0)
        parseFloat(data[i]['surface area (Km2)']) ? surface_area_array.push(parseFloat(data[i]['surface area (Km2)'])) : surface_area_array.push(0)

        parseFloat(data[i]['happy planet index']) ? value.push(parseFloat(data[i]['happy planet index'])) : value.push(0)
        parseFloat(data[i]['happy planet index']) ? happy_planet_array.push(parseFloat(data[i]['happy planet index'])) : happy_planet_array.push(0)

        parseFloat(data[i]['world happiness report score']) ? value.push(parseFloat(data[i]['world happiness report score'])) : value.push(0)
        parseFloat(data[i]['world happiness report score']) ? world_happiness_score_array.push(parseFloat(data[i]['world happiness report score'])) : world_happiness_score_array.push(0)

        dataWithValues.push({
            name: data[i].indicator,
            totalValue: value
        })
        
        
    }

    dataWithValues.sort((a, b) => (a.totalValue) - (b.totalValue));

    function pearson(x, y){
        let promedio = (lista) => { return lista.reduce((s, a) => s + a, 0) / lista.length };
        let n = x.length, prom_x = promedio(x) , prom_y = promedio(y);
        return (x.map( (e, i, r) => (r = {x:e, y:y[i]}) ).reduce( (s, a) => s + a.x * a.y, 0) - n * prom_x * prom_y) / 
        ((Math.sqrt(x.reduce( (s, a) => (s + a * a) , 0) - n * prom_x * prom_x)) *
        (Math.sqrt(y.reduce( (s, a) => (s + a * a) , 0) - n * prom_y * prom_y)));
    } 
    
    //   const targetCountry = dataWithValues.filter(obj => {
    //       return obj.name == 'United States'
    //   })
      
    //   console.log('dataWithValues: ', dataWithValues)
    
    let testArray = []
    let arrWithPercentiles = []
   
    // console.log('targetCountry: ', targetCountry)

      for (let i=0; i<dataWithValues.length; i++) {
            let hmmArray = []
            hmmArray.push(percentRank(human_development_index_array, dataWithValues[i].totalValue[0]))
            hmmArray.push(percentRank(GDP_percent_billions_array, dataWithValues[i].totalValue[1]))
            hmmArray.push(percentRank(GDP_capita_billions_array, dataWithValues[i].totalValue[2]))
            hmmArray.push(percentRank(GDP_growth_annual_array, dataWithValues[i].totalValue[3]))
            hmmArray.push(percentRank(health_expenditure_percent_array, dataWithValues[i].totalValue[4]))
            hmmArray.push(percentRank(health_expenditure_capita_array, dataWithValues[i].totalValue[5]))
            hmmArray.push(percentRank(school_life_years_array, dataWithValues[i].totalValue[6]))
            hmmArray.push(percentRank(unemployment_array, dataWithValues[i].totalValue[7]))
            hmmArray.push(percentRank(government_spending_score_array, dataWithValues[i].totalValue[8]))
            hmmArray.push(percentRank(government_expenditure_GDP_array, dataWithValues[i].totalValue[9]))
            hmmArray.push(percentRank(political_rights_score_array, dataWithValues[i].totalValue[10]))
            hmmArray.push(percentRank(civil_liberties_score_array, dataWithValues[i].totalValue[11]))
            hmmArray.push(percentRank(political_stability_absence_array, dataWithValues[i].totalValue[12]))
            hmmArray.push(percentRank(government_effectiveness_array, dataWithValues[i].totalValue[13]))
            hmmArray.push(percentRank(regulatory_quality_array, dataWithValues[i].totalValue[14]))
            hmmArray.push(percentRank(rule_of_law_array, dataWithValues[i].totalValue[15]))
            hmmArray.push(percentRank(control_of_corruption_array, dataWithValues[i].totalValue[16]))
            hmmArray.push(percentRank(judicial_effectiveness_array, dataWithValues[i].totalValue[17]))
            hmmArray.push(percentRank(government_integrity_array, dataWithValues[i].totalValue[18]))
            hmmArray.push(percentRank(property_rights_array, dataWithValues[i].totalValue[19]))
            hmmArray.push(percentRank(tax_burden_array, dataWithValues[i].totalValue[20]))
            hmmArray.push(percentRank(economic_freedom_array, dataWithValues[i].totalValue[21]))
            hmmArray.push(percentRank(financial_freedom_array, dataWithValues[i].totalValue[22]))
            hmmArray.push(percentRank(women_MPS_array, dataWithValues[i].totalValue[23]))
            hmmArray.push(percentRank(population_array, dataWithValues[i].totalValue[24]))
            hmmArray.push(percentRank(surface_area_array, dataWithValues[i].totalValue[25]))
            hmmArray.push(percentRank(happy_planet_array, dataWithValues[i].totalValue[26]))
            hmmArray.push(percentRank(world_happiness_score_array, dataWithValues[i].totalValue[27]))

            arrWithPercentiles.push({
                name: dataWithValues[i].name,
                percentileArray: hmmArray
            })
      }
      const targetCountry = arrWithPercentiles.filter(obj => {
        return obj.name == 'Egypt'
      })
        // console.log('targetCountry: ', targetCountry)

      for (let i=0; i<arrWithPercentiles.length; i++) {
        let result = pearson(
            targetCountry[0].percentileArray, 
            arrWithPercentiles[i].percentileArray
        )
        testArray.push({
            name: dataWithValues[i].name,
            score: result
        })
      }

    testArray.sort((a,b) => a.score - b.score)

    function percentRank(array, n) {
    var L = 0;
    var S = 0;
    var N = array.length

    for (var i = 0; i < array.length; i++) {
        if (array[i] < n) {
            L += 1
        } else if (array[i] === n) {
            S += 1
        } else {

        }
    }
    var pct = (L + (0.5 * S)) / N
    return pct
}


const colorVariable = 'score'
const geoIDVariable = 'id'
const format = d3.format(',')

// Set tooltips
const tip = d3
  .tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(
    d =>
      `<strong>Country: </strong><span class='details'>${
        d.properties.name
      }<br></span><strong>Population: </strong><span class='details'>${format(
        d[colorVariable]
      )}</span>`
  )

tip.direction(function(d) {
  if (d.properties.name === 'Antarctica') return 'n'
  // Americas
  if (d.properties.name === 'Greenland') return 's'
  if (d.properties.name === 'Canada') return 'e'
  if (d.properties.name === 'USA') return 'e'
  if (d.properties.name === 'Mexico') return 'e'
  // Europe
  if (d.properties.name === 'Iceland') return 's'
  if (d.properties.name === 'Norway') return 's'
  if (d.properties.name === 'Sweden') return 's'
  if (d.properties.name === 'Finland') return 's'
  if (d.properties.name === 'Russia') return 'w'
  // Asia
  if (d.properties.name === 'China') return 'w'
  if (d.properties.name === 'Japan') return 's'
  // Oceania
  if (d.properties.name === 'Indonesia') return 'w'
  if (d.properties.name === 'Papua New Guinea') return 'w'
  if (d.properties.name === 'Australia') return 'w'
  if (d.properties.name === 'New Zealand') return 'w'
  // otherwise if not specified
  return 'n'
})

tip.offset(function(d) {
  // [top, left]
  if (d.properties.name === 'Antarctica') return [0, 0]
  // Americas
  if (d.properties.name === 'Greenland') return [10, -10]
  if (d.properties.name === 'Canada') return [24, -28]
  if (d.properties.name === 'USA') return [-5, 8]
  if (d.properties.name === 'Mexico') return [12, 10]
  if (d.properties.name === 'Chile') return [0, -15]
  // Europe
  if (d.properties.name === 'Iceland') return [15, 0]
  if (d.properties.name === 'Norway') return [10, -28]
  if (d.properties.name === 'Sweden') return [10, -8]
  if (d.properties.name === 'Finland') return [10, 0]
  if (d.properties.name === 'France') return [-9, 66]
  if (d.properties.name === 'Italy') return [-8, -6]
  if (d.properties.name === 'Russia') return [5, 385]
  // Africa
  if (d.properties.name === 'Madagascar') return [-10, 10]
  // Asia
  if (d.properties.name === 'China') return [-16, -8]
  if (d.properties.name === 'Mongolia') return [-5, 0]
  if (d.properties.name === 'Pakistan') return [-10, 13]
  if (d.properties.name === 'India') return [-11, -18]
  if (d.properties.name === 'Nepal') return [-8, 1]
  if (d.properties.name === 'Myanmar') return [-12, 0]
  if (d.properties.name === 'Laos') return [-12, -8]
  if (d.properties.name === 'Vietnam') return [-12, -4]
  if (d.properties.name === 'Japan') return [5, 5]
  // Oceania
  if (d.properties.name === 'Indonesia') return [0, -5]
  if (d.properties.name === 'Papua New Guinea') return [-5, -10]
  if (d.properties.name === 'Australia') return [-15, 0]
  if (d.properties.name === 'New Zealand') return [-15, 0]
  // otherwise if not specified
  return [-10, 0]
})

d3.select('body').style('overflow', 'hidden')

const parentWidth = d3
  .select('body')
  .node()
  .getBoundingClientRect().width
const margin = { top: 0, right: 0, bottom: 0, left: 0 }
const width = 1260 - margin.left - margin.right
const height = 700 - margin.top - margin.bottom

const color = d3
  .scaleQuantile()
  .range([
    'rgb(247,251,255)',
    'rgb(222,235,247)',
    'rgb(198,219,239)',
    'rgb(158,202,225)',
    'rgb(107,174,214)',
    'rgb(66,146,198)',
    'rgb(33,113,181)',
    'rgb(8,81,156)',
    'rgb(8,48,107)',
    'rgb(3,19,43)'
  ])

const map = d3
  .select('.map')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('class', 'map')

const projection = d3
  .geoRobinson()
  .scale(148)
  .rotate([352, 0, 0])
  .translate([width / 2, height / 2])

const path = d3.geoPath().projection(projection)

map.call(tip)

queue()
  .defer(d3.json, 'world_countries.json')
  .defer(d3.tsv, 'world_population.tsv')
  .await(ready)

function ready(data) {
  const numberOfClasses = color.range().length - 1
  const ckmeansClusters = ss.ckmeans(
    data.map(d => d[colorVariable]),
    numberOfClasses
  )
  const ckmeansBreaks = ckmeansClusters.map(d => d3.min(d))


  color.domain(ckmeansBreaks)

  map
    .append('g')
    .attr('class', 'countries')
    .selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', path)
    .style('fill', d => {
      if (typeof d.score !== 'undefined') {
        // return color(d.score)
        if (d.score < 0) {
            return `rgba(209, 163, 5, ${d.score + .9})`
        } else {
            return `rgba(219, 80, 74, ${d.score + .1})`            
        }
      }
      return 'white'
    })
    .style('fill-opacity', 0.8)
    .style('stroke', d => {
      if (d.score !== 0) {
        return 'white'
      }
      return 'lightgray'
    })
    .style('stroke-width', 1)
    .style('stroke-opacity', 0.5)
    // tooltips
    .on('mouseover', function(d) {
      tip.show(d)
      d3.select(this)
        .style('fill-opacity', 1)
        .style('stroke-opacity', 1)
        .style('stroke-width', 2)
    })
    .on('mouseout', function(d) {
      tip.hide(d)
      d3.select(this)
        .style('fill-opacity', 0.8)
        .style('stroke-opacity', 0.5)
        .style('stroke-width', 1)
    })

  map
    .append('path')
    .datum(topojson.mesh(geography.features, (a, b) => a.id !== b.id))
    .attr('class', 'names')
    .attr('d', path)
}

let geography
fetch('world_countries.json')
    .then(response => response.json())
    .then(result => geography = result)
    .then(json => {
        // console.log('json: ', json)
        // console.log('json: ', json.features)
        for (let i=0; i<testArray.length; i++) {
            json.features.forEach(feature => {
                if (feature.properties.name == testArray[i].name) {
                    feature.score = testArray[i].score
                } 
            })
        }
        ready(json.features)
    })

})
