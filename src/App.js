import pfp from './images/profile-picture-header.jpg'

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

        </div>
        <div className="footer">
        </div>
      </div>
    </div>
  );
}

export default App;
