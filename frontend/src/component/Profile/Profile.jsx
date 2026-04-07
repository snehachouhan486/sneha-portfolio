import React from "react";
import "./profile.css";




function Profile() {
  return (
    <section className="profile-container container">

      {/* LEFT SIDE TEXT */}
      <div className="profile-left">

        <h4>Hello, I'm</h4>

        <h1>
          <span>SNEHA CHOUHAN</span>
        </h1>

        <h2>Full Stack Developer </h2>

        <p>
        specializing in the MERN Stack and passionate about building scalable and efficient web applications using modern technologies.
        I enjoy building user-friendly interfaces, developing reliable backend systems, and solving real-world problems with clean code.
        My goal is to deliver high-quality digital solutions that create meaningful and lasting user experiences.
        </p>

        {/* BUTTONS */}
        <div className="profile-buttons">


          <button className="cv-btn">
            Download CV
          </button>

        </div>

       

      </div>


      {/* RIGHT SIDE IMAGE */}
      <div className="profile-right">

        <img src="img1.jpeg" alt="profile" />

      </div>

    </section>
  );
}

export default Profile;