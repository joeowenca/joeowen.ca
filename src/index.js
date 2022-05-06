import React from 'react'
import ReactDOM from 'react-dom'

import ScrollTransition from './ScrollTransition'
import App from './App'

import './stylesheets/styles.css'
import './stylesheets/header-styles-mobile.css'
import './stylesheets/homepagecontent-styles-mobile.css'
import './stylesheets/intro-styles-mobile.css'
import './stylesheets/navmenu-styles-mobile.css'
import './stylesheets/footer-styles-mobile.css'
import { HashRouter } from 'react-router-dom'

document.body.onscroll = function() {ScrollTransition()}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)