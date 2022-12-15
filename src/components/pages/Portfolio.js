import React from 'react'
import Project from '../Project'

function Portfolio() {
    return (
        <div>
            <div className="grid grid-cols-12">
                <h2 className="header text-gray-500 col-span-12 text-lg font-extrabold p-5">Works I've done:</h2>

            </div>
            <div className="grid grid-cols-12">
                
                    <Project name='Something' url='https://www.github.com/mecuboi' img='http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTbFS-Eb6WAixewVPFo2P5F_PcDdi0DZndApQxbLyuCBmA9JLhjhClvwjYZS-JRe5hp7BQExiiX8KSSMBE'/>
                    <Project name='Something1' url='https://www.github.com/mecuboi'/>
                    <Project name='Something2' url='https://www.github.com/mecuboi'/>
                    <Project name='Something3' url='https://www.github.com/mecuboi'/>
                    <Project name='Something4' url='https://www.github.com/mecuboi'/>
                    <Project name='Something5' url='https://www.github.com/mecuboi'/>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Portfolio