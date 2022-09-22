import React from 'react'

let ThreeColumns = (props) => {
    
    const {images, showLightbox} = props

    return (
        <div className="three-columns">
            <div className="column">
                {
                    Object.values(images).map((value, index) => {
                        if ((index + 0) % 3 === 0) {
                            return (
                                <img src={value.default} onClick={() => showLightbox(index, images)} className="thumbnail" key={index} alt="" />
                            )
                        }
                    })
                }
            </div>

            <div className="column">
                {
                    Object.values(images).map((value, index) => {
                        if ((index + 2) % 3 === 0) {
                            return (
                                <img src={value.default} onClick={() => showLightbox(index, images)} className="thumbnail" key={index} alt="" />
                            )
                        }
                    })
                }
            </div>

            <div className="column">
                {
                    Object.values(images).map((value, index) => {
                        if ((index + 1) % 3 === 0) {
                            return (
                                <img src={value.default} onClick={() => showLightbox(index, images)} className="thumbnail" key={index} alt="" />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ThreeColumns