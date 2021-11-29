import { Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import {appName} from '../../util/constant'

export default function Footer (props) {
    
    return (

        <div>
            <Paper style={{padding: '20px 30px', margin: '10px 0'}}>

                <Grid container>
                    <Grid item md={8}>

                        <Grid container>
                            <Grid item xs={12} md="3"><Typography variant="h5">{appName}</Typography></Grid>
                            {
                                ["Help", "Privacy", "Terms"].map((item)=>
                                    <Grid item xs={4} md="2" key={item} style={{marginTop: 5}}>
                                        <Link href="#" style={{color: '#000', textDecoration: 'none'}}>{item}</Link>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Grid>
                    <Grid item md={4} style={{marginTop: 3}}>
                        <span>&copy; copyright 2021 Penguins Tech</span>
                    </Grid>
                </Grid>

            </Paper>
        </div>
    )

}
