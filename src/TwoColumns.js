import React from 'react'

let TwoColumns = (props) => {
    
    const {images, showLightbox} = props

    return (
        <div className="two-columns">
            <div className="column">
                {
                    Object.values(images).map((value, index) => {
                        if ((index + 0) % 2 === 0) {
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
                        if ((index + 1) % 2 === 0) {
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

export default TwoColumns