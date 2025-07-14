import {Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Favorite from "./Pages/Favorites";
import CapsulePage from "./Pages/CapsulePage";
import LoginPage from "./Pages/Auth/LoginPage"
import SignupPage from "./Pages/Auth/SignupPage"

function Home() {
    return (
        <main className="home-content">
            <Routes>
                <Route path="/signup" element={<SignupPage />}  />
                <Route path="/login" element={<LoginPage />}  />
                <Route path="/" element={<LandingPage />}  />
                <Route path="/favorites" element={<Favorite />} />
                <Route path="/capsules" element={<CapsulePage />} />

            </Routes>
        </main>
    );
}

export default Home;