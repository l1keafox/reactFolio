import logo from './logo.svg';
import './App.css';
import { Transition } from '@headlessui/react'
import { useState,setStage,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Content from "./pages/content";
import Resume from "./pages/resume";

function App() {
  const [isShowing, setIsShowing] = useState(false)
  const navLink = (e) => {
    setStage(e.target.getAttribute("data-nav"));
  };
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(true);
  },[]);

  return (
    <>
        <Transition
          show={isShowing}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
        <Navbar chng={navLink} />
        </Transition>
      <Router>
        <Routes>
        <Route path= "/" element={<Landing />} />
        <Route path= "/aboutMe" element={<AboutMe />} />
        <Route path= "/contact" element={<Contact />} />
        <Route path= "/content" element={<Content />} />
        <Route path= "/resume" element={<Resume />} />
        
            
        </Routes>
      </Router>
    </>
  )
}

export default App;
