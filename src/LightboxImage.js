import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

let LightboxImage = (props) => {

    const {src, className, id, index, alt, getImageInView} = props

    const { ref, inView } = useInView({
        threshold: 0.9,
    })

    useEffect(() => {
        if (inView) {
            getImageInView(index + 1)
        }
    })

    return (
        <img 
            src={src}
            className={className}
            id={id}
            ref={ref}
            key={index} 
            alt={alt}
        />
    )
}

export default LightboxImage