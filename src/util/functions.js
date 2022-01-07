
export const getClosePricesValues = (data)=>{
    
    return data.map(item=>item["price_close"])
}

export const getCloseDateValues = (data)=>{
    
    let _data = []
    if(data.length > 0){
        _data = data.map(item=>{
            const date = new Date(item["time_close"])
            return date.getHours() + ":" + formatMinutes(date.getMinutes())
        })
        _data = _data.reverse().concat(getListOfNewDates(data[0]["time_close"]))
    }
    return _data
}

const getListOfNewDates = (currentDate, n_future = 10)=> {
    let _currentDate = currentDate
    const dates = []
    for (let i = 0; i < n_future; i++) {
        
        const newDate1 = new Date(new Date(_currentDate).getTime() + (1000*60))
        // newDate1.setMinutes(newDate1.getMinutes() + 1)
        dates.push(newDate1.getHours() + ":" + formatMinutes(newDate1.getMinutes()))
        _currentDate = newDate1.toString()
        
    }

    return dates
}


export const getValueDifference = (previousValue, currentValue)=>{
    const change = parseFloat(currentValue - previousValue).toFixed(2)
    const percentChange = parseFloat((change/previousValue) * 100).toFixed(3)
    return {
        change: (change < 0)?change: "+"+change,
        percentChange: change < 0?percentChange:"+"+percentChange,
        isDrop: (change < 0)
    }
}
function formatMinutes(mins){
    return mins.toString().length > 1?mins:"0"+mins
}

export function getInitialValues (closePricesDates, firstPredictDate) {



    const predictDate = new Date(firstPredictDate)
    const data = closePricesDates.filter(date=>predictDate.getTime() > new Date(date).getTime() )
    return [...Array(data.length).keys()].map(()=>undefined)


}

export function getPredictedValues (predictedPrices, closePricesDates) {

    const values = []
    console.log(predictedPrices.prices)
    /**
     * loop through all dates from the bitcoin api
     * if the date is in the predicted array add the price else add none
     * then loop through predited array to check if there is unique data from real dates and add the price
     */
    closePricesDates.forEach(date => {
        if(predictedPrices.dates.includes( new Date(date).toString() )) {
            values.push(predictedPrices.prices[predictedPrices.dates.indexOf(new Date(date).toString())])
        }else {
            values.push(undefined)
        }
        
    })

    predictedPrices.dates.forEach((_date, i)=>{
        if(!closePricesDates.includes( new Date(_date).toString() )) {
            values.push(predictedPrices.prices[i])
        }
    })

    return values


}