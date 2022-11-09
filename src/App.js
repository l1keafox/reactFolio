import "./App.css";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./pages/landing";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Content from "./pages/content";
import Resume from "./pages/resume";


const Pages = {
  landing: 'landing',
  aboutMe: 'aboutMe',
  portfolios: 'portfolios',
  contactMe: 'contactMe',
  resume: 'resume',
}

function App() {
  const [navBarShowing, setNavbarShowing] = useState(false);
  const [stage, setStage] = useState(Pages.landing);
  const [loading, setLoading] = useState(false);
  
  let displayContent;

  useEffect(() => {
    setNavbarShowing(true);
    setLoading(true);
  }, []);


  function changeStage(nextStage){
    console.log(nextStage);
    setLoading(false);

    setTimeout( () =>{
      setStage(nextStage);
      setLoading(true);
    },1000);
  };

  switch (stage) {
    case Pages.aboutMe:
      displayContent = <AboutMe isShowing={loading} />;
      break;
    case Pages.contactMe:
      displayContent = <Contact isShowing={loading} />;
      break;
    case Pages.portfolios:
      displayContent = <Content isShowing={loading} />;
      break;
    case Pages.resume:
      displayContent = <Resume isShowing={loading} />;
      break;
    case Pages.landing:
    default:
      displayContent = <Landing isShowing={loading} />;
      break;
  }
  console.log(stage,displayContent);

  return (
    <div className="flex flex-col h-screen justify-between dark:bg-gradient-to-t from-indigo-500 to-black">
      <Transition
        show={navBarShowing}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 rotate-[-120deg] scale-50"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Navbar navLink={(e) => changeStage(e.target.getAttribute("data-nav"))} />
      </Transition>
      {displayContent ?? <Landing isShowing={loading}/>}
      <Footer />
    </div>
  );
}

export default App;
