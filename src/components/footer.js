import React from 'react'

import {
  SiLinkedin,
  SiGithub
} from "react-icons/si";
import {
  BsTelephone
} from "react-icons/bs";
import {
  AiOutlineMail
} from "react-icons/ai";
import Tooltip from '@mui/material/Tooltip';


export default function footer() {
  const icon = "w-10 h-10  p-1  ";
  return (
    <footer className = "flex items-center justify-around font-mono py-2">
      <Tooltip title="3034752882" arrow>
        <a href="tel:+13034752882" className= "flex flex-col items-center justify-center text-red-500 hover:bg-red-200"><BsTelephone className={icon} /></a>
      </Tooltip>        
      <Tooltip title="raymond.ed.lewis@gmail.com" arrow>
        <a href="mailto: raymond.ed.lewis@gmail.com" className= "flex flex-col items-center justify-center text-blue-400  hover:bg-blue-100"><AiOutlineMail  className={icon}  /></a>
        </Tooltip>        
        
        <Tooltip title="https://www.linkedin.com/in/raymond-lewis-51719325/" arrow>
        <a href="https://www.linkedin.com/in/raymond-lewis-51719325/" target="_blank" className= "flex flex-col items-center justify-center text-green-600  hover:bg-green-300"><SiLinkedin  className={icon} /></a>
        </Tooltip>        
        <Tooltip title="https://github.com/l1keafox" arrow>
        <a href="https://github.com/l1keafox" target="_blank" className= "flex flex-col items-center justify-center text-yellow-300  hover:bg-yellow-100"><SiGithub   className={icon} /></a>
        </Tooltip>        
    </footer>
  )
}
