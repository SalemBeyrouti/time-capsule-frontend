import { useState } from "react"; 
import Button from "../../../Shared/Button";
import axios from "../../../../api/axios";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../Shared/TextInput/TextInput";



const SignupPage = ({ toggle }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("success");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setMessage("Passwords do not match");
            setMessageType("error")
            return;
        }

        try {
            await axios.post("/guest/register", {
                name: fullName,
                email,
                password,
            });
            setMessage("Registration successfull! you can now login.");
            setMessageType("success");
        }
        catch(error) {
            setMessage("Registration failed! check your info.");
            setMessageType("error");
        }

    };

    return (
        <>
        {message && (
            <div className={`message ${messageType}`}>
                {message}
            </div>
        )}
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
                    text={"Sign up"} variant="primary" type="submit" className="signup-button" onClick={handleSignup} />

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