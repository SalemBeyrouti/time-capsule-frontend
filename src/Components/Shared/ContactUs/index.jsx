import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import "./styles.css";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <h1>Contact Us</h1>
        <p>
          Have a question, feedback, or support request? 
          Reach out to us at <strong>support@timecapsule.app</strong>.
        </p>
      </div>
    </>
  );
};

export default ContactUs;