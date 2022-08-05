import React, { useState } from 'react'
import sportsImages from './images/Sports/index.js'
import Lightbox from './Lightbox'

function PhotographyGallery() {
    return (
        <div className="photography-gallery">
            <div className="automotive-gallery gallery">
                {
                    Object.values(sportsImages).map((value, index) => {
                        console.log(value)
                        return (
                            <img src={value.default} className="thumbnail" key={index} alt=""></img>
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
    )
}

export default PhotographyGallery