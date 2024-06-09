import logo from "./logo.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import Navbar from "Navbar/Navbar";
import HealthServices from "Health_Services/healthServices";
import Donate from "Donate/donate";
import OurStory from "About_Us/ourStory";
import Volunteers from "About_Us/volunteers";
import Partners from "About_Us/partners";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Button>Welcome</Button>} />
        <Route path="/health-services" element={<HealthServices />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </div>
  );
}

export default App;
