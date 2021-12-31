import pfp from './images/profile-picture-header.jpg'
import landscapeShowcase from './images/Showcase/landscape-showcase.jpg'
import portraitShowcase from './images/Showcase/portrait-showcase.jpg'
import automotiveShowcase from './images/Showcase/automotive-showcase.jpg'

function App() {
  return (
    <div className="wrapper">
      <div id="intro" className="intro">
        <img src={pfp} alt="intro" />
        <h1>Hey, I'm Joe.</h1>
        <p>
          Welcome! This website is a place where I store all my creative work. I take pictures, make videos, and do lots of other things. Feel free to take a look around and hopefully you'll like what you see.
        </p>
        <p>
        Always happy to work with people, so if you're interested in partering or have any questions, you can find my email at the bottom of this page.
        </p>
        <p className="scroll-to-view">Scroll to view more</p>
      </div>
      <div className="container">
        <div id="header" className="header">
          <img id="header-img" className="header-img hidden" src={pfp} alt="profile" />
          <h1 id="header-text" className="header-text hidden">Joe Owen<span>.ca</span></h1>
        </div>
        <div id="content" className="content">
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
              Many of my friends are into cars, so naturally I began taking pictures of their cars and got really into it. Met lots of people in the car community through photography and have been able to share my pictures lots of other drivers.
            </p>
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    </div>
  );
}

export default App;
