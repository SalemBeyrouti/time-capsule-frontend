import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../Shared/TextInput/TextInput";
import Button from "../../../Shared/Button";

const LoginPage = ({ toggle }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Worked");
    }, [email]);

    return (

        <>
                <h2 className="auth-title">Login</h2>
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
                    onClick={async () => {
                        console.log(email, password);
                        // const res = await axios.post("loginurl", {
                        //     email: email,
                        //     pass: passord
                        // });

                        // if(res.data.success)
                        if (true) {
                            navigate("/landingpage")
                        } else {
                            //display error
                        }
                    }}
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