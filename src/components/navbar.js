import React from 'react'
import TypeIt from "typeit-react";
export default function Navbar({navLink}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  //<img src={logo} style={{ width: "100%", height: "50px" }}></img>
  //onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
               <a href="#" className="flex">
          
                 <h1 className='font-serif text-2xl italic font-extrabold'><TypeIt> Raymond Lewis</TypeIt></h1>
               </a>
      
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">

             </path>
           </svg>

            </button>
          </div>
          <div
            className={
              "w-full md:block md:w-auto font-mono" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >

          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-mono md:font-mono">
            <li>
              <p className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-green-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick = {navLink}  data-nav="home"> Home </p>
            </li>
            <li>
              <p className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"  onClick = {navLink}  data-nav="aboutMe"> About Me </p>
            </li>
            <li>
              <p className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick = {navLink}  data-nav="portfolios"> Portfolios </p>
            </li>
            <li>
              <p className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"  onClick = {navLink}  data-nav="contactMe"> Contact Me </p>
            </li>
            <li>
              <p className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"  onClick = {navLink}  data-nav="resume"> Resume </p>
            </li>
          </ul>

          </div>
        </div>
      </nav>
    </>    

  )
}
