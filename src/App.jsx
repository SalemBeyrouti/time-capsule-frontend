import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import './styles/App.css';
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import CapsuleCard from "./Components/Landing/CapsuleCard";
import CapsulePage from "./Pages/CapsulePage";
import Home from "./Home";
import LoginPage from "./Pages/Auth/LoginPage"
import SignupPage from "./Pages/Auth/SignupPage"
import LandingPage from "./Pages/LandingPage";


function App() {
  const capsuleNumber = 1;


  return(
    <BrowserRouter>
    <Routes>
      
    
    {/* <CapsulePage />
    {capsuleNumber === 1 && <CapsuleCard capsule={{title: "1st capsule", submit:"monday" }} /> } */}
    
    {/* <Navbar /> */}
    {/* <Home /> */}
    {/* <Footer /> */}
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<LandingPage />}  />
    <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </BrowserRouter>
  )
 
    
  
}

export default App;
