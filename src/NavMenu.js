import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ChangeColor from './ChangeColor'

let NavMenu = (props) => {
    const [menu, setMenu] = useState(false)

    let showNav = () => {
        document.body.setAttribute("style", "overflow-y: hidden;")
        setMenu(!menu)
    }

    let hideNav = () => {
        document.body.setAttribute("style", "overflow-y: auto;")
        setMenu(!menu)
    }

    return (
        <>
            {menu ?
                <div onClick={() => ChangeColor()} className="nav-menu">
                    <div className={"dropdown-menu"} id={"dropdown-close"} onClick={() => hideNav()}></div>
                    <div className="nav-options"  onClick={() => hideNav()}>
                        <h2><Link to="/">Home</Link></h2>
                        <h2><Link to="/photography">Photography</Link></h2>
                        <h2><Link to="/videos">Videos</Link></h2>
                        <h2><Link to="/music">Music</Link></h2>
                        <h2><Link to="/projects">Projects</Link></h2>
                        <div className="social-links">
                            <div className="instagram"></div>
                            <div className="youtube"></div>
                            <div className="soundcloud"></div>
                            <div className="linkedin"></div>
                        </div>
                    </div>
                </div>
            : ""}
            <div className={menu || props.nav ? "dropdown-menu hidden" : "dropdown-menu"} id={"dropdown-open"} onClick={() => showNav()}></div>
        </>
    )
}

export default NavMenu