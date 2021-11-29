import { Dialog, DialogTitle, Typography, CircularProgress, Box, DialogContent, DialogActions, Button } from '@mui/material'
import React from 'react'

export default function ResultsModal(props) {

    const { onClose, isLoading, prediction, open } = props;

    const handleClose = () => {
        onClose()
    };
    return (
        <Dialog onClose={handleClose} open={open}>

            <DialogTitle>
                {
                    isLoading?"":"Your Bitcoin prediction is:"
                }
            </DialogTitle>
            <DialogContent>

                <Box>
                    {isLoading?<CircularProgress />:
                        <Typography variant="h5" style={{fontWeight: 'bold',textAlign: 'center', color: '#ff4d4d'}}>
                            $. {parseFloat(prediction).toFixed(2)}
                        </Typography>}
                </Box>

            </DialogContent>
            {
                isLoading?"":
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
            }
            
            

        </Dialog>
    )
}