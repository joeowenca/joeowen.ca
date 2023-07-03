import React from 'react'
import ReactDOM from 'react-dom'

import ScrollTransition from './ScrollTransition'
import ChangeColor from './ChangeColor'
import Header from './components/header/Header'
import App from './App'
import Splashscreen from './Splashscreen'

import './stylesheets/styles.css'
import './stylesheets/header-styles-mobile.css'
import './stylesheets/navmenu-styles-mobile.css'
import './stylesheets/footer-styles-mobile.css'
import './stylesheets/photography-gallery.css'
import './stylesheets/lightbox.css'
import { HashRouter } from 'react-router-dom'

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