import React, {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import TwoColumns from './TwoColumns'
import ThreeColumns from './ThreeColumns'
import FourColumns from './FourColumns'

let PhotographyGallery = (props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }
      
        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <>
            <div className="photography-gallery">
                <div className="automotive-gallery gallery">
                    {screenWidth > 0 && screenWidth < 768 ? 
                        <TwoColumns showLightbox={props.showLightbox} />
                    : " "}

                    {screenWidth >= 768 && screenWidth < 1024 ? 
                        <ThreeColumns showLightbox={props.showLightbox} />
                    : " "}

                    {screenWidth >= 1024 ? 
                        <FourColumns showLightbox={props.showLightbox} />
                    : " "}
                    
                </div>

                <div className="sports-gallery">

                </div>

                <div className="portraits-gallery">

                </div>

                <div className="nature-gallery">

                </div>

                <div className="misc-gallery">

                </div>
            </div>
        </>
    )
}

export default PhotographyGallery