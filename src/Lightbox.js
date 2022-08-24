import React, { useState } from 'react'
import sportsImages from './images/Sports/index.js'

let Lightbox = (props) => {
    return (
        <div className="lightbox">
            <div className={"dropdown-menu"} id={"dropdown-close"} onClick={() => props.hideLightbox()}></div>
            <img src={Object.values(sportsImages)[props.index].default} alt="" />
        </div>
    )
}

export default Lightbox