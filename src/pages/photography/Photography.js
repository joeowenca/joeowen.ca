import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom"

// Category thumbnails
import sportsThumbnail from './images/category-thumbnails/sports.jpg'
import automotiveThumbnail from './images/category-thumbnails/automotive.jpg'
import natureThumbnail from './images/category-thumbnails/nature.jpg'
import portraitsThumbnail from './images/category-thumbnails/portraits.jpg'
import miscThumbnail from './images/category-thumbnails/misc.jpg'

// Category components
import Sports from './categories/Sports'
import Automotive from './categories/Automotive'
import Nature from './categories/Nature'
import Portraits from './categories/Portraits'
import Misc from './categories/Misc'
import Lightbox from './lightbox/Lightbox'

// Stylesheets
import './stylesheets/photography-gallery.css'

let Photography = (props) => {
    const [lightbox, setLightbox] = useState(false)
    const [index, setIndex] = useState(0)
    const [images, setImages] = useState()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const location = useLocation().pathname

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }
      
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    useEffect(() => {
        if (location == '/photography')
            document.title = 'Joe Owen | Photography'
    }, [location])

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
                                <img src={sportsThumbnail} className="photography-category" alt="sports category"></img>
                                <h2>Sports</h2>
                                <button className="view-more"><Link to="/photography/sports">View More</Link></button>

                                <img src={automotiveThumbnail} className="photography-category" alt="automotive category"></img>
                                <h2>Automotive</h2>
                                <button className="view-more"><Link to="/photography/automotive">View More</Link></button>

                                <img src={natureThumbnail} className="photography-category" alt="nature category"></img>
                                <h2>Nature</h2>
                                <button className="view-more"><Link to="/photography/nature">View More</Link></button>

                                <img src={portraitsThumbnail} className="photography-category" alt="portraits category"></img>
                                <h2>Portraits</h2>
                                <button className="view-more"><Link to="/photography/portraits">View More</Link></button>

                                <img src={miscThumbnail} className="photography-category"alt="misc category"></img>
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