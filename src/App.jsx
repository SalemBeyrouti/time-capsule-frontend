import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/index.css";

import LandingPage from "./Pages/LandingPage";
import CreateCapsule from "./Components/CreateCapsule/CreateCapsule";

import Auth from "./Pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";




const App = () => {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          

          <Route path="/auth" element={<Auth />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
        </BrowserRouter>



      </div>

  );
  





    
  
 
    
  
};

export default App;
