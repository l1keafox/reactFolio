import React, { useState } from "react";
import Pdf from "./raymondLewis.pdf";
import pdfImg from "../components/assets/images/Resume.PNG";
import { Transition } from "@headlessui/react";
export default function Resume({isShowing}) {
  // style={{ width: "60%", height: "50%" }}
  return (
    <>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-2000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-2000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
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
