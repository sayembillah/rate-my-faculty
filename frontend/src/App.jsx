import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermofService from "./pages/TermofService";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SearchFaculty from "./pages/SearchFaculty";
import FacultyDetails from "./pages/FacultyDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/tos" element={<TermofService />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/searchfaculty" element={<SearchFaculty />} />
        <Route path="/facultydetails" element={<FacultyDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
