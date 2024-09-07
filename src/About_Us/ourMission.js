import { useTranslation } from "react-i18next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import banner from "./images/banner.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image2 from "./images/image2.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
            {t("mission_banner_title")}
          </h1>
          <p className="text-lg font-serif italic font-bold text-white">
            {t("mission_quote")}
          </p>
        </div>
      </div>
      <section className="mt-12">
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={image3}
              alt="Section 1"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-xl md:order-last"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {t("history_and_mission")}
              </h3>
              <h4 className="text-xl font-semibold mb-2">
                {t("origins_and_expansion")}
              </h4>
              <p className="text-lg">{t("origins_expansion_text")}</p>
              <h4 className="text-xl font-semibold mb-2">
                {t("comprehensive_services")}
              </h4>
              <p className="text-lg">{t("comprehensive_services_text")}</p>
              <h4 className="text-xl font-semibold mb-2">
                {t("mission_and_vision")}
              </h4>
              <p className="text-lg">{t("mission_vision_text")}</p>
            </div>
          </div>
          {/* Similar translation for other sections */}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">{t("discover_more")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Link to="/ourstory" className="block h-full">
            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-pointer h-full flex flex-col justify-between">
              <div>
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
                      d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 0l7.5 7.5 7.5-7.5"
                    />
                  </svg>
                  <h3 className="ml-2 text-2xl font-semibold">
                    {t("our_story")}
                  </h3>
                </div>
                <p className="text-lg text-gray-700">{t("story_paragraph1")}</p>
              </div>
              <span className="text-blue-500 text-lg mt-4 inline-block">
                {t("learn_more")}
              </span>
            </div>
          </Link>
          <Link to="/ourteam" className="block h-full">
            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:scale-105 hover:bg-blue-100 cursor-pointer h-full flex flex-col justify-between">
              <div>
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
                  <h3 className="ml-2 text-2xl font-semibold">
                    {t("our_team")}
                  </h3>
                </div>
                <p className="text-lg text-gray-700">
                  {t("our_team_description")}
                </p>
              </div>
              <span className="text-blue-500 text-lg mt-4 inline-block">
                {t("learn_more")}
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
