import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'

import Home from '../pages/HOME'

const Routes = props => {
  return (
    //Controle de rota
    <Router>
      {/* Permite com que troque de URL */}
      <Switch>
        {/* <Route path="/:state/:city" element={<Home city={props.city} />} /> */}
        <Route path="/sp/sao-paulo" element={<Home city={props.city} />} />
      </Switch>
    </Router>
  )
}

export default Routes
