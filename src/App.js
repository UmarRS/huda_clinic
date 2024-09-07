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
import DonateSection from "Donate/Donate_Section";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <DonateSection />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/ourteam" element={<Partners />} />
          <Route path="/healthservices" element={<HealthServices />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/newpatient" element={<NewPatient />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
