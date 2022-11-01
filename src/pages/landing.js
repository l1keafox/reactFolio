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
import Tooltip from '@mui/material/Tooltip';

export default function Landing(prop) {
  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    setIsShowing(true);
  },[]);
  useEffect(() => {
    setIsShowing(prop.isShowing);
  },[prop.isShowing]);
  
  const icon = "w-14 h-14  p-1  text-gray-500 hover:bg-blue-500";

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
            <p>I am a  
              <span className="text-green-400"> full stack </span>software engineer with a background in <span className="text-red-600">malware</span> research. I enjoy the process of creating programs, websites, clothes and relationships.</p>
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
          <Tooltip title="HTML5" arrow><div>
            <SiHtml5  className={icon}>Hi</SiHtml5>
          </div></Tooltip>
          <Tooltip title="Bootstrap" arrow><div>
            <SiBootstrap className={icon}></SiBootstrap>
            </div></Tooltip>

            <Tooltip title="Javascript" arrow><div>
            <SiJavascript  className={icon}></SiJavascript>
            </div></Tooltip>
            <Tooltip title="NodeJs" arrow><div>
            <FaNode className={icon}></FaNode>
            </div></Tooltip>
            <Tooltip title="NPM" arrow><div>
            <FaNpm className={icon}></FaNpm>
            </div></Tooltip>
            <Tooltip title="MySQL" arrow><div>
            <SiMysql className={icon}></SiMysql>
            </div></Tooltip>
            <Tooltip title="MongoDB" arrow><div>
            <SiMongodb className={icon}></SiMongodb>
            </div></Tooltip>
            <Tooltip title="Handlebars" arrow><div>
            <SiHandlebarsdotjs className={icon}></SiHandlebarsdotjs>
            </div></Tooltip>
            <Tooltip title="React" arrow><div>
            <FaReact className={icon}></FaReact>            
            </div></Tooltip>
            <Tooltip title="Socket.io" arrow><div>
            <SiSocketdotio className = {icon} />
            </div></Tooltip>
            <Tooltip title="GraphQL" arrow><div>
            <SiGraphql className = {icon} /> 
            </div></Tooltip>
            <Tooltip title="TailWind" arrow><div>
            <SiTailwindcss className = {icon} /> 
            </div></Tooltip>
            <Tooltip title="TypeScript" arrow><div>
            <SiTypescript className = {icon} /> 
            </div></Tooltip>

        </div>
        </Transition>
    </header>
  )
}
