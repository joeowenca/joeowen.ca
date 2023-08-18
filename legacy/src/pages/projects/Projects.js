import React, { useEffect } from 'react'

function Projects() {
    useEffect(() => {
        document.title = 'Joe Owen | Projects'
    }, [])

    return (
        <div className="content">
            <h1>Projects</h1>
        </div>
    )
}

export default Projects