import React from 'react'

function About() {
    return(
        <div>
        <div className="grid grid-cols-12">
            <h2 className="header text-gray-500 col-span-12 text-center lg:text-4xl md:text-3xl text-2xl font-extrabold p-5"><span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> Hi! My name is</h2>
            <h1 className="header text-yellow-500 col-span-12 text-center mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl p-5">Matthew Jusuf</h1>
            <p 
            className="my-4 mx-1 px-2 text-lg text-gray-500 col-span-12 md:col-start-3 md:col-end-11">
                I have been studying how to code and be a full stack developer for the past 5 months. 
                I can't wait to finally finish this course and apply my skill to the real world. The things that I've 
                studied were very challenging, but being succesful in completing all the assignments and the thrill
                of solving problems have been a fun ride and a very valuable learning experience. I am excited at what
                the coding world can bring for me and the challenges that awaits.
                
                </p>

                <p 
            className="my-4 mx-1 px-2 text-lg text-gray-500 col-span-12 md:col-start-3 md:col-end-11">
                Enjoy the website that I've created using the basic knowledge that I have acquired using
                REACT and JavaScript. Hopefully you will have as much fun as I had in making this website.
                
                </p>
        </div>
        <div>
            
        </div>
        </div>
    )
}

export default About