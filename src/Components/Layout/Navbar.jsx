import React from "react";
import { useNavigate } from 'react-router-dom';
import "../Shared/navbar.css";




const Navbar = () => {
    const navigate = useNavigate();
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="navbar-title"> Echo of Tomorrow</h1>
            </div>

            <div className="navbar-right">
                <button onClick={() =>  navigate("/")} className="nav-link">Home</button>
                <button onClick={() =>  navigate("/wall")} className="nav-link">Public Wall</button>
                <button onClick={() =>  navigate("/profile")} className="nav-link">Profile</button>
                <button className="logout-button">Logout</button>
            </div>
            
        </nav>

        
    );
}

export default Navbar;