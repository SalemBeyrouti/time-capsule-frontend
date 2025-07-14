import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import {  FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    
    return(
        <div className="footer">
            <div className="footer-nav">
               <Link to="/" className="footer-link">Home</Link>
               <Link to="/about" className="footer-link">About</Link>
               <Link to="/contact" className="footer-link">Contact Us</Link>
               <Link to="/team" className="footer-link">Our Team</Link>
               <Link to="/privacy" className="footer-link">Terms & Privacy</Link>
            </div>

            <div className="footer-bottom">
                <p>
                    Copyright <FaRegCopyright className="copyright-icon" /> 2025; Designed by {""}
                    <span className="creator-name">SALEM</span>
                </p>
            </div>
        </div>
    )
}

export default Footer;