import { useState } from "react"; 
import Button from "../../../Shared/Button";
import TextInput from "../../../Shared/TextInput/TextInput";

const SignupPage = ({ toggle }) => {
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

    };

    return (
        <>
        
                <h2 className="auth-title">Sign up</h2>
                <TextInput
                    label="Full Name"
                    name="fullName"
                    type="name"
                    placeholder="Enter your Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    />

              <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

              <TextInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

               

                <Button 
                    text={"Sign up"} variant="primary" type="submit" className="signup-button" />

                <p className="auth-switch"> Already have an account? 
                    <span className="auth-toggle" onClick={toggle}>
                        {" "}
                        Login
                    </span>
                </p>
            
        
        </>
    );
};

export default SignupPage;