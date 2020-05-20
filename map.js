const metrics = [
    'happy planet index', 
    'human development index',
    'world happiness report score',
    'GDP \n(billions PPP)',
    'GDP per capita (PPP)',
    'GDP growth\n(annual %)',
    'health expenditure \n% of GDP',
    'health expenditure \nper person',
    'education expenditure\n% of GDP',
    'education expenditure \nper person ',
    'school life expectancy (YEARS)',
    'unemployment (%)',
    'government spending score',
    'government expenditure (% of GDP)',
    'political rights score ',
    'civil liberties score ',
    'political stability & absence of violence',
    'government effectiveness',
    'regulatory quality',
    'rule of law',
    'control of corruption',
    'judicial effectiveness score',
    'government integrity score',
    'property rights score',
    'tax burden score',
    'overall economic freedom score',
    'financial freedom score',
    'women MPs (% of all MPs)'
]

d3.csv("/data/country-data.csv", function(error, data) {
    console.log('data: ', data )
    let dataWithValues = []            

    for (let i=4; i<data.length; i++) {
        let value = 0
        parseFloat(data[i]['happy planet index']) ? value += parseFloat(data[i]['happy planet index']) : value+=0
        parseFloat(data[i]['human development index']) ? value += parseFloat(data[i]['human development index']) : value+=0
        parseFloat(data[i]['world happiness report score']) ? value += parseFloat(data[i]['world happiness report score']) : value+=0
        // parseFloat(data[i]['GDP \n(billions PPP)']) ? value += parseFloat(data[i]['GDP \n(billions PPP)']) : value+=0
        parseFloat(data[i]['GDP per capita (PPP)']) ? value += parseFloat(data[i]['GDP per capita (PPP)']) : value+=0
        parseFloat(data[i]['GDP growth\n(annual %)']) ? value += parseFloat(data[i]['GDP growth\n(annual %)']) : value+=0
        parseFloat(data[i]['health expenditure \n% of GDP']) ? value += parseFloat(data[i]['health expenditure \n% of GDP']) : value+=0
        parseFloat(data[i]['health expenditure \nper person']) ? value += parseFloat(data[i]['health expenditure \nper person']) : value+=0
        parseFloat(data[i]['education expenditure\n% of GDP']) ? value += parseFloat(data[i]['education expenditure\n% of GDP']) : value+=0
        parseFloat(data[i]['education expenditure \nper person ']) ? value += parseFloat(data[i]['education expenditure \nper person ']) : value+=0
        parseFloat(data[i]['school life expectancy (YEARS)']) ? value += parseFloat(data[i]['school life expectancy (YEARS)']) : value+=0
        parseFloat(data[i]['unemployment (%)']) ? value += parseFloat(data[i]['unemployment (%)']) : value+=0
        parseFloat(data[i]['government spending score']) ? value += parseFloat(data[i]['government spending score']) : value+=0
        parseFloat(data[i]['government expenditure (% of GDP)']) ? value += parseFloat(data[i]['government expenditure (% of GDP)']) : value+=0
        parseFloat(data[i]['political rights score ']) ? value += parseFloat(data[i]['political rights score ']) : value+=0
        parseFloat(data[i]['civil liberties score ']) ? value += parseFloat(data[i]['civil liberties score ']) : value+=0
        parseFloat(data[i]['political stability & absence of violence']) ? value += parseFloat(data[i]['political stability & absence of violence']) : value+=0
        parseFloat(data[i]['government effectiveness']) ? value += parseFloat(data[i]['government effectiveness']) : value+=0
        parseFloat(data[i]['regulatory quality']) ? value += parseFloat(data[i]['regulatory quality']) : value+=0
        parseFloat(data[i]['rule of law']) ? value += parseFloat(data[i]['rule of law']) : value+=0
        parseFloat(data[i]['control of corruption']) ? value += parseFloat(data[i]['control of corruption']) : value+=0
        parseFloat(data[i]['judicial effectiveness score']) ? value += parseFloat(data[i]['judicial effectiveness score']) : value+=0
        parseFloat(data[i]['government integrity score']) ? value += parseFloat(data[i]['government integrity score']) : value+=0
        parseFloat(data[i]['property rights score']) ? value += parseFloat(data[i]['property rights score']) : value+=0
        parseFloat(data[i]['tax burden score']) ? value += parseFloat(data[i]['tax burden score']) : value+=0
        parseFloat(data[i]['overall economic freedom score']) ? value += parseFloat(data[i]['overall economic freedom score']) : value+=0
        parseFloat(data[i]['financial freedom score']) ? value += parseFloat(data[i]['financial freedom score']) : value+=0
        parseFloat(data[i]['women MPs (% of all MPs)']) ? value += parseFloat(data[i]['women MPs (% of all MPs)']) : value+=0

        value = (value/27)/100

        dataWithValues.push({
            name: data[i].indicator,
            totalValue: value
        })
        

    }
    // let usa = data.filter(d => d.indicator = 'United States')
    //     console.log('usa: ', usa)
    console.log('dataWithValues: ', dataWithValues)

})

// value: parseFloat(data[i][selected].replace(/,/g, ''))