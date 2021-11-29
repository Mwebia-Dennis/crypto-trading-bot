import {
    LOADING_PREDICTIONS,
    CLEAR_ERROR,
    SET_ERROR,
    SET_PRICES,
    SET_DATA
} from './predict.types'

const initialState = {
    loading: false,
    data: {},
    errors: null,
    closePrices: [],
  };


  
export const predictReducer = (state = initialState, action)=> {

    switch (action.type) {
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
                loading: false,
            };
        
        case LOADING_PREDICTIONS:
            return {
                ...state,
                loading: true,
            };

        
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

            
        case SET_PRICES:
            return {
                ...state,
                closePrices: action.payload,
                loading: false,
            };

        case SET_DATA:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        
        default:
            return state;
    }
}