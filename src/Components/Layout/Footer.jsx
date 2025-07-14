import React from "react";
import { useNavigate } from 'react-router-dom';
import "../Shared/footer.css";
import {  FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();
    return(
        <footer className="footer">
            <div className="footer-nav">
                <a href="">
                    Home
                </a>
                <a href="">
                    About
                </a>
                <a href="">
                    Contact Us
                </a>
                <a href="">
                    Our Team
                </a>
                <a href="">
                    Terms & Privacy
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