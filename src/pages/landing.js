import { Transition } from '@headlessui/react';
import { useState ,useEffect} from 'react'
import { FaBeer } from 'react-icons/fa';
import {
  SiHtml5,
  SiBootstrap,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiSocketdotio,
  SiGraphql,
  SiHandlebarsdotjs,
} from "react-icons/si";
import { FaNode, FaNpm, FaReact } from "react-icons/fa";
export default function Landing() {
  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(true);
  },[]);

  const icon = "w-14 h-14  p-1  text-gray-500";

  return (
    <header className=''>
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

        <p className= "text-5xl block relative text-center font-ubuntu">
            I am a full stack software engineer with a background in malware research. I enjoy the process of creating programs, websites, clothes and relationships.
        </p>
        </Transition>
        {/* <h2 className = "text-center"> My skillset</h2> */}
        <br></br>
        <br></br>
        <p  className= "text-5xl block relative text-center font-ubuntu"> my skillset</p>
        <br></br>
        <div className= "flex  justify-center items-center">
            <FaBeer className={icon} />
            <SiHtml5 className={icon}></SiHtml5>
            <SiBootstrap className={icon}></SiBootstrap>
            <SiJavascript className={icon}></SiJavascript>
            <FaNode className={icon}></FaNode>
            <FaNpm className={icon}></FaNpm>
            <SiMysql className={icon}></SiMysql>
            <SiMongodb className={icon}></SiMongodb>
            <SiHandlebarsdotjs className={icon}></SiHandlebarsdotjs>
            <FaReact className={icon}></FaReact>            
            <SiSocketdotio className = {icon} />
            <SiGraphql className = {icon} /> 
        </div>

    </header>
  )
}
