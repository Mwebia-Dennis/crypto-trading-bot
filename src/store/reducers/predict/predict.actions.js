import axios from 'axios'
import {
    LOADING_PREDICTIONS,
    CLEAR_ERROR,
    // CLEAR_MESSAGE,
    SET_ERROR,
    SET_PRICES,
    SET_DATA
} from './predict.types'
import { apiKey, apiBaseUrl } from '../../../util/constant'


export const getPredictions = (closePrices, modelType = 'lstm') => (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"}
    }
    dispatch({ type: LOADING_PREDICTIONS })
    axios.get(axios.defaults.baseURL + '?close_prices='+closePrices+'&model_type='+modelType, config)
    .then((res)=>{
        
        console.log("boom")
        dispatch({ type: CLEAR_ERROR})
        dispatch({
            type: SET_DATA,
            payload: res.data
        })


    })
    .catch((error)=> {
        
        dispatch({
            type: SET_ERROR,
            errors: error   
        })
        console.log(error)
    })

}

export const getClosePrices = ( period_id = "1MIN", limit = 10) => (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            "X-CoinAPI-Key": apiKey,
            "Access-Control-Allow-Origin": "*"}
    }
    dispatch({ type: LOADING_PREDICTIONS })
    axios.get(apiBaseUrl + "latest?period_id="+period_id+"&limit="+limit, config)
    .then((res)=>{
        
        dispatch({ type: CLEAR_ERROR})
        dispatch({
            type: SET_PRICES,
            payload: res.data
        })


    })
    .catch((error)=> {
        
        dispatch({
            type: SET_ERROR,
            errors: error
        })
    })

}