import React, { useState, useEffect } from 'react'

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
    const [category, setCategory] = useState('none')

    let changeCategory = (category) => {
        window.scrollTo(0, 0)
        setCategory(category)
    }

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

    let DisplayCategory = () => {
        switch(category) {
            case 'sports':
                return (
                    <Sports screenWidth={screenWidth} showLightbox={showLightbox} changeCategory={changeCategory} />
                ) 
            case 'automotive':
                return (
                    <Automotive screenWidth={screenWidth} showLightbox={showLightbox} changeCategory={changeCategory} />
                ) 
            case 'nature':
                return (
                    <Nature screenWidth={screenWidth} showLightbox={showLightbox} changeCategory={changeCategory} />
                ) 
            case 'portraits':
                return (
                    <Portraits screenWidth={screenWidth} showLightbox={showLightbox} changeCategory={changeCategory} />
                ) 
            case 'misc':
                return (
                    <Misc screenWidth={screenWidth} showLightbox={showLightbox} changeCategory={changeCategory} />
                )
            case 'none':
                return (
                    <>
                        <h1>Photography</h1>
                        <img src={sportsImage} className="photography-category"></img>
                        <h2>Sports</h2>
                        <button className="view-more" onClick={() => changeCategory('sports')}>View More</button>

                        <img src={automotiveImage} className="photography-category"></img>
                        <h2>Automotive</h2>
                        <button className="view-more" onClick={() => changeCategory('automotive')}>View More</button>

                        <img src={natureImage} className="photography-category"></img>
                        <h2>Nature</h2>
                        <button className="view-more" onClick={() => changeCategory('nature')}>View More</button>

                        <img src={portraitsImage} className="photography-category"></img>
                        <h2>Portraits</h2>
                        <button className="view-more" onClick={() => changeCategory('portraits')}>View More</button>

                        <img src={miscImage} className="photography-category"></img>
                        <h2>Misc</h2>
                        <button className="view-more" onClick={() => changeCategory('misc')}>View More</button>
                    </>
                )
        }
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
                <DisplayCategory />
            </div>
        </div>
    )
}

export default Photography