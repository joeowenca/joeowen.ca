import React, { useState } from 'react';

import dropDownMenu from './images/dropdown-menu.png'
import dropDownClose from './images/dropdown-close.png'
import linkedin from './images/linkedin.png'
import instagram from './images/instagram.png'
import soundcloud from './images/soundcloud.png'
import facebook from './images/facebook.png'

function NavMenu() {
    const [menu, setMenu] = useState(false)

    return (
        <>
            {menu ?
                <div className="nav-menu">
                    <img className={"dropdown-menu"} src={dropDownClose} onClick={() => setMenu(!menu)}></img>
                    <div className="nav-options">
                        <h2><a href="/home">Home</a></h2>
                        <h2><a href="/photography">Photography</a></h2>
                        <h2><a href="/videos">Videos</a></h2>
                        <h2><a href="/music">Music</a></h2>
                        <h2><a href="/projects">Projects</a></h2>
                        <div className="social-links">
                            <img src={linkedin}></img>
                            <img src={instagram}></img>
                            <img src={soundcloud}></img>
                            <img src={facebook}></img>
                        </div>
                    </div>
                </div>
            : ""}
            <img className={menu ? "dropdown-menu hidden" : "dropdown-menu"} src={dropDownMenu} onClick={() => setMenu(!menu)}></img>
        </>
    )
}

export default NavMenu