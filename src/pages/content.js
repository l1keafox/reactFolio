import React from "react";
import middle from "../components/assets/images/middle.PNG";
import market from "../components/assets/images/digital-marketing-meeting.jpg";
import projectOne from "../components/assets/images/projectOne.PNG";
import projectThree from "../components/assets/images/bubble.png";
import team from "../components/assets/images/team.png";
import weather from "../components/assets/images/weather.png";
import { Link } from "react-router-dom";

export default function content() {
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
      title: "Refractoring",
      description: "Refractoring",
      img: market,
      repoLink: "https://github.com/l1keafox/middleWhere",
      deployLink: "https://limitless-temple-38712.herokuapp.com/",
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
      <h1> My Projects </h1>
      {portFolio.map((thought, index) => (
        <div className="max-w-sm w-full lg:max-w-full lg:flex p-2 " key={index}>
          <img
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
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
      {/* 
      <Card style={{ width: '18rem' }} key="{i++}">
      <Card.Img variant="top" src={thought.img} />
      <Card.Body>
        <Card.Title>{thought.title}</Card.Title>
        <Card.Text>
          {thought.description}
        </Card.Text>
        <Card.Link href={thought.repoLink}>Repo link</Card.Link>
        <Card.Link href={thought.deployLink}>Deploy Link</Card.Link>
      </Card.Body>
      </Card>
      ))} */}
      {/*

        */}
    </div>
  );
}
