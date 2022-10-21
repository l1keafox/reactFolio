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
  const [navBarShowing, setNavbarShowing] = useState(false);
  const [stage, setStage] = useState("page-bg onLoad");
  const [loading, setLoading] = useState(false);

  const [loadLanding, setLoadLanding] = useState(false);
  const [loadAboutMe, setLoadAboutMe] = useState(false);
  const [loadPortfolio, setLoadPortfolio] = useState(false);
  const [loadContact, setLoadContact] = useState(false);
  const [loadResume, setLoadResume] = useState(false);

  const navLink = (e) => {
    // setLoading(true);
    //setLoadLanding(false);
    setAllFalseBut(e.target.getAttribute("data-nav"));
    console.log(
      e.target.getAttribute("data-nav"),
      loading,

      "Loading?"
    );
  };
  useEffect(() => {
    // Update the document title using the browser API
    setLoadLanding(true);
    setNavbarShowing(true);
  }, []);

  function setAllFalseBut(notFalse) {
    setLoadLanding(false);
    setLoadAboutMe(false);
    setLoadPortfolio(false);
    setLoadContact(false);
    setLoadResume(false);

    switch (notFalse) {
      case "aboutMe":
        setTimeout(() => {
          setStage(notFalse);
          // setLoading(false);
          setLoadAboutMe(true);
        }, 1000);

        break;
      case "portfolios":
        setTimeout(() => {
          setStage(notFalse);
          // setLoading(false);
          setLoadPortfolio(true);
        }, 1000);

        break;
      case "contactMe":
        setTimeout(() => {
          setStage(notFalse);
          // setLoading(false);
          setLoadContact(true);
        }, 1000);

        break;

      case "resume":
        setTimeout(() => {
          setStage(notFalse);
          // setLoading(false);
          setLoadResume(true);
        }, 1000);

        break;

      default:
        setTimeout(() => {
          setStage(notFalse);
          // setLoading(false);
          setLoadLanding(true);
        }, 1000);
        break;
    }
  }
  let displayContent = <Landing isShowing={loadLanding} />;

  switch (stage) {
    case "aboutMe":
      displayContent = <AboutMe isShowing={loadAboutMe} />;
      break;
    case "contactMe":
      displayContent = <Contact isShowing={loadContact} />;
      break;
    case "portfolios":
      displayContent = <Content isShowing={loadPortfolio} />;
      break;
    case "resume":
      displayContent = <Resume isShowing={loadResume} />;
      break;
    default:
      displayContent = <Landing isShowing={loadLanding} />;
      break;
  }

  return (
    <div className="flex flex-col h-screen justify-between">
      <Transition
        show={navBarShowing}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Navbar navLink={navLink} />
      </Transition>
      {displayContent}
      <Footer />
    </div>
  );
}

export default App;
