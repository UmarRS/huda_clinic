import banner from "./images/banner.jpg";
import buildingImg from "./images/hudaBuilding.png";
import groupImg from "./images/groupImage.jpg";
import chairmanImg from "./images/drtayeb.jpg";
import image1 from "./images/image1.jpg";
import nafc2021 from "./images/NAFCSeal2021.png";
import nafc2022 from "./images/NAFC2022.png";
import nafc2023 from "./images/NAFC_2023_Gold_Transparent_Background.png";
import nafc2024 from "./images/NAFCSeal2024.png";
import nafcLogo from "./images/NAFCSeal.png";
import fcom from "./images/fcom.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Component() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-8">
      <div className="relative">
        <img
          src={banner}
          alt="Banner"
          width={1200}
          height={400}
          className="w-full h-[24rem] object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-white">
            {t("about_us")}
          </h1>
          <p className="text-lg font-serif italic font-bold text-white">
            {t("mission_statement")}
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          {t("our_story")}
        </h2>
        <div className="flex flex-col items-center">
          <img
            src={groupImg}
            alt="Our Story"
            className="w-full md:w-1/2 mb-4 border-2 border-gray-300 rounded-xl"
          />
          <p className="text-lg text-gray-700 text-center">
            {t("story_paragraph1")}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={buildingImg}
            alt="Our Story"
            className="w-full md:w-1/2 mb-4 border-2 border-gray-300 rounded-xl"
          />
          <p className="text-lg text-gray-700 text-center">
            {t("story_paragraph2")}
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row mb-12">
        <section className="md:w-1/2 md:mr-4 mb-4 md:mb-0 flex flex-col items-center">
          <h3 className="text-2xl font-semibold">{t("our_facilities")}</h3>
          <img
            src={image1}
            alt="Our Facilities"
            className="w-[70%] mb-4 border-2 border-gray-300 rounded-xl"
          />
          <p className="text-lg text-gray-700 text-center">
            {t("facilities_text")}
          </p>
        </section>
        <section className="md:w-1/2 flex flex-col items-center">
          <h3 className="text-2xl font-semibold">{t("chairman")}</h3>
          <img
            src={chairmanImg}
            alt="Chairman"
            className="w-[70%] mb-4 border-2 border-gray-300 rounded-xl"
          />
          <p className="text-lg text-gray-700 text-center">
            {t("chairman_text")}
          </p>
        </section>
      </div>

      <section className="mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          {t("proud_members")}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <img
            src={nafc2021}
            alt="Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-2 border-gray-300 rounded-xl"
          />
          <img
            src={nafc2022}
            alt="Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-2 border-gray-300 rounded-xl"
          />
          <img
            src={nafc2023}
            alt="Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-2 border-gray-300 rounded-xl"
          />
          <img
            src={nafc2024}
            alt="Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-2 border-gray-300 rounded-xl"
          />
          <img
            src={nafcLogo}
            alt="Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-2 border-gray-300 rounded-xl"
          />
          <img
            src={fcom}
            alt="Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-2 border-gray-300 rounded-xl"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">{t("discover_more")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Link to="/ourteam" className="block">
            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-pointer">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <h3 className="ml-2 text-2xl font-semibold">{t("our_team")}</h3>
              </div>
              <p className="text-lg text-gray-700">
                {t("our_team_description")}
              </p>
              <span className="text-blue-500 text-lg">{t("learn_more")}</span>
            </div>
          </Link>

          <Link to="/ourmission" className="block">
            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-pointer">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <h3 className="ml-2 text-2xl font-semibold">
                  {t("our_mission")}
                </h3>
              </div>
              <p className="text-lg text-gray-700">
                {t("our_mission_description")}
              </p>
              <span className="text-blue-500 text-lg">{t("learn_more")}</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
