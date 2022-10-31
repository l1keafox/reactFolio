import { Transition } from '@headlessui/react';
import { useState ,useEffect} from 'react'
import {
  SiHtml5,
  SiBootstrap,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiSocketdotio,
  SiGraphql,
  SiTailwindcss,
  SiHandlebarsdotjs,
  SiTypescript,
} from "react-icons/si";
import { FaNode, FaNpm, FaReact } from "react-icons/fa";
export default function Landing(prop) {
  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    setIsShowing(true);
  },[]);
  useEffect(() => {
    setIsShowing(prop.isShowing);
  },[prop.isShowing]);
  
  const icon = "w-14 h-14  p-1  text-gray-500";

  return (
    <header className='flex flex-col  py-8 gap-x-2 gap-y-1 text-center items-center justify-center font-mono'>
      <Transition
          show={isShowing}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >

        <div className="w-4/5 mx-auto">
          <div className="flex justify-center items-center space-x-16 text-5xl font-ubuntu">
            <p>I am a full stack software engineer with a background in malware research. I enjoy the process of creating programs, websites, clothes and relationships.</p>
          </div>
        </div>

        </Transition>
        <br></br>
        <br></br>
        <Transition
          show={isShowing}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
        <p  className= "text-5xl block relative text-center font-ubuntu"> my skillset</p>
        <br></br>

        <div className= "flex  justify-center items-center">
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
            <SiTailwindcss className = {icon} /> 
            <SiTypescript className = {icon} /> 
            

        </div>
        </Transition>
    </header>
  )
}
