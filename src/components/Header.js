import React from 'react';
import Navigation from './Navigation'

function Header() {
  return (
    
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" className="flex items-center">
        <span className="self-center text-2xl text-yellow-400 font-semibold whitespace-nowrap">Matthew Jusuf</span>
    </a>

   <Navigation/>
  </div>
</nav>

  );
}

export default Header;