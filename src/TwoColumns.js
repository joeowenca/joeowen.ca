import React from 'react'
import sportsImages from './images/Sports/index.js'

const sportsImagesObject = Object.values(sportsImages)

let TwoColumns = (props) => {
    return (
        <div className="two-columns">
            <div className="column">
                {
                    sportsImagesObject.map((value, index) => {
                        if ((index + 0) % 2 === 0) {
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
                        if ((index + 1) % 2 === 0) {
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

export default TwoColumns