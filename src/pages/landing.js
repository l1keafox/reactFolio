import { Transition } from '@headlessui/react';
import { useState ,useEffect} from 'react'
export default function Landing() {

  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(true);
  },[]);

  return (
    <header >
        {/* <h1 className="font-black text-6xl block duration-500 relative" >
          Raymond Lewis. 
        </h1> */}
      <Transition
          show={isShowing}
          enter="transition-opacity duration-2000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-2000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >

        <p className= "text-1xl block duration-750 relative text-center">
            I am a full stack software engineer with a background in malware research. I enjoy the process of creating programs, websites, clothes or relationships.
        </p>
        </Transition>

    </header>
  )
}
