import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Grid, IconButton, Link, Typography } from '@mui/material';
import { appName } from '../../util/constant'
import { useStyles } from './style.js'
import { AddShoppingCart, ArrowBackIosNew, Calculate, HelpOutline, Info, LocalAtm, PhoneForwarded, Settings, Timeline } from '@mui/icons-material';

export default function TemporaryDrawer(props) {

    const {open, toggleDrawer} = props;
    const classes = useStyles()
    const navList = [
      {
        name: 'Dashboard',
        url: '/',
        icon: <Timeline />
      },
      {
        name: 'Predict',
        url: '/predict',
        icon: <Calculate />
      },
      {
        name: 'Crypto Wallet',
        url: '/wallet',
        icon: <LocalAtm />
      },
      {
        name: 'Buy & Sell',
        url: '/buy_sell',
        icon: <AddShoppingCart />
      },
      {
        name: 'About Us',
        url: '/about',
        icon: <Info />
      },
      {
        name: 'Contact',
        url: '/contact',
        icon: <PhoneForwarded />
      },
      {
        name: 'Settings',
        url: '/settings',
        icon: <Settings />
      },
      {
        name: 'Help & Support',
        url: '/support',
        icon: <HelpOutline />
      },
    ]

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >

        <Grid container className={classes.drawerLogoBox}>

          <Grid item xs="9">
            <Typography 
                variant="h5"
                noWrap
                component="div"
                className={classes.drawerLogo}
            >
              {appName}
            </Typography>


          </Grid>

          <Grid item="3">

            <IconButton
              color="inherit"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(false)}
            >
              <ArrowBackIosNew />
            </IconButton>

          </Grid>

          

        </Grid>
      <Divider />

      <List>
        {navList.map((item) => (

          <Link href={item.url} key={item.name} className={classes.links}>
            <ListItem button >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
            anchor={"left"}
            open={open}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
    </div>
  );
}
