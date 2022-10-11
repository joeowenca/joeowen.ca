import React from 'react'
import { v4 as uuidv4 } from 'uuid'

let FourColumns = (props) => {
    
    const {images, showLightbox} = props

    return (
        <div className="four-columns">
            <div className="column">
                {
                    Object.values(images).map((value, index) => {
                        if ((index + 0) % 4 === 0) {
                            return (
                                <img src={value.default} onClick={() => showLightbox(index, images)} className="thumbnail" key={index} alt="" />
                            )
                        } else {
                            return (
                                <React.Fragment key={uuidv4()}></React.Fragment>
                            )
                        }
                    })
                }
            </div>

            <div className="column">
                {
                    Object.values(images).map((value, index) => {
                        if ((index + 3) % 4 === 0) {
                            return (
                                <img src={value.default} onClick={() => showLightbox(index, images)} className="thumbnail" key={index} alt="" />
                            )
                        } else {
                            return (
                                <React.Fragment key={uuidv4()}></React.Fragment>
                            )
                        }
                    })
                }
            </div>

            <div className="column">
                {
                    Object.values(images).map((value, index) => {
                        if ((index + 2) % 4 === 0) {
                            return (
                                <img src={value.default} onClick={() => showLightbox(index, images)} className="thumbnail" key={index} alt="" />
                            )
                        } else {
                            return (
                                <React.Fragment key={uuidv4()}></React.Fragment>
                            )
                        }
                    })
                }
            </div>

            <div className="column">
                {
                    Object.values(images).map((value, index) => {
                        if ((index + 1) % 4 === 0) {
                            return (
                                <img src={value.default} onClick={() => showLightbox(index, images)} className="thumbnail" key={index} alt="" />
                            )
                        } else {
                            return (
                                <React.Fragment key={uuidv4()}></React.Fragment>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default FourColumns