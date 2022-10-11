import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"

import sportsImage from './images/Photography Categories/sports.jpg'
import automotiveImage from './images/Photography Categories/automotive.jpg'
import natureImage from './images/Photography Categories/nature.jpg'
import portraitsImage from './images/Photography Categories/portraits.jpg'
import miscImage from './images/Photography Categories/misc.jpg'

import Sports from './Sports'
import Automotive from './Automotive'
import Nature from './Nature'
import Portraits from './Portraits'
import Misc from './Misc'
import Lightbox from './Lightbox'

let Photography = (props) => {
    const [lightbox, setLightbox] = useState(false)
    const [index, setIndex] = useState(0)
    const [images, setImages] = useState()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    let showLightbox = (index, images) => {
        setLightbox(true)
        setIndex(index)
        setImages(images)
        props.setNav(true)
        document.body.setAttribute("style", "overflow-y: hidden; -webkit-overflow-scrolling: touch;")
    }

    let hideLightbox = () => {
        setLightbox(false)
        props.setNav(false)
        document.body.setAttribute("style", "overflow-y: auto; -webkit-overflow-scrolling: touch;")
    }

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }
      
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div className="content">
            {lightbox ? 
                <Lightbox index={index} images={images} hideLightbox={hideLightbox} />
            : ""}

            <div className="photography-categories">
                <Routes>
                    <Route path="/sports" element={
                        <Sports 
                            screenWidth={screenWidth} 
                            showLightbox={showLightbox} 
                        />
                    } />

                    <Route path="/automotive" element={
                        <Automotive 
                            screenWidth={screenWidth} 
                            showLightbox={showLightbox}    
                        />
                    } />

                    <Route path="/nature" element={
                        <Nature 
                            screenWidth={screenWidth} 
                            showLightbox={showLightbox} 
                        />
                    } />

                    <Route path="/portraits" element={
                        <Portraits 
                            screenWidth={screenWidth} 
                            showLightbox={showLightbox}  
                        />
                    } />

                    <Route path="/misc" element={
                        <Misc 
                            screenWidth={screenWidth} 
                            showLightbox={showLightbox} 
                        />
                    } /> 

                    <Route exact path="/" element={
                            <>
                                <h1>Photography</h1>
                                <img src={sportsImage} className="photography-category" alt="sports category"></img>
                                <h2>Sports</h2>
                                <button className="view-more"><Link to="/photography/sports">View More</Link></button>

                                <img src={automotiveImage} className="photography-category" alt="automotive category"></img>
                                <h2>Automotive</h2>
                                <button className="view-more"><Link to="/photography/automotive">View More</Link></button>

                                <img src={natureImage} className="photography-category" alt="nature category"></img>
                                <h2>Nature</h2>
                                <button className="view-more"><Link to="/photography/nature">View More</Link></button>

                                <img src={portraitsImage} className="photography-category" alt="portraits category"></img>
                                <h2>Portraits</h2>
                                <button className="view-more"><Link to="/photography/portraits">View More</Link></button>

                                <img src={miscImage} className="photography-category"alt="misc category"></img>
                                <h2>Misc</h2>
                                <button className="view-more"><Link to="/photography/misc">View More</Link></button>
                            </>
                    } />
                </Routes>
            </div>
        </div>
    )
}

export default Photography