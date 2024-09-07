import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImageCard from "./components/ImageCard";
import MotorCity from "./motorCity.jpeg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const bannerStyle = {
    backgroundImage: `url(${MotorCity})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "calc(100vh - 96px)", // Adjust to compensate for header height if needed
    marginTop: "-0.5rem",
  };

  const contentStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black overlay
    paddingTop: "15rem", // Adjust padding-top to bring content down from the top
  };

  const containerStyle = {
    maxWidth: "100%", // Ensure content stretches to full width
    padding: "0", // Remove padding from the container
  };
  const { t } = useTranslation();

  return (
    <div className="container" style={containerStyle}>
      <div className="banner relative" style={bannerStyle}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-10xl md:text-6xl sm:text-5xl font-bold mb-6 md:mb-12">
              {t("welcome")}
            </h1>
            <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-12">
              {t("help")}
            </h2>
            <div className="buttons-container flex justify-center space-x-4 mb-12">
              <Link to="/newpatient">
                <Button className="rounded-full px-8 py-4 text-lg bg-purple-500 hover:bg-blue-500 hover:text-white">
                  {t("new_patients")}
                </Button>
              </Link>
              <a
                target="_blank"
                href="https://myidentity.platform.athenahealth.com/oauth2/auset0ja9xZ2Hniep296/v1/authorize?client_id=0oa5jhhy36lw4YE6S297&code_challenge=73_ufOHvXzZpHSjCP2l8iqfMYO0x8SAogE2TBe6FZgo&code_challenge_method=S256&nonce=JoQ1tNE3NstCrsOY7zGCF2PcuvcyjJQzgCdTKOg0pqLuUTFtQ3glXOcG9idrySEZ&redirect_uri=https%3A%2F%2Fpxppapp.px.athena.io%2Flogin&response_type=code&state=t6SZvaYCIeYZco1d3LnRFkDqz7eG8TziAunvSMUIb2X7zoGukj3jsAowauJjQlk2&scope=openid%20email%20communicator.external_accounts.read"
              >
                <Button className="rounded-full px-8 py-4 text-lg bg-purple-500 hover:bg-blue-500 hover:text-white">
                  {t("patient_portal")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="services-container max-w-6xl mx-auto pt-16 mx-auto  md:pb-24">
        <h1 className="subheading text-8xl md:text-6xl sm:text-5xl font-normal pt-16 mb-12">
          {t("our_services")}
        </h1>
        <div className="image-cards-container grid gap-6 md:flex md:flex-wrap md:justify-center md:items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ImageCard imageSrc="/primary-care.jpg" name={t("primary_care")} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ImageCard
              imageSrc="/mental-health.jpg"
              name={t("mental_health")}
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ImageCard
              imageSrc="/dental-services.jpg"
              name={t("dental_care")}
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ImageCard imageSrc="/vision-care.jpeg" name={t("vision_care")} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ImageCard
              imageSrc="/specialty-services.jpg"
              name={t("specialty_care")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
