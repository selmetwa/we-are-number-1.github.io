d3.csv("/data/country-data.csv").then(function(data) {
   let population = []
   let healthExpenditureAsPercentOfGDP = []
   console.log('data: ', data)

   for (i=4; i<data.length; i++) {
       population.push({
           name: data[i].indicator,
           population: parseFloat(data[i].population.replace(/,/g, ''))
       })
       healthExpenditureAsPercentOfGDP.push({
           name: data[i].indicator,
           expenditure: parseFloat(data[i]["health expenditure \n% of GDP"])
       })
   }

   healthExpenditureAsPercentOfGDP.sort((a,b) => (a.expenditure) - (b.expenditure))
   population.sort((a, b) => (b.population) - (a.population));

   console.log('population: ', population)
   console.log('healthExpenditureAsPercentOfGDP: ', healthExpenditureAsPercentOfGDP)
});
