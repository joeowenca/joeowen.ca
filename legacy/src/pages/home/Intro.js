import pfp from '../../images/profile-picture.jpg'

// Stylesheets
import './stylesheets/intro-styles-mobile.css'

function Intro() {
    return (
        <div id="intro" className="intro">
            <img className="intro-home-img" src={pfp} alt="intro" />
            <h1>Joe Owen</h1>
            <p className="intro-text">
            Welcome! This website is a place where I store all my creative work. I take pictures, make videos, and do lots of other things. Feel free to take a look around and hopefully you'll like what you see.
            </p>
            <p className="intro-text">
            Always happy to work with people, so if you're interested in partering or have any questions, you can find my email at the bottom of this page.
            </p>
            <p className="scroll-to-view">Scroll to view more</p>
        </div>
    )
}

export default Intro