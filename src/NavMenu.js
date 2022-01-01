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
                        <h2>Home</h2>
                        <h2>Photography</h2>
                        <h2>Videos</h2>
                        <h2>Music</h2>
                        <h2>Projects</h2>
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