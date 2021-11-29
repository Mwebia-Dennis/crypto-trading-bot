import * as React from 'react';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red, green } from '@mui/material/colors';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { useStyles } from './style.js'

export default function BasicCard(props) {

    const { data} = props
    const classes = useStyles()
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        
        <Grid container>
            
            <Grid item xs={3}>

                <Avatar sx={{ bgcolor: data.isDecrease?red[100]:green[100], marginTop: 0.3, }} variant="rounded" >
                    {
                        data.isDecrease?<ArrowDownward style={{color: data.isDecrease?red[600]:green[600]}}/>:
                        <ArrowUpward style={{color: data.isDecrease?red[600]:green[600]}}/>
                    }
                    
                </Avatar>

            </Grid>
            <Grid item xs={6}>
                <span className={classes.cardText + " "+ classes.cardTitle} >
                    {data.name}
                </span><br/>
                <span className={classes.cardText} >
                    {data.price}
                </span>
            </Grid>
            <Grid item xs={3}>
                <span 
                    className={classes.cardText+ " "+ classes.cardTextRight}
                    style={{color: data.isDecrease?red[900]:green[900]}}
                >
                    {data.isDecrease?data.percentChange:"+"+data.percentChange}%
                </span><br/>
                <span 
                    className={classes.cardText+ " "+ classes.cardTextRight}
                    style={{color: data.isDecrease?red[900]:green[900]}}
                >
                    {data.isDecrease?data.percentChangeAmt:"+"+data.percentChangeAmt}
                </span>
            </Grid>

        </Grid>


      </div>
    </Card>
  );
}
