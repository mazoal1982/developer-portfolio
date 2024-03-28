import resume from "../assets/Resume.pdf"
import React, {useState, useEffect} from "react"
import {Document, Page, pdfjs} from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//const resumeLink = `C:\Users\mazoal1982\bootcamp\developer-portfolio\port\src\assets\Resume.pdf`
export default function Resume() {
  const [width, setWidth] = useState(1200)
    return (
      <div id="Resume" className="w3-center">
        <a href={resume} target="_blank" download>downoad</a>
        <Document file={resume} >
          <Page pageNumber={1} scale={width > 750 ? 1.5 : 0.5} />
        </Document>
     
  
    </div>
    );
  }