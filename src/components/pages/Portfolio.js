import React from 'react';
// import NBAImage from "../../images/NBA-Team-Stats.png";
import EachCard from "../EachCard"
import nbaImage from "../../images/NBA-Team-Stats.png"
import pwImage from "../../images/Password-Generator.png"
import wdImage from "../../images/Work-Day-Scheduler.png"
import mhImage from "../../images/Mental-Health-Tracker.png"
import dqImage from "../../images/Music-Dance-Challenge.png"
import tbImage from "../../images/The-Tech-Blog.png"
const projectData = [
  {
    name: "NBA Team Stats",
    image: nbaImage,
    githubUrl: "https://github.com/kencford/NBA-Team-Stats.git",
    url: "https://kencford.github.io/NBA-Team-Stats/"
  },
  {
    name: "Password Generator",
    image: pwImage,
    githubUrl: "https://github.com/kencford/Password-Generator.git",
    url: "https://kencford.github.io/Password-Generator/"
  },
  {
    name: "Work Day Scheduler",
    image: wdImage,
    githubUrl: "https://github.com/kencford/Work-Day-Scheduler.git",
    url: "https://kencford.github.io/Work-Day-Scheduler/"
  },
  {
    name: "Mental Health Tracker",
    image: mhImage,
    githubUrl: "https://github.com/kencford/Mental-Health-Tracker.git",
    url: "https://mental-health-tracker-kac.herokuapp.com/"
  },
  {
    name: "Dance Quiz",
    image: dqImage,
    githubUrl: "https://github.com/kencford/Dance-Quiz.git",
    url: "https://kencford.github.io/Dance-Quiz/"
  },
  {
    name: "Tech Blog",
    image: tbImage,
    githubUrl: "https://github.com/kencford/MVC-Tech-Blog.git",
    url: "https://tech-blog-kac.herokuapp.com/"
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
