import React, { useState, useEffect } from 'react'
import sportsImages from './images/Sports/index.js'

let Lightbox = (props) => {

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
        </div>
    )
}

export default Lightbox