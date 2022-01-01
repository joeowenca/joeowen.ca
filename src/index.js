import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import HomePage from './HomePage'
import ScrollTransition from './ScrollTransition'

import './stylesheets/styles.css'
import './stylesheets/header-styles-mobile.css'
import './stylesheets/homepagecontent-styles-mobile.css'
import './stylesheets/intro-styles-mobile.css'
import './stylesheets/navmenu-styles-mobile.css'
import './stylesheets/footer-styles-mobile.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/joeowen.ca" element={<HomePage />} />
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

document.body.onscroll = function() {ScrollTransition()}