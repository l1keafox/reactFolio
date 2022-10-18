import React, { useState } from 'react'
import Pdf from './resume.pdf';
import pdfImg from '../components/assets/images/Resume.PNG'

export default function Resume() {
 //
  return (
    <>
        <h3>Resume</h3>
      <img src={pdfImg} style={{ width: "50%", height: "50%" }} />
      <a href = {Pdf} target = "_blank">Download Pdf</a>    
      </>
  )
}

