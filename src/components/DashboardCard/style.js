import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({

    card: {
        width: 220,
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: "5px 5%"
        }
    },
    cardContent: {

        padding: "5px 10px",
        [theme.breakpoints.down('sm')]: {
            padding: "10px",
        }
    },
    cardText: {
        fontSize: 12,
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
        }
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardTextRight: {
        textAlign: 'right',
    }

}))