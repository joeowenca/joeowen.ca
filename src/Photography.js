import React, { useState, useEffect } from 'react'
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
                    <Sports screenWidth={screenWidth} showLightbox={showLightbox} setCategory={setCategory} />
                ) 
            case 'automotive':
                return (
                    <Automotive screenWidth={screenWidth} showLightbox={showLightbox} setCategory={setCategory} />
                ) 
            case 'nature':
                return (
                    <Nature screenWidth={screenWidth} showLightbox={showLightbox} setCategory={setCategory} />
                ) 
            case 'portraits':
                return (
                    <Portraits screenWidth={screenWidth} showLightbox={showLightbox} setCategory={setCategory} />
                ) 
            case 'misc':
                return (
                    <Misc screenWidth={screenWidth} showLightbox={showLightbox} setCategory={setCategory} />
                )
            case 'none':
                return (
                    <>
                        <h1>Photography</h1>
                        <p onClick={() => setCategory('sports')}>Sports</p>
                        <p onClick={() => setCategory('automotive')}>Automotive</p>
                        <p onClick={() => setCategory('nature')}>Nature</p>
                        <p onClick={() => setCategory('portraits')}>Portraits</p>
                        <p onClick={() => setCategory('misc')}>Misc</p>
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

            <DisplayCategory />
        </div>
    )
}

export default Photography