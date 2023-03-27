import React from "react";
import { TypeAnimation } from "react-type-animation";
import aboutme from "../images/About-me.png";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const About = () => {
  return (
    <div className="about-container" data-aos="fade-up"
      data-aos-duration="2000">
      <div className="about-content">
        <div className="about-content-img">
          <h2>
            <TypeAnimation
              sequence={["About Me", 4000, "About Me", 4000]}
              speed={10}
              repeat={Infinity}
            />
          </h2>
          <img src={aboutme} alt="" />
          <a href="https://www.instagram.com/mahmutsaba" className="about-link">
            <AiFillInstagram className="about-icons my-4 me-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmut-saba-7643b3250/"
            className="about-link"
          >
            <AiFillLinkedin className="about-icons my-4 me-1" />
          </a>
          <a href="https://github.com/mahmutsabaa" className="about-link">
            <AiFillGithub className="about-icons my-4 " />
          </a>
        </div>
        <div>
          <p>
            Hello, my name is Mahmut SABA and I am a front-end developer with 1
            year of experience in developing responsive, user-friendly websites
            and web applications using HTML, CSS, and JavaScript.I am proficient
            in various front-end frameworks such as React and have a strong
            understanding of web accessibility standards and SEO
          </p>
          <p>
            I am proficient in various front-end frameworks such as React and
            have a strong understanding of web accessibility standards and SEO
            best practices. I also have experience with version control systems
            such as Git and am comfortable working with agile development
            methodologies.
          </p>
          <p>
            In my free time, I enjoy exploring new technologies and staying
            up-to-date with the latest web development trends. I am a
            self-motivated individual who enjoys working collaboratively with
            other developers, designers, and stakeholders to deliver
            high-quality products that meet user needs.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
