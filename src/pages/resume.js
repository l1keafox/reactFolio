import React, { useState } from 'react'
import Pdf from './resume.pdf';
import pdfImg from '../components/assets/images/Resume.PNG'

export default function Resume() {
 // style={{ width: "60%", height: "50%" }}
  return (
    <>
      <a className=' items-center justify-center' href = {Pdf} target = "_blank">Download Pdf</a>    
      <img src={pdfImg} />
      
      </>
  )
}

