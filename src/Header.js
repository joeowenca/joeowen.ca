import pfp from './images/profile-picture-header.jpg'

function Header() {
    return (
        <div id="header" className="header">
            <img id="header-img" className="header-img hidden" src={pfp} alt="profile" />
            <h1 id="header-text" className="header-text hidden">Joe Owen<span>.ca</span></h1>
        </div>
    )
}

export default Header