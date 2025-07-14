
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Signup.css";


const SignupPage = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("name:", fullName);
        console.log("email", email);
        console.log("password", password);

        navigate("/wall");
    };

    return (
        <div className="signup-page">
            <form className="signup-form" onSubmit={handleSignup}>
                <h2>Sign up</h2>
             <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>  

              <div className="form-group">

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

              </div>

              <div className="form-group">

                    <label>Password</label>
                    <input type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required />

               </div> 

               <div className="form-group">

                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                </div>

                <button type="submit" className="signup-button">Sign Up</button>

                <p className="login-link"> Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default SignupPage;