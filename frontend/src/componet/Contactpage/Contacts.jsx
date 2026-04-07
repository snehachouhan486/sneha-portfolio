import React, { useState } from "react";
import "./Contacts.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contacts() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/send", {   
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message sent ✅");

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        alert("Failed to send message ❌");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <section className="contact-container">

      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3 className="contact-head">Get in touch</h3>
          <p>Feel free to reach out 👋</p>

          <div className="info-item">
            <FaPhoneAlt /> +91 9131121635
          </div>

          <div className="info-item">
            <FaEnvelope /> snehachouhan277@gmail.com
          </div>

          <div className="info-item">
            <FaMapMarkerAlt /> Bhopal, MP
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contacts;