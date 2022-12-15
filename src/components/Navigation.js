import React from 'react'

const active = "block py-2 pl-3 pr-4 text-white bg-yellow-500 rounded "
const notActive = "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500"

function Navigation({currentPage, handlePageChange}) {
    return (
        <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 rounded-lg bg-gray-600 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                    <a 
                    href="#" 
                    className={currentPage === 'About' ? active : notActive}
                    onClick={() => handlePageChange('About')}
                    >About</a>
                </li>
                <li>
                    <a 
                    href="#" 
                    className={currentPage === 'Portfolio' ? active : notActive}
                    onClick={() => handlePageChange('Portfolio')}
                    >Portfolio</a>
                </li>
                <li>
                    <a 
                    href="#" 
                    className={currentPage === 'Resume' ? active : notActive}
                    onClick={() => handlePageChange('Resume')}
                    >Resume</a>
                </li>
                <li>
                    <a 
                    href="#" 
                    className={currentPage === 'Contact' ? active : notActive}
                    onClick={() => handlePageChange('Contact')}
                    >Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
