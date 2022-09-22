import React, { useState, useEffect } from 'react'
import LightboxImage from './LightboxImage'
import ImageCounter from './ImageCounter'
import sportsImages from './images/Sports/index.js'

let Lightbox = (props) => {

    const [imageInView, setImageInView] = useState(5)

    let getImageInView = (img) => {
        setImageInView(img)
        console.log(img)
    }

    useEffect(() => {
        document.querySelector('#img-' + props.index).scrollIntoView({
            inline: 'start'
        })
    }, [])

    return (
        <div className="lightbox">
            <div 
                className={"dropdown-menu"} 
                id={"dropdown-close"} 
                onClick={() => props.hideLightbox()}>
            </div>


            {
                Object.values(sportsImages).map((value, index) => {
                    return (
                        <LightboxImage 
                            src={value.default} 
                            id={"img-" + index}
                            index={index}
                            key={index} 
                            alt=""
                            getImageInView={getImageInView}
                        />
                    )
                })
            }

            <div className="closer" onClick={() => props.hideLightbox()}></div>
            <ImageCounter imageInView={imageInView} />
        </div>
    )
}

export default Lightbox