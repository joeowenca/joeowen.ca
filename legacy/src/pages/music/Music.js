import React, { useEffect } from 'react'

let Music = () => {
    useEffect(() => {
        document.title = 'Joe Owen | Music'
    }, [])

    return (
        <div className="content">
            <h1>Music</h1>
        </div>
    )
}

export default Music