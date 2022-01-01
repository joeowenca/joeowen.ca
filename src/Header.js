import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import pfp from './images/profile-picture-header.jpg'

function Header(props) {
    useEffect(() => {
        if(props.location.pathname !== '/')
            props.setHome(false)
        else
            props.setHome(true) 
    })

    return (
        <div id="header" className="header">
            <Link to="/">
                <img id="header-img" className={props.home ? "header-img hidden" : "header-img"} src={pfp} alt="profile" />
                <h1 id="header-text" className={props.home ? "header-text hidden" : "header-text"}>Joe Owen<span>.ca</span></h1>
            </Link>
        </div>
    )
}

export default Header