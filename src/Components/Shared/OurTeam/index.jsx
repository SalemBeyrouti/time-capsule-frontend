import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import "./styles.css";

const OurTeam = () => {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <h1>Our Team</h1>
        <p>
          We’re a group of developers, designers, and memory-keepers passionate 
          about preserving human experiences across time and space.
        </p>
      </div>
    </>
  );
};

export default OurTeam;