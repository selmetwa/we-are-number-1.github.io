// import { select, scaleLinear } from 'd3'

const svg = d3.select('svg');
const width = +svg.attr('width')
const height = +svg.attr('height')



const render = data => {
    const xValue = d => d.expenditure
    const yValue = d => d.name

    const margin = { top: 10, right: 20, bottom: 20, left:100 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, xValue)])
        .range([0, innerWidth])

    const yScale = d3.scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .padding(.3)

    const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    g.append('g').call(d3.axisLeft(yScale))
    g.append('g').call(d3.axisBottom(xScale))
        .attr('transform', `translate(0, ${innerHeight})`)

    svg.selectAll('rect').data(data)
        .enter().append('rect')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)
            .attr('y', d => yScale(yValue(d)))
            .attr('width', d => xScale(xValue(d)))
            .attr('height', yScale.bandwidth())
}

d3.csv("/data/country-data.csv").then(function(data) {
   let population = []
   let healthExpenditureAsPercentOfGDP = []
   console.log('data: ', data)

   for (let i=4; i<data.length; i++) {
       population.push({
           name: data[i].indicator,
           population: parseFloat(data[i].population.replace(/,/g, ''))
       })
       if (parseFloat(data[i]["health expenditure \n% of GDP"])) {
        healthExpenditureAsPercentOfGDP.push({
            name: data[i].indicator,
            expenditure: parseFloat(data[i]["health expenditure \n% of GDP"])
        })
       }
       
   }

   healthExpenditureAsPercentOfGDP.sort((a,b) => (a.expenditure) - (b.expenditure))
   population.sort((a, b) => (b.population) - (a.population));

   render(healthExpenditureAsPercentOfGDP)
 
   console.log('population: ', population)
   console.log('healthExpenditureAsPercentOfGDP: ', healthExpenditureAsPercentOfGDP)
});
