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
    console.log('data: ', data )
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
      
      console.log('dataWithValues: ', dataWithValues)
    
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
        return obj.name == 'Brazil'
      })
        console.log('targetCountry: ', targetCountry)

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
    console.log('testArray: ', testArray)    

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

    
})

// value: parseFloat(data[i][selected].replace(/,/g, ''))

