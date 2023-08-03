import React, { useEffect } from 'react'

function Videos() {
    useEffect(() => {
        document.title = 'Joe Owen | Videos'
    }, [])

    return (
        <div className="content">
            <h1>Videos</h1>
        </div>
    )
}

export default Videos