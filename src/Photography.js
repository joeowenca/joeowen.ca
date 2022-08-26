import React, { useState } from 'react'
import PhotographyGallery from './PhotographyGallery'
import Lightbox from './Lightbox'

let Photography = (props) => {
    const [lightbox, setLightbox] = useState(false)
    const [index, setIndex] = useState(0)

    let showLightbox = (index) => {
        setLightbox(true)
        setIndex(index)
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
            <h1>Photography</h1>

            {lightbox ? 
                <Lightbox index={index} hideLightbox={hideLightbox} />
            : ""}

            <PhotographyGallery showLightbox={showLightbox} />
        </div>
    )
}

export default Photography