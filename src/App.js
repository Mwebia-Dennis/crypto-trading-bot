import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {routes} from './components/routes'
import { useRoutes } from 'react-router-dom'
import axios from 'axios';


const theme = createTheme();

function App() {

  
  axios.defaults.baseURL = 'https://penguins-trading-bot.herokuapp.com/'
  const element = useRoutes(routes())
  
  return (

    <ThemeProvider theme={theme}>

        {element}
    </ThemeProvider>
  );
}

export default App;
