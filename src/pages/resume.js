import React, { useState } from "react";
import Pdf from "./raymondLewis.pdf";
import pdfImg from "../components/assets/images/Resume.PNG";

export default function Resume() {
  // style={{ width: "60%", height: "50%" }}
  return (
    <>
    <div className= "flex flex-col items-center">
      <a className= "items-center justify-center" href={Pdf} target="_blank">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Pdf
        </button>
      </a>
      <img src={pdfImg} />
      </div>
    </>
  );
}
