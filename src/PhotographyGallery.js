import React, { useState } from 'react'
import sportsImages from './images/Sports/index.js'

const sportsImagesObject = Object.values(sportsImages)

let PhotographyGallery = (props) => {
    return (
        <>
            <div className="photography-gallery">
                <div className="automotive-gallery gallery">
                    <div className="column">
                        {
                            sportsImagesObject.map((value, index) => {
                                if ((index) % 2 === 0) {
                                    return (
                                        <img src={value.default} onClick={() => props.showLightbox(index)} className="thumbnail" key={index} alt="" />
                                    )
                                }
                            })
                        }
                    </div>

                    <div className="column">
                        {
                            sportsImagesObject.map((value, index) => {
                                if ((index + 1) % 2 === 0) {
                                    return (
                                        <img src={value.default} onClick={() => props.showLightbox(index)} className="thumbnail" key={index} alt="" />
                                    )
                                }
                            })
                        }
                    </div>
                    
                </div>

                <div className="sports-gallery">

                </div>

                <div className="portraits-gallery">

                </div>

                <div className="nature-gallery">

                </div>

                <div className="misc-gallery">

                </div>
            </div>
        </>
    )
}

export default PhotographyGallery