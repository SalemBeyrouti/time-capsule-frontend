import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import "../Shared/navbar.css";




const Navbar = () => {
    const navigate = useNavigate();
    return(
        <nav className="navbar">
            <div className="navbar-left">
                {/* <img src="../Assets/echo-of-tomorrow.png" alt="Logo" className="navbar-logo"/> */}
                <h1 className="navbar-title"> Echo of Tomorrow</h1>
            </div>

            <div className="navbar-right">
                <button onClick={() =>  navigate("/")} className="nav-button">Home</button>
                <button onClick={() =>  navigate("/wall")} className="nav-button">Public Wall</button>
                <button onClick={() =>  navigate("/profile")} className="nav-button">Profile</button>
                <button className="logout-button">Logout</button>
            </div>
            
        </nav>

        
    );
}

export default Navbar;