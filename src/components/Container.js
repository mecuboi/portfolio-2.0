import React, { useState } from 'react'
// import About from './pages/About'
// import Portfolio from './pages/Portfolio'
// import Resume from './pages/Resume'
// import Contact from './pages/Contact'
import Navigation from './Navigation'
import Header from './Header'



export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {

        //   if (currentPage === 'About') {
        //     return <About />;
        //   }
        //   if (currentPage === 'Portfolio') {
        //     return <Portfolio />;
        //   }
        //   if (currentPage === 'Resume') {
        //     return <Resume />;
        //   }
        //   return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}
        </div>
    );
}


