import React from 'react';
// import NBAImage from "../../images/NBA-Team-Stats.png";
import EachCard from "../EachCard"
import nbaImage from "../../images/NBA-Team-Stats.png"
const projectData = [
  {
    name: "NBA Team Stats",
    image: nbaImage,
    githubUrl: "https://github.com/kencford/NBA-Team-Stats.git",
    url: "https://kencford.github.io/NBA-Team-Stats/"
  },
  {
    name: "NBA Team Stats",
    image: nbaImage,
    githubUrl: "https://github.com/kencford/Mental-Health-Tracker.git",
    url: "https://mental-health-tracker-kac.herokuapp.com/"
  },
]

const showProjects = () => {
  return projectData.map((project) => (
      <EachCard 
      name = {project.name}
      image = {project.image}
      githubUrl = {project.githubUrl}
      url = {project.url}
      />
  ))
}

export default function Portfolio() {
  return (
 <>
 <h1>My Projects</h1>
 {showProjects()}
 </>
  );
}
