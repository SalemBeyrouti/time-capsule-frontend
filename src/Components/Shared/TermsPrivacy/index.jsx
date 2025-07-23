import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import "./styles.css";

const TermsPrivacy = () => {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <h1>Terms & Privacy</h1>
        <p>
          Your data is your own. We never sell personal information. 
          By using Time Capsule, you agree to our terms and commitment to privacy.
        </p>
      </div>
    </>
  );
};

export default TermsPrivacy;