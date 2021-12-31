import React, { useState } from 'react';

import pfp from './images/profile-picture-header.jpg'
import dropDownMenu from './images/dropdown-menu.png'
import dropDownClose from './images/dropdown-close.png'
import linkedin from './images/linkedin.png'
import instagram from './images/instagram.png'
import soundcloud from './images/soundcloud.png'
import facebook from './images/facebook.png'

import landscapeShowcase from './images/Showcase/landscape-showcase.jpg'
import portraitShowcase from './images/Showcase/portrait-showcase.jpg'
import automotiveShowcase from './images/Showcase/automotive-showcase.jpg'
import mtbShowcase from './images/Showcase/mtb-showcase.jpg'
import skiShowcase from './images/Showcase/ski-showcase.jpg'

function App() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="wrapper">
      {menu ?
        <div className="nav-menu">
          <img className={"dropdown-menu"} src={dropDownClose} onClick={() => setMenu(!menu)}></img>
          <div className="nav-options">
            <h2>Home</h2>
            <h2>Photography</h2>
            <h2>Videos</h2>
            <h2>Music</h2>
            <h2>Projects</h2>
            <div class="social-links">
              <img src={linkedin}></img>
              <img src={instagram}></img>
              <img src={soundcloud}></img>
              <img src={facebook}></img>
            </div>
          </div>
        </div>
      : ""}

      <div id="intro" className="intro">
        <img src={pfp} alt="intro" />
        <h1>Howdy, I'm Joe.</h1>
        <p className="intro-text">
          Welcome! This website is a place where I store all my creative work. I take pictures, make videos, and do lots of other things. Feel free to take a look around and hopefully you'll like what you see.
        </p>
        <p className="intro-text">
        Always happy to work with people, so if you're interested in partering or have any questions, you can find my email at the bottom of this page.
        </p>
        <p className="scroll-to-view">Scroll to view more</p>
      </div>
      <div className="container">
        <div id="header" className="header">
          <img id="header-img" className="header-img hidden" src={pfp} alt="profile" />
          <h1 id="header-text" className="header-text hidden">Joe Owen<span>.ca</span></h1>
          <img className={menu ? "dropdown-menu hidden" : "dropdown-menu"} src={dropDownMenu} onClick={() => setMenu(!menu)}></img>
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
        <div className="footer">
          <p className="contact">Email: joe.a.owen@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
