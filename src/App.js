import Logo from "./logo.svg";
import Footer from "Footer/Footer";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Updated import for Link
import Navbar from "Navbar/Navbar";
import HealthServices from "Health_Services/healthServices";
import Donate from "Donate/donate";
import OurStory from "About_Us/ourStory";
import Volunteers from "About_Us/volunteers";
import Partners from "About_Us/partners";
import Home from "Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "About_Us/contactUs";
import Newsletter from "Newsletter/Newsletter";
import OurMission from "About_Us/ourMission";

import NewPatient from "Patient/NewPatient";
import NotFound from "404_NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ABOUT */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/ourmission" element={<OurMission />} />

        <Route path="/ourteam" element={<Partners />} />
        {/* <Route path="/volunteers" element={<Volunteers />} /> */}
        {/* HEALTH SERVICES */}
        <Route path="/healthservices" element={<HealthServices />} />
        {/* DONATE */}
        <Route path="/donate" element={<Donate />} />
        {/* NEWSLETTER */}
        <Route path="/newsletter" element={<Newsletter />} />
        {/* PATIENT PORTAL */}
        <Route path="/newpatient" element={<NewPatient />} />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
