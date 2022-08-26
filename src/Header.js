import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import pfp from './images/profile-picture-header.jpg'
import ChangeColor from './ChangeColor'

function Header() {
    const location = useLocation()
    const [home, setHome] = useState(false)

    useEffect(() => {
        if(location.pathname !== '/') {
            setHome(false)
        } else {
            setHome(true)
        }

        window.scrollTo(0,0);
    })

    return (
        <div id="header" className="header" onClick={() => ChangeColor()} style={home ? {} : {backgroundColor: "#1A1A1A"}}>
            <Link to="/">
                <img id="header-img" className={home ? "header-img hidden" : "header-img"} src={pfp} alt="profile" />
                <h1 id="header-text" className={home ? "header-text hidden" : "header-text"}>Joe Owen<span>.ca</span></h1>
            </Link>
        </div>
    )
}

export default Header