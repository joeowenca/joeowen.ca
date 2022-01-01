import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/styles.css'
import './stylesheets/header-styles-mobile.css'
import './stylesheets/homepagecontent-styles-mobile.css'
import './stylesheets/intro-styles-mobile.css'
import './stylesheets/navmenu-styles-mobile.css'
import './stylesheets/footer-styles-mobile.css'
import App from './App'
import ScrollTransition from './ScrollTransition'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

document.body.onscroll = function() {ScrollTransition()}