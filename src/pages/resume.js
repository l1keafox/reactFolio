import React, { useState,useEffect } from "react";
import Pdf from "./raymondLewis.pdf";
import pdfImg from "../components/assets/images/Resume.PNG";
import { Transition } from "@headlessui/react";
export default function Resume(prop) {
  // style={{ width: "60%", height: "50%" }}
  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(true);
  },[]);
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(prop.isShowing);
  },[prop.isShowing]);

  return (
    <>
      <Transition
        show={isShowing}
        enter="transform transition duration-[400ms]"
        enterFrom="rotate-[-360deg] scale-0"
        enterTo="rotate-0 scale-100"
        leave="transform transition duration-[400ms]"
        leaveFrom="rotate-0 scale-100"
        leaveTo="rotate-[-360deg] scale-0"
      >
        <div className="flex flex-col items-center">
          <a className="items-center justify-center" href={Pdf} target="_blank">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download Pdf
            </button>
          </a>
          <img src={pdfImg} />
        </div>
      </Transition>
    </>
  );
}
