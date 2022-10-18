import logo from "./logo.svg";
import "./App.css";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Content from "./pages/content";
import Resume from "./pages/resume";

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const navLink = (e) => {
    console.log(e.target);
    //setStage(e.target.getAttribute("data-nav"));
  };
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(true);
  }, []);

  return (
    <>
      <Router>
        <Transition
          show={isShowing}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Navbar chng={navLink} />
        </Transition>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/content" element={<Content />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
