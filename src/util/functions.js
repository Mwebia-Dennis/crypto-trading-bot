
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