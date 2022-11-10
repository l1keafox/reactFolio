import React, { useEffect, useState } from "react";
import middle from "../components/assets/images/middle.PNG";
import projectOne from "../components/assets/images/projectOne.PNG";
import projectThree from "../components/assets/images/bubble.png";
import team from "../components/assets/images/team.png";
import portfolio from "../components/assets/images/portfolio.PNG";
import weather from "../components/assets/images/weather.png";
import { Transition } from "@headlessui/react";
import Paper from "@mui/material/Paper";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Portfolios = [
  {
    title: "Professional Portfolio",
    description:
      "This website! I made this from scratch using React, Material UI, tailwind and headless ui.",
    img: portfolio,
    repoLink: "https://github.com/l1keafox/reactFolio",
    deployLink: "https://l1keafox.github.io/reactFolio/",
  },

  {
    title: "Bubble Dungeonz",
    description:
      "A platform for game developers to host multi/single player games to interact with other users. Features a multiplayer bubble popping game, saved chat groups and customized display settings",
    img: projectThree,
    repoLink: "https://github.com/l1keafox/bubbleDungeonz",
    deployLink: "https://bubbledungeonz.herokuapp.com/",
  },

  {
    title: "Middle-Where",
    description:
      "A web app to find a centralized location for a group of friends. Users can create accounts and login, using google maps to display location of friends and the central meeting spot. This was my second group project of six people, I conceived the idea and pushed for MVP",
    img: middle,
    repoLink: "https://github.com/l1keafox/middleWhere",
    deployLink: "https://limitless-temple-38712.herokuapp.com/",
  },
  {
    title: "RealTimeCommodities",
    description:
      "My first group project, taking 5 people to make. It is a web app that will pull commodities news/prices through an API call. Uses google graphs to show history of commodity prices.",
    img: projectOne,
    repoLink: "https://github.com/l1keafox/RealTimeCommodities",
    deployLink: "https://l1keafox.github.io/RealTimeCommodities/",
  },
  {
    title: "Weather DashBoard",
    description:
      "An web app just made with the front end with bootstrap, jquery and openweathermap.org for the api. It will take in cities and forecast 5 days in the future ",
    img: weather,
    repoLink: "https://github.com/l1keafox/weatherDashboard",
    deployLink: "https://l1keafox.github.io/weatherDashboard/",
  },
  {
    title: "Team maker",
    description:
      "A node.js application that uses inquire to ask question in the command line. Afterwards it will create an html page of the team you have entered in. ",
    img: team,
    repoLink: "https://github.com/l1keafox/myTeamSetting",
    deployLink: "https://l1keafox.github.io/myTeamSetting/",
  },
];

export default function Content(prop) {
  const [isShowing, setIsShowing] = useState(false);
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(true);
  }, []);
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(prop.isShowing);
  }, [prop.isShowing]);

  const nextPortfolio = (e) => {
    let currentI = portfolioIndex;
    currentI++;
    if (currentI >= Portfolios.length) currentI = 0;
    setPortfolioIndex(currentI);
  };

  const previousPortfolio = (e) => {
    let currentI = portfolioIndex;
    currentI--;
    if (currentI < 0) currentI = Portfolios.length - 1;
    setPortfolioIndex(currentI);
  };

  ///100px180
  //
  // style={{ width: "100%", height: "50px" }}
  // class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
  return (
    <div>
      <Transition
        show={isShowing}
        enter="transition duration-1000 ease-in-out"
        enterFrom="transform translate-x-full opacity-0 "
        enterTo="transform translate-x-0  opacity-100"
        leave="transition duration-1000 ease-in-out"
        leaveFrom="transform translate-x-0  opacity-100"
        leaveTo="transform translate-y-full  opacity-0"
      >
        <div className="justify-around ">
          <h1 className="text-center text-5xl font-mono dark:text-white">
            {Portfolios[portfolioIndex].title}
          </h1>
          <div className="flex py-8 gap-x-2 gap-y-1 text-center items-center justify-between font-mono h-3/5">
            <AiFillCaretLeft
              onClick={previousPortfolio}
              className=" text-8xl hover:cursor-pointer"
            />
            {
              <div className="max-w-sm w-3/4 lg:max-w-full lg:flex p-3 py-6 ">
                <img
                  className="even:rotate-1 h-48 lg:h-auto w-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  src={Portfolios[portfolioIndex].img}
                />
                <div className="bg-slate-50 dark:bg-slate-700 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8 ">
                    <p className="text-gray-700 text-base dark:text-slate-50">
                      {Portfolios[portfolioIndex].description}
                    </p>
                  </div>
                  <div className="flex items-center  justify-center">
                    <div className="text-sm">
                      <a
                        href={Portfolios[portfolioIndex].repoLink}
                        target="_blank"
                      >
                        <button className="bg-blue-500 hover:bg-blue-700 text-gray-900 font-bold py-2 px-4 m-2 rounded">
                          Repo
                        </button>
                      </a>
                      <a
                        href={Portfolios[portfolioIndex].deployLink}
                        target="_blank"
                      >
                        <button className="bg-blue-500 hover:bg-blue-700 text-gray-900 font-bold py-2 px-4 rounded">
                          DeployLink
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            }
            <AiFillCaretRight
              onClick={nextPortfolio}
              className=" text-8xl hover:cursor-pointer"
            />
          </div>
        </div>
      </Transition>
    </div>
  );
}
