import React from 'react'
import Project from '../Project'

function Portfolio() {
    return (
        <div>
            <div className="grid grid-cols-12">
                <h2 className="header text-gray-500 col-span-12 text-lg font-extrabold p-5">Works I've done:</h2>

            </div>
            <div className="grid grid-cols-12 text-center ">
                
                    <Project 
                    name='Purrfection' 
                    url='https://github.com/mecuboi/purrfection' 
                    img='https://raw.githubusercontent.com/mecuboi/purrfection/main/public/images/Desktop-view.png'
                    description='Purrfection is a platform where people can buy or sell their pets. Thus eliminating the need of a middleman'
                    />
                    <Project 
                    name='Crescendo' 
                    url='https://github.com/mecuboi/crescendo-website' 
                    img='https://github.com/mecuboi/crescendo-website/raw/main/assets/image/index.jpg'
                    description='Crescendo is a fun website where you can search your favorite youtube video and share them with a short tiny url link'
                    />
                    <Project 
                    name='Weather Forecast App' 
                    url='https://github.com/mecuboi/weather-forecast-app' 
                    img='https://github.com/mecuboi/weather-forecast-app/raw/main/assets/images/screenshot.png'
                    description='Check the weather around the world using this app and keep track of the cities you have "visited"'
                    />
                    <Project 
                    name='Social-Network DB' 
                    url='https://github.com/mecuboi/Social-Network_Db' 
                    img='https://github.com/mecuboi/portfolio-2.0/blob/main/public/Screen%20Shot%202022-12-17%20at%205.08.57%20pm.png?raw=true'
                    description='This is a backend app that manages a social media database'
                    />
                    <Project 
                    name='Simply Blog' 
                    url='https://github.com/mecuboi/simple-blog' 
                    img='https://github.com/mecuboi/simple-blog/raw/main/public/images/home.png'
                    description='A platform with a simple UI and intuitive layout for people to read and share ideas'
                    />
                    <Project 
                    name='Weather Forecast App' 
                    url='https://github.com/mecuboi/weather-forecast-app' 
                    img='https://github.com/mecuboi/weather-forecast-app/raw/main/assets/images/screenshot.png'
                    description='Check the weather around the world using this app and keep track of the cities you have "visited"'
                    />
                    

            </div>
            <div>

            </div>
        </div>
    )
}

export default Portfolio