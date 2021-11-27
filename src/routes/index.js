import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'
import Home from '../pages/HOME'
import { LocationContext } from '../contexts/locationContext'
import { useState } from 'react'
import Header from '../components/Header'

const Routes = props => {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  return (
    <LocationContext.Provider value={{ city, setCity, state, setState }}>
      <Header />
      <Switch>
        <Route path="/:state/:city" element={<Home />} />
      </Switch>
    </LocationContext.Provider>
  )
}

export default Routes
