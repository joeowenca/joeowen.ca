import NavMenu from './NavMenu'
import Intro from './Intro'
import Header from './Header'
import HomePageContent from './HomePageContent'
import Footer from './Footer'

function App() {
  return (
    <div className="wrapper">
      <Intro />
      <div className="container">
        <Header />
        <HomePageContent />
        <Footer />
      </div>
      <NavMenu />
    </div>
  )
}

export default App
