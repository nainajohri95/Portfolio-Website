import React from "react";
import "./Skills.css";
import webdev from "../../assets/webdev.png";
import softskill from "../../assets/softskills.png";
import java from "../../assets/java.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do </span>
      <span className="skillDesc">
        Final year B.Tech CS student at GLA University, Mathura, actively
        seeking new job opportunities. Eager to transition from academia to a
        dynamic professional role and contribute to innovative projects. Let's
        connect and explore potential collaborations!
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={webdev} alt="webdev" className="skillBarImg" />
          <div className="skillBarText">
            <h2> web Development</h2>
            <p>
              Having knowledge of HTML,CSS, JavaScript, ReactJS and some basic
              knowledge of Node.js and Express.js.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={java} alt="java" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java Development with DSA</h2>
            <p>
              Skilled in Java and making sense of Data Structures and Algorithms
              turning code into practical solutions with simplicity and
              precision.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={softskill} alt="softskill" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Soft Skills</h2>
            <p>
              <ul>
                <li>Networking</li>
                <li>Time managment</li>
                <li>Communication</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
