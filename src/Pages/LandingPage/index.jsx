import React from "react";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import Footer from "../../Components/Layout/Footer/Footer";
import "./style.css"
import { IoMdContacts, IoMdAdd  } from "react-icons/io";
import { MdOutlineMessage, MdOutlineFileUpload, MdOutlineShare   } from "react-icons/md"
import { FaStar } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import Button from "../../Components/Shared/Button";
import { useNavigate } from "react-router-dom";




const LandingPage =() => {
    
    const navigate = useNavigate();
    return(
        <>
        <Navbar />

        
        <main className="landing-main">
            <section className="hero-section">
                <div className="hero-text">
                    <h1>WRTIE A LETTER TO YOUR <span className="highlight">FUTURE SELF</span></h1>
                    <h3>Unlock your memories</h3>
                    <p>
                        Create meaningul time capsules, share your stories with loved ones, and  discover memories from around the world. Your digital legacy starts here.
                    </p>
                    <Button onClick={() =>navigate("/createcapsule")} text="Create Capsule" variant="primary" className="cta-button" />
                    <div className="capsule-review">
                        <span><IoMdContacts /> 1k+ Members</span>
                        <span> <MdOutlineMessage /> 500+ Capsules
                        </span>
                        <span> <FaStar /> 4.2 Rating
                        </span>
                    </div>
                </div>


                <div className="steps-section">
                    <div className="step-card">
                        <span><IoMdAdd /> </span>
                        <div>
                            <h4>Create Your Capsule </h4>
                            <p>Start by giving your time capsule a meaningful name and description</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <span><MdOutlineFileUpload /> </span>
                        <div>
                            <h4>Add Your Content </h4>
                            <p>Upload photos, videos, write letters, or record voice messages.</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <span><FiCalendar /> </span>
                        <div>
                            <h4>Set the Timeline </h4>
                            <p>Choose when your capsule will be opened - from 1 year to 10 years</p>
                        </div>
                    </div>
                    <div className="step-card">
                        <span><MdOutlineShare /> </span>
                        <div>
                            <h4>Share & Preserve </h4>
                            <p>Invite loved ones or keep it private. Your memories are safely stored.</p>
                        </div>
                    </div>

                </div>
            </section>
        </main>

        <Footer />
        </>
    );
};

export default LandingPage;