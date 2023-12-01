import React, { useState } from "react";
import logo from "../../assets/n logo.png";
import "./NavBar.css";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const NavBar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menuitem"
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menuitem"
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menuitem"
        >
          Projects
        </Link>

        <a
          href="https://drive.google.com/file/d/1iUS0DtC14xeavlRrU0aFpvs5eThdTlK1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="menuitem resume"
        >
          Resume
        </a>
      </div>
      <button
        className="btn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img
          src={contactImg}
          alt=""
          className="icon"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
        Contact Me
      </button>
      {/* //.................BergerMenu.................. */}

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setshowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="Listitem"
          onClick={() => setshowMenu(false)}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="Listitem"
          onClick={() => setshowMenu(false)}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="Listitem"
          onClick={() => setshowMenu(false)}
        >
          Projects
        </Link>

        <a
          href="https://drive.google.com/file/d/1iUS0DtC14xeavlRrU0aFpvs5eThdTlK1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="Listitem resume"
          onClick={() => setshowMenu(false)}
        >
          Resume
        </a>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="Listitem"
          onClick={() => setshowMenu(!showMenu)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
