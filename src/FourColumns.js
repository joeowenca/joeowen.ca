import React from 'react'
import sportsImages from './images/Sports/index.js'

const sportsImagesObject = Object.values(sportsImages)

let FourColumns = (props) => {
    return (
        <div className="four-columns">
            <div className="column">
                {
                    sportsImagesObject.map((value, index) => {
                        if ((index + 0) % 4 === 0) {
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
                        if ((index + 3) % 4 === 0) {
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
                        if ((index + 2) % 4 === 0) {
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
                        if ((index + 1) % 4 === 0) {
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

export default FourColumns