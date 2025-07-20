import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../../api/axios";
import TextInput from "../../../Shared/TextInput/TextInput";
import Button from "../../../Shared/Button";


const LoginPage = ({ toggle }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("success");

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post("/guest/login", {
                email,
                password,
            });
            console.log("full login response", response);


            const token = response.data.payload.token;
            sessionStorage.setItem("token", token);
            console.log("saved token:", token);
            setMessage("Login successful!");
            setMessageType("success");
            navigate("/landingpage")
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            setMessage("Invalid email or password.");
            setMessageType("error");
        }
    };



    return (

        <>
                <h2 className="auth-title">Login</h2>
                {message && ( <div className={`message ${messageType}`}>{message}</div>)}
                <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button 
                    text="Login" variant="primary" type="submit" className="login-button" 
                    onClick={handleLogin}
                />

                <p className="auth-switch">
                    Dont have an account? 
                    <span className="auth-toggle" onClick={toggle}>
                        {" "} Sign up
                    </span>
                </p>
            
        
    </>
    );
    
}
export default LoginPage;