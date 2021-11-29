
import Home from '../views/home'
import PredictForm from '../views/Forms/predict'
import MainTheme from '../themes/MainTheme'

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
      }
  ]