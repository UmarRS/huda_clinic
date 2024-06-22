import logo from "./logo.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
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

        <Route path="/partners" element={<Partners />} />
        <Route path="/volunteers" element={<Volunteers />} />
        {/* HEALTH SERVICES */}
        <Route path="/healthservices" element={<HealthServices />} />
        {/* DONATE */}
        <Route path="/donate" element={<Donate />} />
        {/* NEWSLETTER */}
        <Route path="/newsletter" element={<Newsletter />} />
        {/* PATIENT PORTAL */}
        <Route path="/newpatient" element={<NewPatient />} />

        {/* WILL DO LATER */}
      </Routes>
    </div>
  );
}

export default App;
