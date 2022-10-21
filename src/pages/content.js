import React,{useEffect,useState} from "react";
import middle from "../components/assets/images/middle.PNG";
import projectOne from "../components/assets/images/projectOne.PNG";
import projectThree from "../components/assets/images/bubble.png";
import team from "../components/assets/images/team.png";
import weather from "../components/assets/images/weather.png";
import { Transition } from '@headlessui/react';
export default function Content(prop) {
  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(true);
  },[]);
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(prop.isShowing);
  },[prop.isShowing]);

  const portFolio = [
    {
      title: "Bubble Dungeonz",
      description: "Multiplayer game!",
      img: projectThree,
      repoLink: "https://github.com/l1keafox/bubbleDungeonz",
      deployLink: "https://bubbledungeonz.herokuapp.com/",
    },

    {
      title: "Middle-Where",
      description: "To determine where a group of people should meet",
      img: middle,
      repoLink: "https://github.com/l1keafox/middleWhere",
      deployLink: "https://limitless-temple-38712.herokuapp.com/",
    },
    {
      title: "RealTimeCommodities",
      description: "Using api's to get recent data.",
      img: projectOne,
      repoLink: "https://github.com/l1keafox/RealTimeCommodities",
      deployLink: "https://l1keafox.github.io/RealTimeCommodities/",
    },
    {
      title: "Weather DashBoard",
      description: "Get weather 5 days forward",
      img: weather,
      repoLink: "https://github.com/l1keafox/weatherDashboard",
      deployLink: "https://l1keafox.github.io/weatherDashboard/",
    },
    {
      title: "Team maker",
      description: "Command line interface, html out",
      img: team,
      repoLink: "https://github.com/l1keafox/myTeamSetting",
      deployLink: "https://l1keafox.github.io/myTeamSetting/",
    },
  ];
  ///100px180
  //
  // style={{ width: "100%", height: "50px" }}
  // class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
  var i = 0;
  return (
    <div>
      <Transition
          show={isShowing}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >

      <h1 className="text-center text-2xl"> My Projects </h1>
      <div className ='grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1'> 
      {portFolio.map((thought, index) => (
        <div className="max-w-sm w-full lg:max-w-full lg:flex p-2 " key={index}>
          <img
            className="h-48 lg:h-auto w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            src={thought.img}
          />
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {thought.title}
              </div>
              <p className="text-gray-700 text-base">{thought.description}</p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <a href={thought.repoLink} target="_blank">
                  <button className="bg-blue-500 hover:bg-blue-700 text-gray-900 font-bold py-2 px-4 m-2 rounded">
                    Repo
                  </button>
                </a>
                <a href={thought.deployLink} target="_blank">
                  <button className="bg-blue-500 hover:bg-blue-700 text-gray-600 font-bold py-2 px-4 rounded">
                    DeployLink
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      </Transition>

    </div>
  );
}
