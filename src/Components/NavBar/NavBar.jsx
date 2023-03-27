import { Outlet, NavLink } from "react-router-dom";
import images from "../images/logo.png";
import { TiTimes } from "react-icons/ti";
import { FaBars,FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
function NavBar({ pcolors, setPcolors, pcolors2, setPcolors2 }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const setDarkMode = () => {
    if (pcolors === "home-content-left-paragraph") {
      setPcolors("home-content-left-paragraph-2");
    } else {
      setPcolors("home-content-left-paragraph");
    }

    if (document.body.classList.contains("body-dark")) {
      document.body.classList.remove("body-dark");
      document.body.classList.add("body-light");
    } else {
      document.body.classList.remove("body-light");
      document.body.classList.add("body-dark");
    }
    if (pcolors2 === "projects-p") {
      setPcolors2("projects-p-2");
    } else {
      setPcolors2("projects-p");
    }
  };

  return (
    <>
      <nav className="navbar ">
        <div className="nav-container container-fluid">
          <NavLink to="/" className="nav-logo">
            <img src={images} alt="logo" width={100} />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                activeClassName="active"
                onClick={handleClick}
              >
                <i class="fa fa-home mx-1"></i>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/skills"
                className="nav-links"
                activeClassName="active"
                onClick={handleClick}
              >
                <GiSkills className=" ıcon mx-2" />
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/project"
                className="nav-links"
                activeClassName="active"
                onClick={handleClick}
              >
                <FaProjectDiagram className="ıcon mx-2 " />
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                activeClassName="active"
                onClick={handleClick}
              >
                  <BsFillPersonLinesFill className="ıcon mx-2" />
                About
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon " onClick={handleClick}>
            {click ? <TiTimes /> : <FaBars />}
          </div>
          <div className="toggle-switch mb-4">
            <label className="switch-label">
              <input
                type="checkbox"
                className="checkbox"
                onChange={setDarkMode}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
