import React, { useState, useEffect } from 'react'
import sportsImages from './images/Sports/index.js'

let Lightbox = (props) => {

    const [imgIndex, setImgIndex] = useState(0)
    const [imgScroll, setImgScroll] = useState(0)

    const sportsLength = Object.keys(sportsImages).length

    useEffect(() => {
        document.querySelector('#img-' + props.index).scrollIntoView({
            inline: 'start'
        })
    
        // Get lightbox scrollWidth
        const lightbox = document.querySelector('.lightbox')
        let width = lightbox.scrollWidth / Object.keys(sportsImages).length
        width = Math.floor(lightbox.scrollWidth - width)
        width = Math.ceil(width / Object.keys(sportsImages).length)

        if (lightbox.scrollLeft < width) {
            setImgIndex(1)
        } else {
            setImgIndex(Math.ceil(lightbox.scrollLeft / imgScroll))
        }

        setImgScroll(width)

    }, [])

    useEffect(() => {
        const lightbox = document.querySelector('.lightbox')

        function handleScroll() {
            if (lightbox.scrollLeft < imgScroll) {
                setImgIndex(1)
            } else {
                setImgIndex(Math.ceil(lightbox.scrollLeft / imgScroll))
            }
        }
      
        lightbox.addEventListener('scroll', handleScroll)

        return _ => {
            lightbox.removeEventListener('scroll', handleScroll)
        }
    })

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
                        <img 
                            src={value.default} 
                            id={"img-" + index}
                            key={index} 
                            alt=""
                        />
                    )
                })
            }

            <div className="closer" onClick={() => props.hideLightbox()}></div>

            <p className="img-counter">{imgIndex} / {sportsLength}</p>
        </div>
    )
}

export default Lightbox