import * as React from 'react';
import { Box, TextField, FormControl,InputLabel,Select, MenuItem,Button, Typography, Divider, Link }  from '@mui/material';
import { useStyles } from './style.js'
import Footer from '../../../components/footer/index.js';
import { useDispatch,useSelector } from 'react-redux';
import { getPredictions } from '../../../store/reducers/predict/predict.actions'
import ResultsModal from '../../../components/ResultsModal'

export default function PredictForm() {

    const [open, setOpen] = React.useState(false);
    const classes = useStyles()
    const dispatch = useDispatch()
    const predictReducer = useSelector((state) => state.predictReducer)
    const [modelType, setModelType] = React.useState('LSTM')
    const [formInput, setFormInput] = React.useState({})

    
    const handleModalOpen = () => {
        setOpen(true);
    };
    
    const handleModalClose = (value) => {
        setOpen(false);
    };
    const handleModelTypeChange = (e) => {
        setModelType(e.target.value)
    }

    const handleFormInput = (e, index) => {
        const data = formInput
        data[index] = e.target.value
        setFormInput(data)
    }

    const handleFormSubmit = () => {
        const closePrices = []
        for (let i = 1; i < 6; i++) {
            if( i in formInput) {
                closePrices.push(formInput[i])
            }
        }

        if(closePrices.length === 5) {
            dispatch(getPredictions( closePrices.join(','), modelType))
            handleModalOpen()
        }else {
            window.alert("All fields are required")
        }
        
    }


  return (

    <>
        <Box
        className={classes.container}
        >

            <div className={classes.title}>

                <Typography variant="h6">Predict bitcoin close price</Typography>

            </div>
            <Divider />
            <p/>
            <p/>

            {
                [1,2,3,4,5].map(item=>
                    <div className={classes.input}>
                        <TextField
                            key={item} 
                            fullWidth 
                            label={"close price "+item} 
                            id={"close price "+item} 
                            name={item}
                            size="small"
                            type="number"
                            onChange={(e)=>handleFormInput(e, item) }
                            
                            />
                    </div>
                )
            }

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Model Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={modelType}
                    label="Model Type"
                    size="small"
                    onChange={handleModelTypeChange}
                >
                    <MenuItem value={"LSTM"}>LSTM</MenuItem>
                    <MenuItem value={"GRU"}>GRU</MenuItem>
                </Select>
            </FormControl>

            <div style={{textAlign: 'center',marginTop: 20}}>
                <Link href="#">In need of help?</Link>
            </div>

            <div className={classes.btnContainer}>
                <Button variant="contained" size="small" onClick={handleFormSubmit}>Submit</Button>
            </div>

        
        </Box>
        <div className={classes.footer}>
            <Footer />
        </div>

        
        <ResultsModal
            isLoading={predictReducer.loading}
            open={open}
            prediction={predictReducer.loading?"":
                "predicted_close_price" in predictReducer.data?predictReducer.data.predicted_close_price[0]:0}
            onClose={handleModalClose}
        />

    </>
  );
}
