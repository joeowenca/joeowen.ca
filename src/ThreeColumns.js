import React from 'react'
import sportsImages from './images/Sports/index.js'

const sportsImagesObject = Object.values(sportsImages)

let ThreeColumns = (props) => {
    return (
        <div className="three-columns">
            <div className="column">
                {
                    sportsImagesObject.map((value, index) => {
                        if ((index + 0) % 3 === 0) {
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
                        if ((index + 2) % 3 === 0) {
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
                        if ((index + 1) % 3 === 0) {
                            return (
                                <img src={value.default} onClick={() => props.showLightbox(index)} className="thumbnail" key={index} alt="" />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ThreeColumns