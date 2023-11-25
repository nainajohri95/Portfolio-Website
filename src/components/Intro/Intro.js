import React from "react";
import "./Intro.css";
import img from "../../assets/naina.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent"></div>
      <img src={img} alt="" className="img" />
    </section>
  );
};

export default Intro;
