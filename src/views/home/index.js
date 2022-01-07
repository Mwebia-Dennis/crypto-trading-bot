
import React, {useEffect} from 'react'
import { Box, Grid, Paper, Typography, Divider,MenuItem, FormControl, Select, Card,
    CardContent, List, ListItem, ListItemText
} from '@mui/material'
import { useStyles } from './style.js'
import DashboardCard from '../../components/DashboardCard'
import Chart from '../../components/Chart'
import Footer from '../../components/footer/index.js'
import { useDispatch,useSelector } from 'react-redux'
import { getPredictions, getClosePrices } from '../../store/reducers/predict/predict.actions'
import { 
    getClosePricesValues, 
    getCloseDateValues, 
    getValueDifference,
    getPredictedValues 
} from '../../util/functions.js'
import { red, green } from '@mui/material/colors';
const predictedPrices = {
    dates: [],
    prices: []
}

export default function Home () {
    const classes = useStyles()
    const dispatch = useDispatch()
    const predictReducer = useSelector((state) => state.predictReducer)
    const models = ["LSTM", "GRU"]
    const [modelType, setModelType] = React.useState(models[0]);
    const closePrices = getClosePricesValues(predictReducer.closePrices)
    const dates = getCloseDateValues(predictReducer.closePrices)
    const realPriceDifference = closePrices.length > 0?
        getValueDifference(closePrices[closePrices.length-2], closePrices[closePrices.length-1]):0

    const handleModelTypeChange = (event) => {
        setModelType(event.target.value);
    };


    if("predicted_close_price" in predictReducer.data) {
        
            if (predictReducer.closePrices.length > 0) {
                let predictedDate = new Date(predictReducer.closePrices["0"]["time_close"])
                predictedDate = new Date(predictedDate.getTime() + (1000*60))
                if(!predictedPrices.dates.includes(predictedDate.toString())){
                    predictedPrices.dates.push(predictedDate.toString())
                    predictedPrices.prices.push(parseFloat(predictReducer.data.predicted_close_price[0]).toFixed(2))
                }
            }
    }
    
    const predictedPriceDifference = predictedPrices.prices.length > 0?getValueDifference(closePrices[closePrices.length-1],
             predictedPrices.prices[predictedPrices.prices.length-1]):{
                change: 0,
                percentChange: 0,
                isDrop: false
            }

    const modelError = predictedPrices.prices.length > 0?
        getValueDifference(predictedPrices.prices[predictedPrices.prices.length - 2],
            closePrices[closePrices.length-1]):
        {
            change: 0,
            percentChange: 0,
            isDrop: false
        }
    
    const bitcoinPrice = closePrices.length > 0?closePrices[closePrices.length-1]:0
    const currentPrices = [
        {
            price:bitcoinPrice,
            name: 'Bitcoin',
            percentChange: realPriceDifference !== 0?realPriceDifference['percentChange']:0, 
            percentChangeAmt: realPriceDifference !== 0?realPriceDifference['change']:0, 
            isDecrease: realPriceDifference !== 0?realPriceDifference['isDrop']:false,
        },
        {
            price: predictedPrices.prices[predictedPrices.prices.length-1],
            name: 'Model Prediction',
            percentChange: predictedPriceDifference['percentChange'], 
            percentChangeAmt: predictedPriceDifference['change'], 
            isDecrease: predictedPriceDifference['isDrop']
        },
        {
            price: '50,875',
            name: 'Ethereum',
            percentChange: '-25%', 
            percentChangeAmt: '-3500', 
            isDecrease: true
        },
        {
            price: '13,000',
            name: 'Cardano',
            percentChange: '10%', 
            percentChangeAmt: '1200', 
            isDecrease: false
        },

    ]


    useEffect(() => {
        
        dispatch(getClosePrices())
        const timer = setInterval(() => {
            dispatch(getClosePrices())
          }, 1000 * 60)// 1 minute
          return () => clearInterval(timer)
    }, [modelType])

    useEffect(() => {
        
        if(closePrices.length > 5) {
            dispatch(getPredictions(closePrices.slice(closePrices.length - 5).join(','), modelType))
            
        }
    }, [bitcoinPrice])

    return (

        <Box className={classes.container}>


            <Grid container style={{marginBottom: 10}}>
                {

                    currentPrices.map((item)=><Grid item xs={12} md={3} key={item.name}>
                        <DashboardCard data={item}/></Grid>)
                }

            </Grid>

            <Paper className={classes.paper}>

                <Grid container>

                    <Grid item md={9} style={{marginTop: 14, paddingLeft: 7}}>
                        <Typography variant="p" className={classes.titleInfo} >
                            Real Vs Predicted Bitcoin Close Prices
                        </Typography>
                        <br />
                        <Typography variant="p" className={classes.title} >

                            Bitcoin to United States Dollar (BTC/USD)
                        </Typography>
                    </Grid>
                    <Grid item md={2}>


                        <FormControl sx={{ m: 1, minWidth: 100 }}>
                            <Select
                                value={modelType}
                                onChange={handleModelTypeChange}
                                displayEmpty
                            >
                                {
                                    models.map(item=><MenuItem key={item} value={item}>{item}</MenuItem>)
                                }
                            </Select>
                        </FormControl>

                    </Grid>

                </Grid>
                <p />
                <Divider />
                <p />

                <Grid container>

                    <Grid item md={2}></Grid>
                    <Grid item md={5}>

                        <Typography variant="h3">
                            {closePrices.length > 0?closePrices[closePrices.length-1]:0}

                            <Typography variant="span" 
                                style={{color: realPriceDifference !== 0?
                                        realPriceDifference.isDrop?red[600]:green[800]
                                    :"#000"}}
                                className={classes.priceChange}
                            >

                                {
                                    realPriceDifference !== 0?realPriceDifference['change'] + "("+realPriceDifference['percentChange']+"%)"
                                        :""
                                 
                                }
                            </Typography>
                        </Typography> 
                        <Typography variant="span" className={classes.priceInfo}>
                            {
                                predictReducer.closePrices.length > 0?
                                   new Date(predictReducer.closePrices["0"]["time_close"]).toString():
                                   0
                            } . Market Close
                        </Typography>

                    </Grid>
                    <Grid item md={5}>

                        <Typography variant="h3">
                            {predictedPrices.prices.length > 0?predictedPrices.prices[predictedPrices.prices.length - 1]:0}

                            <Typography variant="span"
                                style={{color: predictedPriceDifference.isDrop?red[600]:green[800]}}
                                className={classes.priceChange}>

                                {predictedPriceDifference['change'] + "("+predictedPriceDifference['percentChange']+"%)"}
                            </Typography>
                        </Typography> 
                        <Typography variant="span" className={classes.priceInfo}>
                            {predictedPrices.dates[predictedPrices.dates.length - 1]} . Predicted Close
                        </Typography>

                    </Grid>

                </Grid>


                <Box className={classes.chart} >

                    <Grid container>
                        <Grid item md={8} xs={12}>
                            <Chart 
                                _data={closePrices}
                                labels = {dates}
                                predictedData = {
                                    getPredictedValues ( predictedPrices, predictReducer.closePrices.map(item=>item["time_close"]) )
                                    // getInitialValues(
                                    //     predictReducer.closePrices.map(item=>item["time_close"]),

                                    //     predictedPrices.dates[0]
                                    // ).concat(predictedPrices.prices)
                                } //{predictedPrices.prices}
                            />
                        </Grid>
                        <Grid item md={4}>

                            <Box sx={{ width: '100%' }}>
                                <Card className={classes.analysisCard} variant="outlined">

                                    <CardContent>

                                        <List >
                                            <ListItem>
                                                <ListItemText
                                                    secondary={closePrices.length > 0?closePrices[closePrices.length-1]:0}
                                                    primary={"Current Close"}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText
                                                    secondary={predictedPrices.prices.length > 1?predictedPrices.prices[predictedPrices.prices.length - 2]:0}
                                                    primary={"Previous Predicted Close"}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText
                                                    secondary={
                                                        <span style={{color: "#0000ff"}} >{Math.abs(modelError.percentChange) + "%"} </span>
                                                    }
                                                    primary={"Model Error"}
                                                    style={{color: "#0000ff"}}
                                                    
                                                />
                                            </ListItem>
                                        </List>

                                    </CardContent>

                                </Card>
                            </Box>

                        </Grid>
                    </Grid>   

                </Box>



            </Paper>


            <Footer />


            
            

        </Box>
    )
    
}