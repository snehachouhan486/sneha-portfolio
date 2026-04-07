import React from "react";
import './Aboutpage.css';
import { FaDownload, FaInstagram } from "react-icons/fa";

const Aboutpage = () => {
  return (
    <section className="container about-section text-white py-5">
      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-lg-4 text-center" data-aos="fade-right">

          <div className="profile-img-container">
            <img src="./img2.jpeg" alt="Profile" className="profile-img" />
          </div>

          <div className="social-icons mt-3">
            <a href="https://www.instagram.com/ishi_7700/"><FaInstagram /></a>
            
          
         
          </div>

          <h4 className="section-subtitle mt-4">Information</h4>
          <h2 className="section-title">About Me</h2>

          <p className="about-text">
          I’m <strong>Sneha Chouhan</strong>, a dedicated Full Stack Developer
          with a passion for crafting scalable and intuitive web applications.
            I enjoy working across both frontend and backend to deliver smooth
            and engaging digital experiences.
          </p>

          <p className="quote">
I love turning ideas into impactful solutions that shape the future.
          </p>

          <a
            href=""
            className="download-btn"
            download=""
          >
            Download CV <FaDownload className="ms-2" />
          </a>
        </div>


        {/* RIGHT SIDE */}
        <div className="col-lg-8">
          <div className="row g-4">


            <SkillCard
              title1="Frontend"
              title2="Web"
              skills={["React.js", "Bootstrap", "HTML", "CSS", "JavaScript"]}
            />

            <SkillCard
              title1="Backend"
              title2="Web"
              skills={["Express", "Node.js",]}
            />

            
            <SkillCard
              title1="Database"
              title2=""
              skills={["MongoDB",  "MySql"]}
            />

            
            <SkillCard
              title1="version"
              title2="control"
              skills={["Git","Github"]}
            />



          </div>
        </div>

      </div>
    </section>
  );
};


/* reusable skill card component */
const SkillCard = ({ title1, title2, skills }) => {
  return (
    <div className="col-md-6" data-aos="fade-up">
      <div className="about-card p-4 rounded h-100">

        <h3>{title1}</h3>
        <h3 className="mb-3">{title2}</h3>

        {skills.map((skill, index) => (
          <p key={index} className="skill-text">{skill}</p>
        ))}

      </div>
    </div>
  );
};

export default Aboutpage;