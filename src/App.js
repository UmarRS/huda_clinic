import React, { useState, useEffect } from "react";
import Logo from "./logo.svg";
import Footer from "Footer/Footer";
import "./App.css";
import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "Navbar/Navbar";
import HealthServices from "Health_Services/healthServices";
import Donate from "Donate/donate";
import OurStory from "About_Us/ourStory";
import Partners from "About_Us/partners";
import Home from "Home/Home";
import ContactUs from "About_Us/contactUs";
import Newsletter from "Newsletter/Newsletter";
import OurMission from "About_Us/ourMission";
import NewPatient from "Patient/NewPatient";
import NotFound from "404_NotFound/NotFound";
import DonateSection from "Donate/Donate_Section";
import "./i18n"; // Add this import
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  // Modal state to show language selection
  const [showLanguageModal, setShowLanguageModal] = useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageModal(false); // Close modal after language selection
  };

  useEffect(() => {
    // Logic to show the modal on the first load or based on user's preference
    const languageSet = localStorage.getItem("languageSelected");
    if (languageSet) {
      setShowLanguageModal(false); // If language was selected before, don't show the modal
    } else {
      setShowLanguageModal(true); // Show the modal if it's the first visit
    }
  }, []);

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
          {/* doing after */}
          <Route path="/ourteam" element={<Partners />} />

          <Route path="/healthservices" element={<HealthServices />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/newsletter" element={<Newsletter />} />
          {/* <Route path="/newpatient" element={<NewPatient />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Language Selection Modal */}
        {showLanguageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-10 rounded-lg shadow-lg w-96 text-center space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Select Your Language
              </h2>
              <div className="grid grid-cols-3 gap-6">
                <button
                  onClick={() => changeLanguage("en")}
                  className="w-24 h-24 rounded-full bg-blue-600 text-white hover:bg-blue-800 flex items-center justify-center transition duration-300 transform hover:scale-105"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("es")}
                  className="w-24 h-24 rounded-full bg-green-600 text-white hover:bg-green-800 flex items-center justify-center transition duration-300 transform hover:scale-105"
                >
                  Español
                </button>
                <button
                  onClick={() => changeLanguage("bn")}
                  className="w-24 h-24 rounded-full bg-yellow-500 text-white hover:bg-yellow-700 flex items-center justify-center transition duration-300 transform hover:scale-105"
                >
                  বাংলা
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="w-24 h-24 rounded-full bg-red-500 text-white hover:bg-red-700 flex items-center justify-center transition duration-300 transform hover:scale-105"
                >
                  عربى
                </button>
                <button
                  onClick={() => changeLanguage("ur")}
                  className="w-24 h-24 rounded-full bg-purple-600 text-white hover:bg-purple-800 flex items-center justify-center transition duration-300 transform hover:scale-105"
                >
                  اردو
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="w-24 h-24 rounded-full bg-pink-600 text-white hover:bg-pink-800 flex items-center justify-center transition duration-300 transform hover:scale-105"
                >
                  Français
                </button>
                {/* <button
                  onClick={() => changeLanguage("wf")}
                  className="w-24 h-24 rounded-full bg-indigo-500 text-white hover:bg-indigo-700 flex items-center justify-center transition duration-300 transform hover:scale-105"
                >
                  Wollof
                </button> */}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
