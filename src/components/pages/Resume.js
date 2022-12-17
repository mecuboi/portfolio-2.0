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
                <AllPages pdf={resumeLink}  />

            </div>
            <div className="col-span-12 md:col-start-4 md:col-end-10 text-gray-700 mt-1 border-dotted border-2 border-yellow-500 rounded-md px-8 py-3 bg-white shadow-md">
                <p className="font-bold text-yellow-500 text-xl " id="title">Proficiencies:</p>
                <ul className="font-medium text-gray-600 text-lg mt-1 list-disc">
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                    <li>React</li>
                </ul>
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