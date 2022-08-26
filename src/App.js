import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
  
import NavMenu from './NavMenu'
import Footer from './Footer'
import Home from './Home'
import Intro from './Intro'
import Photography from './Photography'
import Videos from './Videos'
import Music from './Music'
import Projects from './Projects'

function App() {
    const [nav, setNav] = useState(false)

    return(
        <div className="container">
            {/* <Header /> now lives in index.js */}
            <NavMenu nav={nav} />
            <Routes>
                <Route exact path="/" element={
                    <>
                        <Home />
                        <Intro />
                    </>
                } />
                <Route path="/photography" element={<Photography nav={nav} setNav={setNav} />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/music" element={<Music />} />
                <Route path="/projects" element={<Projects />} />
            </Routes> 
            <Footer />
        </div>
    )
}

export default App