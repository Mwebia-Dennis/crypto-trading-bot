
import Home from '../views/home'
import PageNotFound from '../views/PageNotFound'
import PredictForm from '../views/Forms/predict'
import MainTheme from '../themes/MainTheme'
import { Navigate } from 'react-router';

export const routes = ()=> [
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
      path: '/',
      element: <MainTheme />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/predict', element: <PredictForm /> },
      ]
    },
    {
        path: '404',
        element : <PageNotFound />,
        children: [ 
            { path: '*', element: <Navigate to="/404" replace /> },
        ]
    },
    { path: '*', element: <Navigate to="404" replace /> },
  ]