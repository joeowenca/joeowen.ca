import React, { useEffect } from 'react'
import images from '../images/categories/sports/index.js'
import TwoColumns from '../layout/TwoColumns.js'
import ThreeColumns from '../layout/ThreeColumns.js'
import FourColumns from '../layout/FourColumns.js'

let Portraits = (props) => {

    const {screenWidth, showLightbox} = props

    useEffect(() => {
        document.title = 'Joe Owen | Portraits'
    }, [])

    return (
        <>
            <div className="gallery">
                <div className="gallery-header">
                    <h1>Portraits</h1>
                </div>
                {screenWidth > 0 && screenWidth < 540 ? 
                    <TwoColumns images={images} showLightbox={showLightbox} />
                : " "}

                {screenWidth >= 540 && screenWidth < 1024 ? 
                    <ThreeColumns images={images} showLightbox={showLightbox} />
                : " "}

                {screenWidth >= 1024 ? 
                    <FourColumns images={images} showLightbox={showLightbox} />
                : " "}
            </div>
        </>
    )
}

export default Portraits