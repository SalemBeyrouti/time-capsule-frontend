import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/index.css";

import LandingPage from "./Pages/LandingPage";
import CreateCapsule from "./Components/CreateCapsule/CreateCapsule";
import PublicWall from "./Pages/PublicWall";
import Profile from "./Pages/Profile";

import PreviewCapsule from "./Pages/PreviewCapsule";
import Auth from "./Pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Components/Shared/About";
import ContactUs from "./Components/Shared/ContactUs";
import OurTeam from "./Components/Shared/OurTeam";
import TermsPrivacy from "./Components/Shared/TermsPrivacy";

const App = () => {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          

          <Route path="/auth" element={<Auth />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/createcapsule" element={<CreateCapsule />} />
          <Route path="/publicwall" element={<PublicWall />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/preview" element={<PreviewCapsule />} />
          <Route path="/previewcapsule" element={<PreviewCapsule />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/privacy" element={<TermsPrivacy />} />

        </Routes>
        </BrowserRouter>



      </div>

  );
  





    
  
 
    
  
};

export default App;
