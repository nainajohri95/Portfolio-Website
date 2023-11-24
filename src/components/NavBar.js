import React from "react";
import logo from "../assets/n logo.png";
import "./NavBar.css";
import { Link } from "react-scroll";
import contactImg from "../assets/contact.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
        <Link className="menuitem">Home</Link>
        <Link className="menuitem">About</Link>
        <Link className="menuitem">Projects</Link>
        <Link className="menuitem">Resume</Link>
      </div>
      <button className="btn">
        <img src={contactImg} alt="" className="icon" /> Contact Me
      </button>
    </nav>
  );
};

export default NavBar;
