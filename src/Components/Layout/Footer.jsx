import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import "../Shared/footer.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaHome, FaInfoCircle, FaEnvelope, FaUsers, FaShieldAlt, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();
    return(
        <footer className="footer">
            <div className="footer-socials">
                <a href="https://www.instagram.com" target="">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.facebook.com" target="">
                  <FaFacebook size={24} />
                </a>
                <a href="https://www.linkedin.com" target="">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.github.com" target="">
                  <FaGithub size={24} />
                </a>
            </div>

            <div className="footer-nav">
                <a href="">
                    <FaHome className="footer-icon" /> Home
                </a>
                <a href="">
                    <FaInfoCircle className="footer-icon" /> About
                </a>
                <a href="">
                    <FaEnvelope className="footer-icon" /> Contact Us
                </a>
                <a href="">
                    <FaUsers className="footer-icon" /> Our Team
                </a>
                <a href="">
                    <FaShieldAlt className="footer-icon" /> Terms & Privacy
                </a>
            </div>

            <div className="footer-bottom">
                <p>
                    Copyright <FaRegCopyright className="copyright-icon" /> 2025; Designed by {""}
                    <span className="creator-name">SALEM</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer;