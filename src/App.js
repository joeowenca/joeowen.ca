import React, { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
  
import Header from './Header'
import NavMenu from './NavMenu'
import Footer from './Footer'

import Home from './Home'
import Intro from './Intro'
import Photography from './Photography'
import Videos from './Videos'
import Music from './Music'
import Projects from './Projects'

function App() {
    const location = useLocation()
    const [home, setHome] = useState(false)

    return(
        <div className="container">
            <Header location={location} home={home} setHome={setHome} />
            <NavMenu />
            <Routes>
                <Route exact path="/" element={
                    <>
                        <Home />
                        <Intro />
                    </>
                } />
                <Route path="/photography" element={<Photography />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/music" element={<Music />} />
                <Route path="/projects" element={<Projects />} />
            </Routes> 
            <Footer />
        </div>
    )
}

export default App