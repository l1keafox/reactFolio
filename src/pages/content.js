import React from 'react'
import middle from "../components/assets/images/middle.PNG";
import market from "../components/assets/images/digital-marketing-meeting.jpg";
import projectOne from "../components/assets/images/projectOne.PNG";
import projectThree from "../components/assets/images/middle.PNG";

export default function content() {
  const portFolio = [
    {
      title: "Middle-Where",
      description: "To determine where a group of people should meet",
      img: middle,
      repoLink: "https://github.com/l1keafox/middleWhere",
      deployLink: "https://limitless-temple-38712.herokuapp.com/"
    }  ,
    {
      title: "Commodities Tracker",
      description: "Using api's to get recent data.",
      img: projectOne,
      repoLink: "https://github.com/l1keafox/middleWhere",
      deployLink: "https://limitless-temple-38712.herokuapp.com/"
    }  ,
    {
      title: "Refractoring",
      description: "Refractoring",
      img: market,
      repoLink: "https://github.com/l1keafox/middleWhere",
      deployLink: "https://limitless-temple-38712.herokuapp.com/"
    }, 
    {
      title: "Project Three",
      description: "Refractoring",
      img: projectThree,
      repoLink: "https://github.com/l1keafox/middleWhere",
      deployLink: "https://limitless-temple-38712.herokuapp.com/"
    }, 


  ];
  ///100px180
  var i = 0;
    return (
    <div  className = "row">
      <h1> My Projects </h1>
      {/* {portFolio.map((thought) => (
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
{/* <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div className="flex items-center">
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div>         */}

      
    </div>
  )
}
