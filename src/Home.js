import landscapeShowcase from './images/Showcase/landscape-showcase.jpg'
import portraitShowcase from './images/Showcase/portrait-showcase.jpg'
import automotiveShowcase from './images/Showcase/automotive-showcase.jpg'
import mtbShowcase from './images/Showcase/mtb-showcase.jpg'
import skiShowcase from './images/Showcase/ski-showcase.jpg'

function Home() {
  return ( 
    <div id="showcase" className="showcase">
      <h1>Photography</h1>
      <div className="photography-showcase">
        <img className="img-showcase landscapes" src={landscapeShowcase} alt="landscape showcase"></img>
        <h2>Landscapes</h2>
        <p>
        Usually out for nature walks and bring my camera with me. Snap some pics along the way.
        </p>
        <br></br>
        
        <img className="img-showcase portraits" src={portraitShowcase} alt="portrait showcase"></img>
        <h2>Potraits</h2>
        <p>
        Hanging out with friends, randomly take pictures of them. Turns out for some real candid lookin pics. 
        </p>
        <br></br>
        
        <img className="img-showcase automotive" src={automotiveShowcase} alt="automotive showcase"></img>
        <h2>Automotive</h2>
        <p>
        Many of my friends are into cars, so naturally I began taking pictures of their cars and got really into it. Met lots of people in the car community through photography and have been able to share my pictures with lots of other drivers.
        </p>
      </div>

      <h1>Videos</h1>
      <div className="videos-showcase">
        <img className="mtb-showcase-img" src={mtbShowcase} alt="mtb showcase"></img>
        <h2>Mountain biking</h2>
        <p>Mountain biking videos</p>
        <br></br>

        <img className="ski-showcase-img" src={skiShowcase} alt="ski showcase"></img>
        <h2>Skiing</h2>
        <p>Skiing videos</p>
        <br></br>

      </div>
    </div>
  )
}

export default Home