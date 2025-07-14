import React, { useState } from "react";
import "./style.css";
import LoginPage from "../../Components/Content/auth/LoginPage";
import SignupPage from "../../Components/Content/auth/SignUpPage";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-page">
            <div className="auth-box">
                {isLogin ? (
                    <LoginPage toggle={switchForm} />
                ) : (
                    <SignupPage toggle={switchForm} />
                )}
            </div>
        </div>
    );
};

export default Auth;