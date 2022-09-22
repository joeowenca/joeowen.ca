import React, { useState, useEffect } from 'react'
import LightboxImage from './LightboxImage'

let Lightbox = (props) => {

    const {images} = props

    const [imageInView, setImageInView] = useState(5)

    const imagesLength = Object.keys(images).length

    let getImageInView = (img) => {
        setImageInView(img)
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
                Object.values(images).map((value, index) => {
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
            
            <p className="img-counter">{imageInView} / {imagesLength}</p>
        </div>
    )
}

export default Lightbox