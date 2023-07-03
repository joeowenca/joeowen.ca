import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
  
import NavMenu from './components/navigation/NavMenu'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Intro from './pages/home/Intro'
import Photography from './pages/photography/Photography'
import Videos from './pages/videos/Videos'
import Music from './pages/music/Music'
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
                <Route path="/photography/*" element={<Photography nav={nav} setNav={setNav} />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/music" element={<Music />} />
                <Route path="/projects" element={<Projects />} />
            </Routes> 
            <Footer />
        </div>
    )
}

export default App