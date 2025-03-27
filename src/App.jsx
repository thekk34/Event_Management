import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
// import Login from "./components/Login";
// import ForgotPassword from "./components/ForgotPassword";
import SessionDetails from "./components/SessionDetails";
import Speakers from "./components/Speaker"; 
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
                <Route path="/session/:id" element={<SessionDetails />} />
                <Route path="/speakers" element={<Speakers />} /> 
            </Routes>
        </Router>
    );
}

export default App;
