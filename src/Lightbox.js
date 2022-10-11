import React, { useState, useEffect } from 'react'
import LightboxImage from './LightboxImage'

let Lightbox = (props) => {

    const {images, index} = props

    const [imageInView, setImageInView] = useState(5)

    const imagesLength = Object.keys(images).length

    let getImageInView = (img) => {
        setImageInView(img)
    }

    useEffect(() => {
        document.querySelector('#img-' + index).scrollIntoView({
            inline: 'start'
        })
    }, [index])

    return (
        <div className="lightbox">
            <div 
                className={"dropdown-menu"} 
                id={"dropdown-close"} 
                onClick={() => props.hideLightbox()}>
            </div>


            {
                Object.values(images).map((value, index) => {
                    if (index === 0) {
                        return (
                            <LightboxImage 
                                src={value.default} 
                                className="first"
                                id={"img-" + index}
                                index={index}
                                key={index} 
                                alt=""
                                getImageInView={getImageInView}
                            />
                        )
                    } else if (index === Object.values(images).length - 1) {
                        return (
                            <LightboxImage 
                                src={value.default}
                                className="last" 
                                id={"img-" + index}
                                index={index}
                                key={index} 
                                alt=""
                                getImageInView={getImageInView}
                            />
                        )
                    } else {
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
                    }
                })
            }

            <div className="closer" onClick={() => props.hideLightbox()}></div>
            
            <p className="img-counter">{imageInView} / {imagesLength}</p>
        </div>
    )
}

export default Lightbox