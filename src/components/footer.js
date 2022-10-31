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



export default function footer() {
  const icon = "w-10 h-10  p-1  ";
  return (
    <footer className = "flex items-center justify-around font-mono py-2">
        <a href="tel:+13034752882" className= "flex flex-col items-center justify-center text-red-500"><BsTelephone className={icon} /></a>
        
        <a href="mailto: raymond.ed.lewis@gmail.com" className= "flex flex-col items-center justify-center text-blue-400"><AiOutlineMail  className={icon}  /></a>
        
        <a href="https://www.linkedin.com/in/raymond-lewis-51719325/" target="_blank" className= "flex flex-col items-center justify-center text-green-600"><SiLinkedin  className={icon} /></a>
        <a href="https://github.com/l1keafox" target="_blank" className= "flex flex-col items-center justify-center text-yellow-300"><SiGithub   className={icon} /></a>
    </footer>
  )
}
