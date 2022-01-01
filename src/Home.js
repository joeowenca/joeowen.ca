import ScrollTransition from './ScrollTransition'

import landscapeShowcase from './images/Showcase/landscape-showcase.jpg'
import portraitShowcase from './images/Showcase/portrait-showcase.jpg'
import automotiveShowcase from './images/Showcase/automotive-showcase.jpg'
import mtbShowcase from './images/Showcase/mtb-showcase.jpg'
import skiShowcase from './images/Showcase/ski-showcase.jpg'

function Home() {
  document.body.onscroll = function() {ScrollTransition()}
  
  return (
    <>  
      <div id="showcase" className="showcase">
        <h1>Photography</h1>
        <hr></hr>
        <div className="photography-showcase">
          <img className="img-showcase landscapes" src={landscapeShowcase}></img>
          <h2>Landscapes</h2>
          <p>
          Usually out for nature walks and bring my camera with me. Snap some pics along the way.
          </p>
          <br></br>
          
          <img className="img-showcase portraits" src={portraitShowcase}></img>
          <h2>Potraits</h2>
          <p>
          Hanging out with friends, randomly take pictures of them. Turns out for some real candid lookin pics. 
          </p>
          <br></br>
          
          <img className="img-showcase automotive" src={automotiveShowcase}></img>
          <h2>Automotive</h2>
          <p>
          Many of my friends are into cars, so naturally I began taking pictures of their cars and got really into it. Met lots of people in the car community through photography and have been able to share my pictures with lots of other drivers.
          </p>
        </div>

        <h1>Videos</h1>
        <hr></hr>
        <div className="videos-showcase">
          <img className="mtb-showcase-img" src={mtbShowcase}></img>
          <h2>Mountain biking</h2>
          <p>Mountain biking videos</p>
          <br></br>

          <img className="ski-showcase-img" src={skiShowcase}></img>
          <h2>Skiing</h2>
          <p>Skiing videos</p>
          <br></br>

        </div>
    </div>
    </>
  )
}

export default Home
