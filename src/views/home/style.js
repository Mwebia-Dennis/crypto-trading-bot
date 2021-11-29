import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({

  container: {
    width: '80%',
    marginLeft: '10%',
    marginTop: '20px',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
      marginTop: 0,
    },
  },
  paper: {
    padding: '15px 10px'
  },
  title: {
    fontSize: '22px',
    padding: '5px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    }
  },
  titleInfo: {
    fontSize: 15,
    color: 'rgba(0,0,0,.7)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '11px',
    }
  },
  priceInfo: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'sans-serif'
  },
  priceChange: {
    paddingLeft: '10px',
    fontSize: '20px !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px !important',
    }
  },
  chart: {

    marginTop: 15,
    padding: 10,
    width: '100%  !important'
  },
  analysisCard: {
    width: '80%',
    marginLeft: '15%',
    marginTop: 45,
      borderRadius: '20px !important',
      backgroundColor: '#f2f2f2 !important',
      
      [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
  }

}))