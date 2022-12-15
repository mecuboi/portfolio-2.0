import React from 'react'
import Project from '../Project'

function Portfolio() {
    return (
        <div>
            <div className="grid grid-cols-12">
                <h2 className="header text-gray-500 col-span-12 text-lg font-extrabold p-5">Works I've done:</h2>

            </div>
            <div className="grid grid-cols-12">
                
                    <Project name='Something'/>
                    <Project name='Something1'/>
                    <Project name='Something2'/>
                    <Project name='Something3'/>
                    <Project name='Something4'/>
                    <Project name='Something5'/>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Portfolio