import React, { useEffect } from 'react'

import pfp from './images/profile-picture-header.jpg'

function Header(props) {
    useEffect(() => {
        if(props.location.pathname !== '/home')
            props.setHome(false)
        else
            props.setHome(true) 
    })

    return (
        <div id="header" className="header">
            <a href="/home">
                <img id="header-img" className={props.home ? "header-img hidden" : "header-img"} src={pfp} alt="profile" />
                <h1 id="header-text" className={props.home ? "header-text hidden" : "header-text"}>Joe Owen<span>.ca</span></h1>
            </a>
        </div>
    )
}

export default Header