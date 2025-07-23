import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import "./styles.css"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <h1>About</h1>
        <p>
          Welcome to Time Capsule — a platform for preserving moments that matter. 
          We help people leave messages for the future and celebrate meaningful memories.
        </p>
      </div>
    </>
  );
};

export default About;