import React, { useState } from 'react'
import sportsImages from './images/Sports/index.js'

let PhotographyGallery = (props) => {
    return (
        <>
            <div className="photography-gallery">
                <div className="automotive-gallery gallery">
                    {
                        Object.values(sportsImages).map((value, index) => {
                            return (
                                    <img src={value.default} onClick={() => props.showLightbox(index)} className="thumbnail" key={index} alt="" />
                            )
                        })
                    }
                    
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