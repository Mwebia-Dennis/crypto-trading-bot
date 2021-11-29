import { combineReducers } from 'redux';
import { predictReducer } from './predict/predict.reducer'


export default combineReducers({

    predictReducer: predictReducer,
});