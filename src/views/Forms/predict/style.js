import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({

    container: {

        width: '25%',
        padding: '25px 20px',
        border: '1px solid #d3d3d3',
        borderRadius: '5px',
        backgroundColor: '#fff',
        height: 'auto',
        margin: '15px 38%',

        [theme.breakpoints.down('sm')]: {
            padding: '5%',
            width: '90%',
            height: '100vh',
            margin: 0,
            border: 'none',
            borderRadius: '0',
        },
    },
    title: {
        marginBottom: '10px'
    },
    input: {
        marginBottom: 10
    },
    btnContainer: {

        marginTop: '5px',
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        margin: '0 10%',
        [theme.breakpoints.down('sm')]: {
            margin: 0
        }

    },


}))