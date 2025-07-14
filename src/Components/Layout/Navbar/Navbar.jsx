import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import "./navbar.css";
import Button from "../../Shared/Button";




const Navbar = () => {
    const navigate = useNavigate();

    return(
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="navbar-title"> Echo of Tomorrow</h1>
            </div>

            <div className="navbar-right">
                <Link to="/" className="btn secondary"> Home
                </Link>
                <Link to="/wall" className="btn secondary">
                Public Wall
                </Link>
                <Link to="/profile" className="btn secondary">
                Profile
                </Link>
                <Link to="/auth" className="btn primary">
                Logout
                </Link>
            </div>
            
        </nav>

        
    );
}

export default Navbar;