import React from 'react'
import AllPages from './all-pages'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'


function Resume() {

    const resumeLink = "https://raw.githubusercontent.com/mecuboi/portfolio-2.0/2760bf58b34a08deb143fa2bda770d6c5914f81b/src/images/resume.pdf"
    const path = "../../../public/resume.pdf"
    return (
        <div className='grid grid-cols-12'>
            
            <div className="col-span-12 m-auto mt-3">
                <AllPages pdf={resumeLink} className="max-w-screen"/>
                
            </div>
            <div className='col-span-12 m-auto mt-4'>
            <a href={resumeLink}
                download className="">
                <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                >
                    Download
                </button>

            </a>
            </div>
        </div>



    )
}

export default Resume