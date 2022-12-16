import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'


function Contact() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const resumeLink = "https://raw.githubusercontent.com/mecuboi/portfolio-2.0/2760bf58b34a08deb143fa2bda770d6c5914f81b/src/images/resume.pdf"
const test = 'https://drive.google.com/file/d/1j7_gkbnGTYB5X1TKfiYvBh5b5bK3NOrV/view?usp=share_link'

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={resumeLink} onLoadSuccess={onDocumentLoadSuccess} renderTextLayer="false">
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Contact