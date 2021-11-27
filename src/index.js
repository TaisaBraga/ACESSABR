import React from 'react'
import ReactDOM from 'react-dom'
import './styles/global.scss'
import Header from './components/Header'
import Routes from './routes'
import Curator from './components/Curator'
import Footer from './components/Footer'
import Places from './components/Places'

const CONFIG = {
  state: 'SP',
  city: 'São Paulo'
}

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header city={CONFIG.city} state={CONFIG.state} />
      <Routes city={CONFIG.city} state={CONFIG.state} />
      <Places />
      <Curator />
    </div>
    <Footer />
  </div>,
  document.getElementById('root')
)
