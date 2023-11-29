import React from "react";
import "./Projects.css";
import WebPiano from "../../assets/WebPiano.png";
import TodoList from "../../assets/TodoList.png";
import WeatherApp from "../../assets/WeatherApp.png";

const Projects = () => {
  return (
    <section id="works">
      <span className="heading">My Projects</span>
      <div className="projects">
        <div className="project1">
          <div className="projectTitle">WeatherApp</div>
          <img src={WeatherApp} alt="" className="projectImg" />
          <p className="projectDesc">
            Developed a user-friendly weather application with location-based
            weather information and intuitive features. <br />
            Technology - React, JavaScript, CSS and MaterialUI. <br />
            <a
              href="https://weather-app-naina.netlify.app

"
            >
              Live Link
            </a>
          </p>
        </div>

        <div className="project1">
          <div className="projectTitle">TodoList</div>
          <img src={TodoList} alt="" className="projectImg" />
          <p className="projectDesc">
            Developed a notes making app where users can add and delete notes.
            <br /> Technology - ReactJS, CSS and JavaScript. <br />
            <a href="https://nainareacttodolist.netlify.app">Live Link</a>
          </p>
        </div>

        <div className="project1">
          <div className="projectTitle">Portfolio Website</div>
          <img src="" alt="" className="projectImg" />
          <p className="projectDesc">
            some text <br />
            Technology - ReactJS, CSS and JavaScript. <br />
            <a href="">Live Link</a>
          </p>
        </div>

        <div className="project1">
          <div className="projectTitle">WebPiano</div>
          <img src={WebPiano} alt="" className="projectImg" />
          <p className="projectDesc">
            Crafted an immersive web-based piano application <br />
            Technology - HTML, CSS and JavaScript. <br />
            <a href="https://pianobynainajohri.netlify.app">Live Link</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
