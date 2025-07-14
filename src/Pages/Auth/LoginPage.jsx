
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Email: ", email);
        console.log("Password: ", password);
        
        navigate("/wall");
    };

    return (
            
            <div className="login-page">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Login</h2>

                    <div className="form-group-login">

                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    </div>

                    <div className="form-group-login">

                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    </div>

                    <button type="submit" className="login-button">Login</button>

                    <p className="signup-link">
                        Dont have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
    );
    
}
export default LoginPage;