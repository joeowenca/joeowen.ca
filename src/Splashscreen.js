import React from 'react'
import pfp from './images/profile-picture-header.jpg'

let Splashscreen = () => {

  return (
    <div className="splashscreen">
      <div>
        <img src={pfp} alt="splashscreen"></img>
        <h1>Joe Owen</h1>
        <span>.ca</span>
      </div>
      <p>To ensure a mobile-first and responsive design, <strong>joeowen.ca</strong> is currently only available on mobile.</p>
    </div>
  )
}

export default Splashscreen