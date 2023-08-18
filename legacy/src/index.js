import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

// Components
import ScrollTransition from './scripts/ScrollTransition'
import ChangeColor from './scripts/ChangeColor'
import Header from './components/header/Header'
import App from './App'
import Splashscreen from './Splashscreen'

// Stylesheets
import './stylesheets/styles.css'

window.onload = function() {ChangeColor()}
document.body.onscroll = function() {ScrollTransition()}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Splashscreen />
      <div className="mobile-only">
        <Header />
        <App />
      </div>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)