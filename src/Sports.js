import React from 'react'
import images from './images/Sports/index.js'
import TwoColumns from './TwoColumns'
import ThreeColumns from './ThreeColumns'
import FourColumns from './FourColumns'

let Sports = (props) => {

    const {screenWidth, showLightbox, changeCategory} = props

    return (
        <>
            <div className="gallery">
                <div className="gallery-header">
                    <p className="back-btn" onClick={() => changeCategory("none")}>{"Back"}</p>
                    <h1>Sports</h1>
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

export default Sports