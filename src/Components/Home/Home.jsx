import React from "react";
import photo from "../images/photo1.png";
import "animate.css";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import Skills from "../Skills/Skills"
import About from "../About/About";
import Projects from "../Projects/Projects";

import AOS from "aos"

function Home({ pcolors, setPcolors }) {
  AOS.init({ duration: 2000 })
  return (
    <>
      <div className="home container-fluid ">
        <div className="home-content  ">
          <div className="home-content-left " data-aos="fade-right"
          >
            <h1 className="home-content-left-title">Hi!, I'm Mahmut SABA</h1>
            <h2 className="home-content-left-subtitle">
              <TypeAnimation
                style={{ color: "#EEC026" }}
                sequence={["Front-end Developer", 1500, "Designer", 1500]}
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className={pcolors}>
              Hello,I am a front-end developer. I have 6 months of experience in
              developing responsive, user-friendly websites and web applications
              using Photoshop,HTML, CSS, and JavaScript.
            </p>
            <button className="home-content-left-btn ">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"> </span>
              </span>
              <span className="button-text ">Download CV</span>
            </button>
          </div>
          <div className="home-content-right  " data-aos="fade-left">
            <img src={photo} alt="Photoo" />
          </div>
        </div>

        <NavLink
          to="/skills"
          className="nav-links arrow-dropp"
          activeClassName="active"
        >
          <svg
            viewBox="0 0 20 20"
            width="100"
            height="100"
            data-aos="fade-down"
          >
            <path
              d="M2 6 L10 14 L18 6"
              stroke="#02a0dc"
              stroke-width="2"
              fill="none"
            />
          </svg>
        </NavLink>
      </div>
      <Skills />
      <Projects />
      <About /><br /><br /><br /><br /><br /><br />
    </>
  );
}

export default Home;
