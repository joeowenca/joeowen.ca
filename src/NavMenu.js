import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ChangeColor from './ChangeColor'

function NavMenu() {
    const [menu, setMenu] = useState(false)

    return (
        <>
            {menu ?
                <div onClick={() => ChangeColor()} className="nav-menu">
                    <div className={"dropdown-menu"} id={"dropdown-close"} onClick={() => setMenu(!menu)}></div>
                    <div className="nav-options"  onClick={() => setMenu(!menu)}>
                        <h2><Link to="/">Home</Link></h2>
                        <h2><Link to="/photography">Photography</Link></h2>
                        <h2><Link to="/videos">Videos</Link></h2>
                        <h2><Link to="/music">Music</Link></h2>
                        <h2><Link to="/projects">Projects</Link></h2>
                        <div className="social-links">
                            <div className="linkedin"></div>
                            <div className="instagram"></div>
                            <div className="youtube"></div>
                            <div className="soundcloud"></div>
                        </div>
                    </div>
                </div>
            : ""}
            <div className={menu ? "dropdown-menu hidden" : "dropdown-menu"} id={"dropdown-open"} onClick={() => setMenu(!menu)}></div>
        </>
    )
}

export default NavMenu