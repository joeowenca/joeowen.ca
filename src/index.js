import React from 'react'
import ReactDOM from 'react-dom'

import ScrollTransition from './ScrollTransition'
import ChangeColor from './ChangeColor'
import Header from './Header'
import App from './App'

import './stylesheets/styles.css'
import './stylesheets/header-styles-mobile.css'
import './stylesheets/homepagecontent-styles-mobile.css'
import './stylesheets/intro-styles-mobile.css'
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
      <Header />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)