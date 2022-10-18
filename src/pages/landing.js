import { Transition } from '@headlessui/react';
import { useState } from 'react'
export default function Landing() {

  const [isShowing, setIsShowing] = useState(false)

  return (
    <header >
        <h1 className="font-black text-6xl block duration-500 relative" >
          Raymond Lewis. 
        </h1>
        <p className= "text-1xl block duration-500 relative transform transition-all translate-y-12 ease-out text-center">
            I am a full stack software engineer with a background in malware research. I enjoy the process of creating programs, websites, clothes or relationships.
        </p>
    </header>
  )
}
