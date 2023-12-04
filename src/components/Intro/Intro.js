import React from "react";
import "./Intro.css";
import bg from "../../assets/NainaImg.png";
import linkedInImg from "../../assets/linkedin-icon-png-16.jpg";
import GithubImg from "../../assets/github-icon.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Naina Johri</span>
          <br /> Front End Developer
        </span>

        <p className="introPara">
          I'm on a mission to craft exceptional web experiences that <br />
          captivate and connect. With expertise as a Front-End Developer, I
          breathe life <br />
          into digital landscapes, blending creativity and interactivity.
        </p>

        <div className="logo-container">
          <a
            href="https://www.linkedin.com/in/naina-johri/"
            target="_blank"
            rel="noreferrer"
            className="logo-link"
          >
            <img src={linkedInImg} alt="LinkedIn" className="logo" />
          </a>

          <a
            href="https://github.com/nainajohri95"
            target="_blank"
            className="logo-link"
            rel="noreferrer"
          >
            <img src={GithubImg} alt="GitHub" className="logo" />
          </a>
        </div>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
