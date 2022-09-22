import React from 'react'
import sportsImages from './images/Sports/index.js'

let ImageCounter = (props) => {

    const sportsLength = Object.keys(sportsImages).length

    return (
        <p className="img-counter">{props.imageInView} / {sportsLength}</p>
    )
}

export default ImageCounter