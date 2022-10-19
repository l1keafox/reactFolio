import logo from "./logo.svg";
import "./App.css";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./pages/landing";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Content from "./pages/content";
import Resume from "./pages/resume";

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [stage, setStage] = useState("page-bg onLoad");


  // const navLink = (e) => {
  //   console.log(e.target);
  //   //setStage(e.target.getAttribute("data-nav"));
  // };
  const navLink = (e) => {
    setStage(e.target.getAttribute("data-nav"));
  };
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(true);
    setShowPage(true);
  }, []);
  const timed = function (e) {
    console.log("here", e.target.innerText);
    setShowPage(false);
    setTimeout(() => { 
      //console.log('hi')

    }, 1000)    
  };
  let displayContent = <Landing />;

  switch (stage) {
    // case "aboutMe":
    //   displayContent = <AboutMe />;
    //   break;
    // case "contact":
    //   displayContent = <Contact />;
    //   break;
    // case "resume":
    //   displayContent = <Resume />;
    //   break;
    default:
      displayContent = <Landing />;
      break;
  }

  return (
    <div className="flex flex-col h-screen justify-between">
        <Transition
          show={isShowing}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* <Navbar  timedUnMount={timed} /> */}
        </Transition>
        {showPage ? (
          displayContent
        ) : (
          <div></div>
        )}
        <Footer />
    </div>
  );
}

export default App;
