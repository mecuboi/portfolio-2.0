import React from 'react';
import Navigation from './Navigation'


function Header({handlePageChange}) {
  return (

    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#home" className="flex items-center">
          <span
            className="self-center text-2xl text-yellow-500 font-semibold whitespace-nowrap"
            onClick={() => handlePageChange('Home')}
          >
            Matthew Jusuf
          </span>
        </a>


      </div>
    </nav>

  );
}

export default Header;