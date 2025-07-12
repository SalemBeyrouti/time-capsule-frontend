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

function App() {

  return(
    <BrowserRouter>
    
    <Navbar />
    <Footer />
    </BrowserRouter>
  )
 
    
  
}

export default App;
